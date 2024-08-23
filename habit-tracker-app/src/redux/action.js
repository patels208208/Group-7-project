  // actions.js
export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

export const postDataRequest = () => ({
  type: POST_DATA_REQUEST
});

export const postDataSuccess = (data) => ({
  type: POST_DATA_SUCCESS,
  payload: data
});

export const postDataFailure = (error) => ({
  type: POST_DATA_FAILURE,
  payload: error
});

export const postData = (payload) => {
  return async (dispatch) => {
    dispatch(postDataRequest());
    try {
      const response = await fetch('http://localhost:3001/completion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      dispatch(postDataSuccess(data));
    } catch (error) {
      dispatch(postDataFailure(error.message));
    }
  };
};
