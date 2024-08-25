import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import BottomNavigation from "./BottomNavigation";

const MainLayout = () => {
  return (
    <div>
      <Navigation zIndex="z-20" />
      <BottomNavigation />
      <Outlet />
    </div>
  );
};

export default MainLayout;
