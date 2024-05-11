import { Link, useParams } from "react-router-dom";
import { RiSendPlaneFill } from 'react-icons/ri';
import useCommonAxios from "../../hook/useCommonAxios";

const GiveMark = () => {
  const commonAxios = useCommonAxios()

const {id }= useParams();

const markHandle = e => {
  e.preventDefault()
  const mark = e.target.mark.value;
  const feedback = e.target.feedback.value;
const markDetails = {mark, feedback};
commonAxios.patch(`/giveMark?id=${id}`, markDetails)
.then(data=> console.log(data.data))


}

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold mb-4">Give Marks for Assignment </h2>
            <form   onSubmit={markHandle}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Marks:</label>
                <input
                name="mark"
                  type="number"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus "
                 
                 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Feedback:</label>
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
          <div className="bg-gray-100 px-6 py-3">
            <Link to="/pending" className="text-[#C24914]  hover:text-[#792c0b] font-bold">
              Back to Pending Assignments
            </Link>
          </div>
        </div>
      </div>
    );
};

export default GiveMark;