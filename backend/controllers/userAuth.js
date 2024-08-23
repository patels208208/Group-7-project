import {createContext, useContext, useEffect, useLayoutEffect, useState} from "react";
import api from './api'; //importing axios instance

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState();

    useEffect(() => {
        const fetchMe = async () => {
            try {
                const response = await api.get('api/me');
                setToken(response.data.accessToken);
            } catch {
                setToken(null);
            }
        };

        fetchMe();
    }, []);

    //using axios interceptors to add token to requests
    useLayoutEffect(() => {
        const authInterceptor = api.interceptors.request.use((config) => {
            config.headers.Authorization = !config._retry && token ? `Bearer ${token}` : config.headers.Authorization;
            return config;
        });

    return () => {
        api.interceptors.request.eject(authInterceptor);
    };  
}, [token]);      

useLayoutEffect(() => {
    const refreshInterceptor = api.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            if (
                error.response.status === 401 && error.response.data.message === 'Unauthorized')
                {
                    try {
                        const response = await api.get('api/refreshToken');

                        setToken (response.data.accessToken);

                        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
                        originalRequest._retry = true;

                        return api(originalRequest);
                    } catch {
                        setToken(null);
                    }
                }
                return Promise.reject(error);
            },
        );

        return () => {
            api.interceptors.response.eject(refreshInterceptor);
        };
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, useAuth };