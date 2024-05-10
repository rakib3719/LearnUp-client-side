import { useEffect, useState } from "react";
import useCommonAxios from "../../hook/useCommonAxios";
import { useParams } from "react-router-dom";




const Update = () => {
    const {id }= useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

  
const commonAxiosSecure = useCommonAxios()
    useEffect(()=>{

commonAxiosSecure(`/update/${id}`)
.then(data => console.log(data.data))

    }, [])
  
    return (
        <div>
            this is update page
        </div>
    );
};

export default Update;