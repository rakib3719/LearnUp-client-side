import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";



const Root = () => {
    return (
        <div className="w-[96%] lg:w-[90%] max-w-7xl mx-auto">
   
            <Navbar></Navbar>
          <Outlet></Outlet> 
        </div>
    );
};

export default Root;