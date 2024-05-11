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
    return <p>loading...</p>
}

if(myAssData.length < 1){

    return <p className="text-center text-3xl font-bold font-raleway mt-28">You are no attend any assignment</p>
}
    return (
       myAssData.map(myAssData=> <MyassignmentInfo  
       key={myAssData._id}
       myAssData= {myAssData}
       
       ></MyassignmentInfo>)
    );
};

export default MyAssignment;