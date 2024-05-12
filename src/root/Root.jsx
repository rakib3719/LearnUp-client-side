import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";



const Root = () => {
    return (
      <div>
          <div className="w-[96%] lg:w-[90%] max-w-7xl mx-auto">
   
   <Navbar></Navbar>
 <Outlet></Outlet> 
</div>

<Footer></Footer>
      </div>
    );
};

export default Root;