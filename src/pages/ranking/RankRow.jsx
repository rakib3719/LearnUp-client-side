
import PropTypes from 'prop-types';

const RankRow = ({rank, idx}) => {
console.log( rank.obtainedMarks, rank.totalMarks);

    const parcentageMark = (rank.totalObtainMarks / rank.totalMarks) * 100
    return (
    
            <tr >
          <th>{idx +1}</th>
          <td>{rank.examineeName}</td>
          <td>
            {/* {
            
        rank.differenceMarks < 0 ? 'Platinum':rank.differenceMarks < 40 ? 'Gold' : rank.differenceMarks < 50 ?'Silver': rank.differenceMarks < 80 ? 'Bronze'


            } */}
{
    parcentageMark >= 80 && parcentageMark <= 100 ? "A+" :  parcentageMark >= 70 && parcentageMark < 79 ? "A":
    parcentageMark >= 60 && parcentageMark < 69 ? "A-" : 
    parcentageMark >= 50 && parcentageMark < 59 ? "B" :
    parcentageMark >= 40 && parcentageMark < 49 ? "C" :
    parcentageMark < 40 ? "F": "Invalid"
}
            </td>
        
            <td>{Math.round(parseFloat(parcentageMark))}%</td>
         
        </tr>
     
    );
};

RankRow.propTypes = {
    rank: PropTypes.object,
    idx: PropTypes.number
};

export default RankRow;