import PropTypes from 'prop-types';
import useTheme from '../../hook/useTheme';

const MyassignmentInfo = ({ myAssData, idx }) => {
  const { assginmentTitle, marks, obtainedMarks, status, feedback } = myAssData;
  const { isDarkMode } = useTheme();
  const obtainedMarksDisplay = obtainedMarks || '--';

  return (
    <div className="container font-poppoins mt-6 p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className={`mb-4 text-2xl font-semibold ${isDarkMode && 'text-white'} leading-tight`}>#{idx + 1}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs md:text-[14px]">
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Assignment Title</th>
              <th className="p-3">Assignment Marks</th>
              <th className="p-3 ">Obtained Marks</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
              <td className="p-3">{assginmentTitle}</td>
              <td className="p-3">{marks}</td>
              <td className="p-3 ">{obtainedMarksDisplay}</td>
              <td className="p-3 ">
                <span className={`px-3 py-1 font-semibold rounded-md ${status !== 'pending' ? 'bg-violet-600' : 'bg-orange-500'} dark:text-gray-50`}>
                  <span>{status}</span>
                </span>
              </td>
            </tr>
            {feedback && (
              <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td colSpan="4" className="p-3">
                  <div className="w-full border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <div className="p-3">
                      <p className='font-bold text-lg'>Feedback:</p>
                    </div>
                    <textarea disabled className='w-full px-24 border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50'>
                      {feedback}
                    </textarea>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

MyassignmentInfo.propTypes = {
  myAssData: PropTypes.object,
  idx: PropTypes.number
};

export default MyassignmentInfo;
