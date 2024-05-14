import { Link, useParams } from "react-router-dom";
import { RiSendPlaneFill } from 'react-icons/ri';
import useCommonAxios from "../../hook/useCommonAxios";
import { useEffect, useState } from "react";
import useTheme from "../../hook/useTheme";
import Swal from "sweetalert2";

const GiveMark = () => {
  const commonAxios = useCommonAxios()
  const {isDarkMode} = useTheme();

const {id }= useParams();
const [data, setData] = useState([])

useEffect(()=>{
commonAxios.get(`/giveMark?id=${id}`)
.then(res => setData(res.data) )


}, [])


const markHandle = e => {
  e.preventDefault()
  const mark = e.target.mark.value;
  const feedback = e.target.feedback.value;
const markDetails = {mark, feedback};
commonAxios.patch(`/giveMark?id=${id}`, markDetails)
.then(data=> {

  if(data.data.modifiedCount > 0){

    Swal.fire({
      title: 'Marking completed successfully',
      icon: 'success',
      confirmButtonText: 'Ok'
  })
  e.target.reset()
  }

})


}

    return (
        <div className={`${!isDarkMode && 'bg-gray-100'} min-h-screen py-12 px-4 sm:px-6 lg:px-8 lg:flex justify-between gap-16 mt-12 items-center`}>

          <div className="lg:w-1/2">

        <iframe  src={data.pdfLink} className="md:w-[300px] h-[300px] w-[250px] "></iframe>

          <div className="mt-4">
          <label className={`before:block text-lg ${!isDarkMode && 'text-gray-700'}  font-medium `}>Note:</label>
         <textarea disabled value={data.note} name="" id="" className={`mt-4 block ${!isDarkMode && 'bg-[#F9E0AE]'} p-4 w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500`}>
{data.note}


         </textarea>
          </div>
          </div>
        <div className={`lg:w-1/2  ${!isDarkMode ? "bg-white" : 'border'} h-full mt-8 md:mt-0 rounded-lg overflow-hidden shadow-md`}>
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold mb-4">Give Marks for Assignment </h2>
            <form   onSubmit={markHandle}>
              <div className="mb-4">
                <label className={`block text-sm font-medium ${!isDarkMode && 'text-gray-700'}`}>Marks:</label>
                <input
                name="mark"
                  type="number"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus "
                 
                 
                />
              </div>
              <div className="mb-4">
                <label className={`block text-sm font-medium ${!isDarkMode && 'text-gray-700'}`}>Feedback:</label>
                <textarea
                name="feedback"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                 
               
                />
              </div>
              <button
                type="submit"
                className="bg-[#C24914] hover:bg-[#792c0b] text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <RiSendPlaneFill className="mr-2" /> Submit
              </button>
            </form>
          </div>
          <div className={` ${isDarkMode ? 'bg-[#07192a]' : 'bg-gray-100'}  bg-gray-100 px-6 py-3`}>
            <Link to="/pending" className="text-[#C24914]  hover:text-[#792c0b] font-bold">
              Back to Pending Assignments
            </Link>
          </div>
        </div>
      </div>
    );
};

export default GiveMark;