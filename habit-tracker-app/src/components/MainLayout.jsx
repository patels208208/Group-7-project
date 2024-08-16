import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <BottomNavigation />
      <Outlet />
    </div>
  )
}

export default MainLayout;