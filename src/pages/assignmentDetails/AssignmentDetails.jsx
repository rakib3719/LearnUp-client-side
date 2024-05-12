import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCommonAxios from "../../hook/useCommonAxios";

import { ColorRing } from "react-loader-spinner";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdSave } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { MdNoteAlt } from "react-icons/md";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import useTheme from "../../hook/useTheme";
import { ToastContainer, toast } from "react-toastify";



const AssignmentDetails = () => {


  const {isDarkMode} = useTheme()
    const {id} = useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(data);
    const commonAxiosSecure = useCommonAxios();
    const axiosSecure = useAxiosSecure()
const {user} = useAuth()
const {title, description, mark, thumb_img, level, date, name, email} = data;

const formHandle = e => {
    e.preventDefault()
    const pdfLink = e.target.pdf.value;
    const note = e.target.note.value;
    const examineeName = user.displayName;
    const examineeEmail = user.email;
    const status = 'pending';
    const marks = mark;
    const assginmentTitle = title;
    
    console.log(pdfLink, note, examineeEmail, examineeName);
    const examineInfo = {pdfLink, assginmentTitle, marks, note,status, examineeEmail, examineeName};

    console.log(examineInfo);
    axiosSecure.post('/assSubmit', examineInfo)
    .then(data => {
        {

if(data.data.acknowledged){

    // Swal.fire({
    //     title: 'Successfully Submitted assignment',
    //     text: 'Thank You',
    //     icon: 'success',
    //     confirmButtonText: 'Ok',
    //    customClass: 'z-10'
    //   });


    toast.success('Successsfully submitted')
      e.target.reset()
}

        }
    })
}


   
    useEffect(()=>{

        commonAxiosSecure(`/update?id=${id}`)
        .then(data => {
        
        setData(data.data)
        
        setLoading(false)
        
        })
        
            }, [])


            if(loading){

            return   <div  className='flex items-center mt-28 justify-center'>

            <ColorRing
                    
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
            
                
                  ></ColorRing>
                    </div>
            }
        // bg-[#4F847B]
    return (
        <div className={` rounded-md mt-6 font-raleway flex flex-col justify-between  ${!isDarkMode ? 'bg-gray-100' : 'rounded-none border-[#07192a] border-8'}  `}>
      <div className={`${!isDarkMode ?'bg-[#4F847B] ': 'bg-[#07192a]' }  py-4 px-4`}>
   
          <ul className="sm:flex  justify-between items-center text-white">
            <li>Created By {name}</li>
            <li className="mt-2 sm:mt-0">Creator Email: {email}</li>
          
          </ul>
        
      </div>

      <div className={`container   mx-auto px-2 sm:px-8 my-8`}>
        <div  className={`${!isDarkMode && 'bg-white shadow-md'}   md:p-16 rounded-lg `}>
          <div className="md:flex items-center p-6 mb:p-0 mb-8">
            <img src={thumb_img}alt="Thumbnail" className=" rounded-lg mr-8 shadow-md md:w-48 md:h-48" />
            <div className="mt-8">
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p className="font-semibold italic text-orange-500 py-2  text-xl ">Level: {level}</p>
              <p className="text-gray-600">Marks: {mark}</p>
              <p className="text-gray-600 font-work-sense">Due Date: {date}</p>
            </div>
          </div>
          <p className={`mb-4 px-6 mb:px-0 ${!isDarkMode && 'text-gray-800'}`}>Description: {description}</p>
          
          


        
<button className="btn bg-[#4F847B] ml-4 mb-8 hover:bg-[#12302b] text-white font-bold py-2 px-4 rounded" onClick={()=>document.getElementById('my_modal_3').showModal()}>    Take assignment </button>

<dialog  id="my_modal_3" className="modal z-0">
  <div className="modal-box">

 
<div  className={` mx-auto mt-8 ${!isDarkMode ? 'bg-[#F1F8E9]': 'bg-[#0a071b]'} py-8 border rounded px-2 `}>
         <ToastContainer   className='mt-20'></ToastContainer>
      <form  onSubmit={formHandle}>

    <h1 className="text-[#4F847B] flex gap-2 font-bold text-lg items-center pl-4">    <GrDocumentUpdate />Submit your Assignment</h1>

    <hr />


  


    <div className="border-2 mt-6  py-4 px-2  items-center">






<div className="flex gap-2 sm:flex    items-center flex-row ">
<FaFilePdf className="text-[#4F847B] text-3xl   "/>
<h1 className="sm:text-xl font-bold font-workSense   px-2"> Assignment PDF/Doc Link</h1>
</div>

<div className="col-span-3">
<input  name="pdf"  type="text" placeholder="Type here" className="input input-bordered mt-6 w-full bg-[#dcedc8]"  required/>

</div>

    </div>
    <div className="border-2 mt-6  py-4 px-2  items-center">






<div className="flex gap-2 sm:flex    items-center flex-row ">
<MdNoteAlt className="text-[#4F847B] text-3xl   "/>
<h1 className="sm:text-xl font-bold font-workSense   px-2"> Note</h1>
</div>

<div className="col-span-3">


<textarea required placeholder="Type here quick note" name="note" id="" className="input input-bordered mt-6 w-full bg-[#dcedc8]"></textarea>
</div>

    </div>



  





 <div  className="">


<button   className="flex text-white ml-auto  items-center font-bold font-workSense  gap-2 bg-[#4F847B] hover:bg-[#12302b]  mt-4 text-right  btn">

<MdSave  className="text-white flex text-3xl   "/>
<span >    Submit </span>
</button>



 </div>


 
      </form>
        </div>

      

    <form method="dialog">
  
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>


   
  </div>
</dialog>
        </div>
      </div>

      
    </div>
    );
};

export default AssignmentDetails;


