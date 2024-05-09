import {  FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast} from "react-toastify";
import loginImg from '../../assets/img/Group.png'
import useAuth from "../../hook/useAuth";


const Login = () => {


    const {login, loginWithGoogle, loginWithTwiter} = useAuth()




    const googleLogin = ()=> {
        loginWithGoogle()
        .then(result => {
            console.log(result.user.email);
            toast("Login Successfully")
            // setTimeout(()=> { navigate(currentLocation.state)}, 1000)
        })
        .catch(error => {
            toast.error(error.message)
        })
    }
    
    const twiterLogin = ()=> {
      loginWithTwiter()
      .then(result => {
          console.log(result);
          toast("Login Successfully")
          // setTimeout(()=> { navigate(currentLocation.state)}, 2000)
      })
      .catch(error => {
          toast.error(error.message)
      })
    }




    const loginHandle = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
        .then(result => {
            console.log(result);
            toast("Login Successfully")
        
            // setTimeout(()=> { navigate(currentLocation.state)}, 2000)
        })
        .catch(error => {
            console.log(error.message);
          
            let storeError=[]
            let errorLetter=error.message.split(' ')[2].split('')
            for (let i = 6; i < errorLetter.length-2; i++) {
             
             storeError.push(errorLetter[i])
         
             
            }
        
            error.message=="Firebase: Error (auth/invalid-credential)." ? toast.error( "Invalid Email Or Password"): storeError ? toast.error(storeError.join('')) : toast.error(error.message)
        })
   
        
       
    }










    return (
        <div className="bg-gray-300 p-4"> 
             <ToastContainer></ToastContainer>
        {/* <Navbar></Navbar> */}
          <div  className="loginbg md:flex justify-between pt-20 pb-20">
      <div>

        <img src={loginImg} alt="" />
      </div>
     
            <div className="login mx-auto md:w-1/2 md:ml-auto p-8  bg-white md:mr-16  rounded-lg shadow-lg ">
      
            <form onSubmit={loginHandle} >
      
              <h1 className="font-bold text-3xl ">Login</h1>
              <p>Welcome to us!</p>
      
      
      
              <hr />
      
              <label className="form-control w-full  ">
      <div className="label mt-4">
      <span className="label-text  font-semibold">Email</span>
      
      </div>
      <input required type="email" name="email" placeholder="Enter Your Email" className="input input-add input-bordered  rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
      <div className="label">
      
      </div>
      </label>
      
              <label className="form-control w-full  ">
      <div className="label mt-4">
      <span className="label-text  font-semibold">Password</span>
      
      </div>
      <input required type="password" name="password" placeholder="Enter Your Password" className="input input-add input-bordered  rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
      <div className="label">
      
      </div>
      </label>
      <input type="submit" className=" btn p-2  rounded-2xl mt-4  bg-[#4f847b]  text-white w-full" value="Log In" />
            </form>
            <p className="mt-2 text-center font-bold ">Or log In with</p>
            <div className="text-center sm:flex items-center justify-center">
      
      
      
      <button onClick={googleLogin} className="btn justify-center flex gap-2 py-2 items-center bg-[#357488] sm:max-w-xs sm:w-auto  rounded-full w-full text-white  hover:bg-[#4595ae] mt-2  px-10 mr-3" > <FaGoogle></FaGoogle>  Goggle </button>
      <button onClick={twiterLogin} className="btn text-white sm:w-auto justify-center flex gap-2 py-2 items-center  bg-blue-900 px-10 w-full mt-2 sm:max-w-xs  font-bold rounded-full">  <FaTwitter></FaTwitter>
      
      Twitter
      </button>
      </div>
            <p className="text-center mt-2">Don't  have any account? Please <Link to={'/registar'} className="text-[#4f847b] font-bold underline text-lg"> Registar </Link></p>
            </div>
         
              </div>
      </div>
    );
};

export default Login;