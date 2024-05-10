import { useEffect, useState } from "react";
import useCommonAxios from "../../hook/useCommonAxios";
import AssignmentCard from "../../component/assignmentCard/AssignmentCard";





const Assignments = () => {

    const commonAxios = useCommonAxios()
    const [assignMentData, setAssignmentData] = useState([])
    const [loading, setLoading] = useState(true)
useEffect(()=>{

commonAxios.get('/assignment')
.then(data=>{
    setAssignmentData(data.data)
    setLoading(false)
})

},[])



    return (
       <div>

<h1  className="text-center">All Assignment here</h1>


{loading?<div  className="text-center flex mt-32 items-center justify-center w-[100%]"> <span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span></div>:
<div className="grid  md:grid-cols-2 gap-8 lg:grid-cols-3">
{



  assignMentData.map(assignMentData => <AssignmentCard 
    key={assignMentData._id}
    assignMentData = {assignMentData}


></AssignmentCard>)
}
</div>}
       </div>
  );
    
};

export default Assignments;