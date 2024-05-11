
import PropTypes from 'prop-types';

const MyassignmentInfo =({myAssData}) => {
    console.log(myAssData);

    const {assginmentTitle, marks, obtainedMarks,status,feedback,examineeName,examineeEmail} = myAssData;

   
    return (
        <div className="bg-gray-100  py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
           {/* bg-[#682a10] ml-4 mb-8 hover:bg-[#3d1707] */}
            <div className="bg-[#682a10] px-4 py-6 text-center text-white">
              <h1 className="text-2xl font-semibold"> {assginmentTitle}</h1>
              <p>Your Name : {examineeName}</p>
              <p>Your Email: {examineeEmail}</p>
           
            </div>
  
            {/* Result Details */}
            <div className="p-6">
            <div className="overflow-x-auto">
  <table className="table md:table-lg table-xs">
    {/* head */}
    <thead>
      <tr>
  
        <th>Assignment <br className='sm:hidden'/> marks</th>
        {
           obtainedMarks && <th>Obtained <br className='sm:hidden'/> Marks</th>
        }
        <th   >Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>{marks}</td>
        {
            obtainedMarks && <td>{obtainedMarks}</td>
        }
        <td   >     <span className={`${status === 'pending' ? 'bg-[#c0392b]' : 'bg-[#130f40]'} px-4 py-[6px] font-raleway rounded-full text-white`}>{status}</span> </td>
      </tr>
     
    </tbody>
  </table>
</div>
            </div>
  
      
          { feedback && <div className="bg-[#682a10] text-white p-6">
              <h3 className="text-lg font-semibold mb-2">Feedback:</h3>
              <p className="text-sm">
             {feedback}
              </p>
            </div>}
  
            {/* Actions */}
            
          </div>
        </div>
      </div>
    );
};

MyassignmentInfo.propTypes = {
    myAssData: PropTypes.object
};

export default MyassignmentInfo;