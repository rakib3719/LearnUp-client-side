import { useEffect, useState } from "react";
import useCommonAxios from "../../hook/useCommonAxios";
import AssignmentCard from "../../component/assignmentCard/AssignmentCard";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";





const Assignments = () => {

    const commonAxios = useCommonAxios()
    const [assignMentData, setAssignmentData] = useState([])
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
    const [difficultyLevel, setDifficultyLevel] = useState('')


    const deleteHandle = (id, email)=>{

        if(!user){
            Swal.fire({
                icon: "error",
                title: "Delete after Login",
        text: "Please log in to delete this item."
        
                
              });
              return;
        }
        
        if(user?.email !== email){
        
            Swal.fire({
                icon: "error",
                title: "Permission Denied",
                text: "You can only delete assignments that you have created yourself!",
                
              });
              return;
        }



        Swal.fire({
            title: "Are you sure ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
        

            
        axiosSecure.delete(`/delete?id=${id}&email=${email}`)
        .then(data => {

            if(data.data == 'forbidden access'){

                 Swal.fire({
                
                title: "Forbidden access!",
                text: "not permission",
                icon: "error"
              });  
            }

            if(data.data.deletedCount > 0){

                  Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = assignMentData.filter(assignMentData => assignMentData._id !== id );
              setAssignmentData(remaining)
          
            }

            
        })
 
      
            }
          });
        
            }
useEffect(()=>{

commonAxios.get(`/assignment?level=${difficultyLevel}`)
.then(data=>{
    setAssignmentData(data.data)
    setLoading(false)
})

},[])

const filterHandle = (level)=>{
setDifficultyLevel(level)

}



    return (
       <div>

<h1  className="text-center">All Assignment here</h1>


{loading?<div  className="text-center flex mt-32 items-center justify-center w-[100%]"> <span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span></div>:
<div>


<div  className="flex  justify-end p-2">
<div>
<div >
  <button className="bg-[#074151] px-4 text-center mb-2 text-white rounded py-1">Filter</button>
</div> 
<div className="">
<button onClick={()=>{
  filterHandle('')
}} className={  !difficultyLevel ? `  bg-[#C24914] px-4 text-center mb-2 text-white border-r py-1` : `  bg-transparent] px-4 text-center mb-2 text-black  border py-1` } >All</button>
<button
 onClick={()=>{
  filterHandle('easy')
}}

className={  difficultyLevel === 'easy' ? `  bg-[#C24914] px-4 text-center mb-2 text-white border-r py-1` : `  bg-transparent] px-4 text-center mb-2 text-black  border py-1` }

> Easy </button>
<button onClick={()=>{
  filterHandle('medium')
}} 
className={  difficultyLevel === 'medium' ? `  bg-[#C24914] px-4 text-center mb-2 text-white border-r py-1` : `  bg-transparent] px-4 text-center mb-2 text-black  border py-1` }

> Medium </button>
<button 

onClick={()=>{
  filterHandle('hard')
}}

className={  difficultyLevel === 'hard' ? `  bg-[#C24914] px-4 text-center mb-2 text-white border-r py-1` : `  bg-transparent] px-4 text-center mb-2 text-black  border py-1` }
> Hard </button>

</div>
</div>
</div>
<div className="grid  md:grid-cols-2 gap-8 lg:grid-cols-3">
{



  assignMentData.map(assignMentData => <AssignmentCard 
    key={assignMentData._id}
    assignMentData = {assignMentData}
    deleteHandle={deleteHandle}

></AssignmentCard>)
}
</div>

</div>

}
       </div>
  );
    
};

export default Assignments;