import { useEffect, useState } from "react";
import useCommonAxios from "../../hook/useCommonAxios";
import { useNavigate } from "react-router-dom";


const Pending = () => {
    const navigate = useNavigate()
    
    const commonAxios = useCommonAxios()
const [data, setData] = useState([]);


useEffect(()=>{

commonAxios('/pending')
.then(data => {setData(data.data)})

},[])

    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table  table-xs sm:table-sm md:table-md lg:table-lg border border-gray-300 ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Assignment title</th>
        <th>Examinee Name</th>
        <th>Marks</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     

      {

        data.map((data, idx) =>  <tr key={data._id}>
            <th>{idx +1}</th>
            <td>{data.assginmentTitle}</td>
            <td>{data.examineeName}</td>
            <td>{data.marks}</td>
            <td onClick={()=>{
                navigate(`/giveMark/${data._id}`)
            }} className="bg-[#C24914] rounded  py-2 px-2  text-center   sm:px-5 sm:py-3 text-white  btn ">Give Mark</td>
          </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Pending;