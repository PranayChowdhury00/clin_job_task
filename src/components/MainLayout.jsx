import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar/NavBar";
import Footer from "../pages/Footer/Footer";



const MainLayout = () => {
 return (
  <div>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
 );
};

export default MainLayout;