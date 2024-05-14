import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hook/useAxiosSecure";


const Pending = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const Axiossecure = useAxiosSecure()
const [data, setData] = useState([]);


useEffect(()=>{

  Axiossecure('/pending')
.then(data => {setData(data.data)

setLoading(false)


})

},[])


if(loading){
  return <div  className="text-center flex mt-32 items-center justify-center w-[100%]"> <span className="loading loading-bars loading-xs"></span>
  <span className="loading loading-bars loading-sm"></span>
  <span className="loading loading-bars loading-md"></span>
  <span className="loading loading-bars loading-lg"></span></div>
}

    return (

    

        <div>

          <h1 className="text-center font-bold font-raleway text-xl md:text-3xl mt-8 mb-8">All Pending Assignment Here</h1>
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