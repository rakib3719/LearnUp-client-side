import {  NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

import logo from '../../assets/img/Abstract_Creative_Idea_Brain_Bulb_Logo-removebg-preview.png'
import logo2 from '../../assets/img/logooo22222.png'
import useAxiosSecure from "../../hook/useAxiosSecure";

import Theme from "../themeController/Theme";
import useTheme from "../../hook/useTheme";


const Navbar = () => {
  const {isDarkMode} = useTheme()

 const navigate = useNavigate()

    const {logOut, user} = useAuth()
    const axiosSecure = useAxiosSecure()
     const logOutHandle = ()=>{
        logOut()
        axiosSecure.get('/logout')
        
        
    }
    const nav = <div className="md:flex text-lg md:text-[16px] lg:text-xl font-poppins">
    
<li>    <NavLink  to='/' >  Home </NavLink></li>
<li>    <NavLink  to='/assignment' >  Assignments </NavLink></li>

{
    
   !user && <li>    <NavLink  to='/login' >Login </NavLink>  </li>}
{!user && <li>    <NavLink  to='/registar' >  Register  </NavLink></li>} 
{ user && <li>    <NavLink  to='/create_ass' >  Create Assignmentst </NavLink></li>} 
{ user && <li>    <NavLink  to='/pending' >  Pending Assignments </NavLink></li>} 


    </div>

    return (
        <div   className="navbar   z-10 relative">
          <div  className="absolute right-3 top-24 lg:top-28"><Theme></Theme></div>
        <div className="navbar ">
 <div className="navbar-start">
   <div className="dropdown">
     <div tabIndex={0} role="button" className="btn btn-ghost md:hidden -ml-4">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     </div>
     <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
       {nav}
     </ul>
   </div>
   <a className="  text-[16px] sm:text-2xl font-bold font-playFair -ml-4 sm:-ml-0"> <img src={isDarkMode? logo2 : logo} alt="" className="w-20 lg:w-28 " /> </a>
 </div>
 <div className={!user? "navbar-center hidden md:flex" : "navbar-center hidden lg:mr-16    md:flex"}>
   <ul className="menu menu-horizontal px-1">

       {nav}
   </ul>
 </div>

 <div>

  
 </div>








</div> 


{ user && <div className='dropdown dropdown-end z-50'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full' title=''>
              <img
                referrerPolicy='no-referrer'
                alt='User Profile Photo'
                src={user.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li onClick={()=> navigate('/myAssignment')} >
              <div className='bg-gray-600 text-white btn font-raleway  text-center '>My Attempted Assignments</div>
            </li>
           
            <li className='mt-2'>
              <button onClick={logOutHandle} className='btn font-raleway bg-[#C24914] text-white block text-center'>Logout</button>
            </li>
          </ul>
        </div>}

{/*   'primary-color': '#C24914',
      'bg-Primary': '#F9E0AE',
      'secondary-color': '#682C0E', */}
    </div>










    );
};

export default Navbar;