import { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import RankRow from "./RankRow";


const Rank = () => {

const [rank, setRank] = useState([]);
const axiosSecure = useAxiosSecure()

    useEffect(()=>{

axiosSecure.get('/rank')
.then(res => {
    setRank(res.data)
})

    },[])

    console.log(rank);
    return (
        <div>

        <h1 className="text-center font-bold font-raleway text-xl md:text-3xl mt-8 mb-8">Ranking and Grading</h1>
         <div className="overflow-x-auto">
<table className="table  table-xs sm:table-sm md:table-md lg:table-lg border border-gray-300 ">
  {/* head */}
  <thead>
    <tr>
      <th>Rank</th>
      <th>Examinee Name</th>
      <th>Grade</th>
  
      <th>Marks Percentage</th>
 
    </tr>
  </thead>
  <tbody>
    {/* row 1 */}
   

    {

    rank.map((rank, idx) =>  <RankRow
    
    key={rank._id}
    rank={rank}
    idx={idx}
    ></RankRow>)
    }
   
  </tbody>
</table>
</div>
      </div>
    );
};

export default Rank;