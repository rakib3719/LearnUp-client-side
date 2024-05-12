
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";


const Footer = () => {
    
    return (
        <div className=" bg-[black] pb-4 mt-16"  >
           <div   className="w-[94%]   md:w-[90%] mx-auto">





  

<div className="py-8">
<h4  className="sm:text-3xl  ml-4 sm:ml-0 text-xl font-bold text-white font-poppins mt-4" >LearnUp </h4>
</div>



  <div className="sm:flex ml-4 sm:ml-0 sm:text-left mx-auto justify-between items-center ">



<div  className="mt-4 text-white " >
<p  className="text-[#C24914] mt-4 font-bold text-lg font-playFair" >Contact us</p>

<div  className="flex mt-4 mb-4 " >
<p   className="bg-white w-10 h-1" ></p>
<p  className="bg-[#C24914] w-10 h-1   " ></p>

</div>


    <p   className="flex gap-2 items-center text-lg">  <FaPhone  className="text-[#C24914]"></FaPhone> 01608888888 </p>
    <p   className="flex gap-2 items-center text-lg">  <FaWhatsapp  className="text-[#C24914]"></FaWhatsapp> 01900000000 </p>
    <p   className="flex gap-2 mt-2 items-center text-lg">  <CiMail  className="text-[#C24914]"></CiMail> stsupport76769@gmail.com </p>
    <p   className="flex gap-2 mt-2 items-center text-lg">  <CiMail  className="text-[#C24914]"></CiMail> bannah76769@gmail.com </p>
</div>

<nav className="flex flex-col text-white space-y-2">
<p  className="text-[#C24914] mt-4 font-bold text-lg font-playFair" >Go To</p>

<div  className="flex mt-4 mb-4 " >
<p   className="bg-white w-10 h-1" ></p>
<p  className="bg-[#C24914] w-10 h-1   " ></p>

</div>
    <Link to='/' className="link link-hover">Home</Link>
    <Link to='/login' className="link link-hover">Log in</Link>
    <Link to='/registar' className="link link-hover">Registar</Link>
    <Link to={'/myAssignment'} className="link link-hover">My Assignment</Link>
  </nav> 
<nav className="flex flex-col space-y-2 text-white">
<p  className="text-[#C24914] mt-4 font-bold text-lg font-playFair" >Action</p>

<div  className="flex mt-4 mb-4 " >
<p   className="bg-white w-10 h-1" ></p>
<p  className="bg-[#C24914] w-10 h-1   " ></p>

</div>
    <Link to='/create_ass' className="link link-hover"   >Create Assignment</Link>
    <Link to={'/pending'} className="link link-hover" >Pending Assignment</Link>
    <Link to={'/assignment'} className="link link-hover">All assignment</Link>
    <a className="link link-hover">Advertisement</a>
  </nav> 
</div>




























<div  className="text-white font-poppins grid grid-cols-3 items-center gap-4 mt-16">


<div className="left-row">


<p className="bg-[#8D8080] w-[100%] h-1" ></p>
    
</div>


<div className="icon  mx-auto">



<div className="flex gap-4" >

  <a href="#">  <FaFacebook></FaFacebook></a>
<a href="#">    <FaTwitter></FaTwitter></a>
<a href="#">    <FaInstagram></FaInstagram></a>
  <a href="#">  <FaLinkedin  className="hidden sm:flex"></FaLinkedin></a>
</div>

</div>


<div className="right-row">
<p className="bg-[#8D8080] w-[100%] h-1 " >

  
</p>

</div>


</div>


           </div>



           <footer className="footer footer-center p-4 mt-4 text-white">
  <aside> 
 
    <p>Copyright © 2024 - All right reserved by Syed Rakib Hasan</p>

  </aside>
</footer>

        </div>
    );
};

export default Footer;