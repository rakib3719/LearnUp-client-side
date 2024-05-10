import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCommonAxios from "../../hook/useCommonAxios";
import img from '../../assets/img/5437683 1.png'
import { ColorRing } from "react-loader-spinner";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdSave } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { MdNoteAlt } from "react-icons/md";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const AssignmentDetails = () => {
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

    Swal.fire({
        title: 'Successfully Submitted assignment',
        text: 'Thank You',
        icon: 'success',
        confirmButtonText: 'Ok',
       customClass: 'z-10'
      });
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
        
    return (
        <div className=" rounded-md font-raleway flex flex-col justify-between bg-gray-100">
      <div className="bg-[#682a10] py-4 px-4">
   
          <ul className="sm:flex  justify-between items-center text-white">
            <li>Created By {name}</li>
            <li className="mt-2 sm:mt-0">Creator Email: {email}</li>
          
          </ul>
        
      </div>

      <div className="container  mx-auto px-2 sm:px-8 my-8">
        <div  className="bg-white   md:p-16 rounded-lg shadow-md">
          <div className="md:flex items-center p-6 mb:p-0 mb-8">
            <img src={img}alt="Thumbnail" className=" rounded-lg mr-8 shadow-md md:w-48 md:h-48" />
            <div className="mt-8">
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p className="text-gray-600 badge px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Level: {level}</p>
              <p className="text-gray-600">Marks: {mark}</p>
              <p className="text-gray-600 font-work-sense">Due Date: {date}</p>
            </div>
          </div>
          <p className="mb-4 px-6 mb:px-0 text-gray-800">Description: {description}</p>
          
          


        
<button className="btn bg-[#682a10] ml-4 mb-8 hover:bg-[#3d1707] text-white font-bold py-2 px-4 rounded" onClick={()=>document.getElementById('my_modal_3').showModal()}>    Take assignment </button>
<dialog  id="my_modal_3" className="modal z-0">
  <div className="modal-box">

    {/* start */}
<div  className=" mx-auto mt-8 bg-[#F1F8E9] py-8 border rounded px-2 ">
         
      <form  onSubmit={formHandle}>

    <h1 className="text-[#682a10] flex gap-2 font-bold text-lg items-center pl-4">    <GrDocumentUpdate />Submit your Assignment</h1>

    <hr />


  


    <div className="border-2 mt-6  py-4 px-2  items-center">






<div className="flex gap-2 sm:flex    items-center flex-row ">
<FaFilePdf className="text-[#682a10] text-3xl   "/>
<h1 className="sm:text-xl font-bold font-workSense   px-2"> Assignment PDF/Doc Link</h1>
</div>

<div className="col-span-3">
<input name="pdf"  type="text" placeholder="Type here" className="input input-bordered mt-6 w-full bg-[#dcedc8]"  required/>

</div>

    </div>
    <div className="border-2 mt-6  py-4 px-2  items-center">






<div className="flex gap-2 sm:flex    items-center flex-row ">
<MdNoteAlt className="text-[#682a10] text-3xl   "/>
<h1 className="sm:text-xl font-bold font-workSense   px-2"> Note</h1>
</div>

<div className="col-span-3">


<textarea required placeholder="Type here quick note" name="note" id="" className="input input-bordered mt-6 w-full bg-[#dcedc8]"></textarea>
</div>

    </div>



  





 <div  className="">

 <button  className="flex text-white ml-auto  items-center font-bold font-workSense  gap-2 bg-[#682a10] hover:bg-[#431907]  mt-4 text-right  btn">

<MdSave  className="text-white flex text-3xl   "/>
<span >    Submit </span>
</button>

 </div>


 
      </form>
        </div>

        {/* start */}

    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
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