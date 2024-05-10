import { Link } from "react-router-dom";
import { RiSendPlaneFill } from 'react-icons/ri';

const GiveMark = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold mb-4">Give Marks for Assignment </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Marks:</label>
                <input
                  type="number"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus "
                 
                 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Feedback:</label>
                <textarea
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                 
               
                />
              </div>
              <button
                type="button"
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