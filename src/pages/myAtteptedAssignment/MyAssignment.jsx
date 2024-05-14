import { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import MyassignmentInfo from "../../component/myassignmetInfo/MyassignmentInfo";


const MyAssignment = () => {
    const {user} = useAuth();
   


    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true)
    const [myAssData, setMyAssData] = useState([])
useEffect(()=>{


    axiosSecure.get(`/myAssignment?email=${user.email}`)
    .then(data => {

        setMyAssData(data.data)

setLoading(false)

    })


},[])

if(loading){
    return <div  className="text-center flex mt-32 items-center justify-center w-[100%]"> <span className="loading loading-bars loading-xs"></span>
    <span className="loading loading-bars loading-sm"></span>
    <span className="loading loading-bars loading-md"></span>
    <span className="loading loading-bars loading-lg"></span></div>
}

if(myAssData.length < 1){

    return <p className="text-center text-3xl font-bold font-raleway mt-28">You have not attended any assignments.</p>
}
    return (
       myAssData.map((myAssData, idx)=> <MyassignmentInfo  
       key={myAssData._id}
       myAssData= {myAssData}
       idx={idx}
       ></MyassignmentInfo>)
    );
};

export default MyAssignment;