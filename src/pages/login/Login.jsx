import {  FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast} from "react-toastify";
import loginImg from '../../assets/img/Group.png'
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useTheme from "../../hook/useTheme";


const Login = () => {

const axiosSecure = useAxiosSecure()
    const {login, loginWithGoogle} = useAuth()

const {isDarkMode} = useTheme()


    const googleLogin = ()=> {
        loginWithGoogle()
        .then(result => {
            console.log(result.user.email);
          
            toast("Login Successfully")
            const email = result.user.email;
            console.log(email);
            axiosSecure.post('/jwt', {email})
            .then(data => console.log(data.data))

            // setTimeout(()=> { navigate(currentLocation.state)}, 1000)
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
        if(password.length < 6){
            toast.error("Password should be at least 6 characters");
            return
              }

        if(!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)){
 toast.error("Password Must have a Lowercase and a Uppercase letter");
 return
        }

        login(email, password)
        .then(result => {
            console.log(result);
            const email = result.user.email;
    

            toast("Login Successfully")
            axiosSecure.post('/jwt', {email})
            .then(data => console.log(data.data))
        
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
        <div className={`${!isDarkMode && 'bg-gray-300'} rounded-md p-4`}> 
             <ToastContainer></ToastContainer>
      
          <div  className="loginbg md:flex gap-8 justify-between pt-20 pb-20">
      <div>

        <img src={loginImg} alt="" />
      </div>
     
            <div className={` mx-auto ${!isDarkMode ? 'bg-white ': 'border shadow-lg'} p-4 rounded-lg md:w-[650px] md:mr-8   `}>
      
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
  
      </div>
            <p className="text-center mt-2">Don't  have any account? Please <Link to={'/registar'} className="text-[#4f847b] font-bold underline text-lg"> Registar </Link></p>
            </div>
         
              </div>
      </div>
    );
};

export default Login;