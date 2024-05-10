import { useEffect, useState } from "react";
import useCommonAxios from "../../hook/useCommonAxios";
import { useParams } from "react-router-dom";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";




const Update = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {id }= useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    const {title, description, mark,_id, thumb_img, level, date} = data;



  
    const foromHandle = e =>{
       

        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const mark = e.target.mark.value;
        const thumb_img = e.target.photo.value;
        const level = e.target.level.value;
 

        const date = startDate.toLocaleDateString() || date;

      
        const assinmentInfo = {title, description, mark, thumb_img, level, date}

        console.log(assinmentInfo);
        commonAxiosSecure.put(`/update?id=${_id}`, assinmentInfo)
        .then(data => {

            console.log(data.data);
            if(data.data. modifiedCount > 0){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Assignment Update successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
       
      
    }
 
const commonAxiosSecure = useCommonAxios()
    useEffect(()=>{

commonAxiosSecure(`/update?id=${id}`)
.then(data => {

setData(data.data)

setLoading(false)

})

    }, [])

    if(loading){

        return <progress className="progress flex justify-center w-56 mx-auto mt-40"></progress>
    }
  
    return (
        <div  className="bg-[#201b6e59] rounded-md">
         
        <div   className="p-4 sm:p-12">   

<div  className="add-form-bg  bg-[#57606f] rounded  border  mx-auto p-4 md:p-8 ">
<div className="text-center flex justify-center gap-2 items-center">
<h1 className="text-xl sm:text-2xl  font-bold  font-raleway   text-white ">Update  Assignment</h1> <MdOutlineSystemUpdateAlt className="text-white" />
</div>
<form onSubmit={foromHandle} className="font-poppoins" >

<div className="md:flex gap-8 mt-8">

<label className="form-control w-full ">
<div className="label">
<span className="label-text  text-white font-semibold">Assignment  Title</span>

</div> 
<input  type="text" name="title" defaultValue={title} placeholder="Type here Assignment title" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>
<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold"> Description
</span>

</div>

<textarea name="description" defaultValue={description} placeholder="Type here Description"  className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]">

</textarea>

<div className="label">

</div>
</label>

</div>








<div className="md:flex gap-8 mt-4">


<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Marks</span>

</div>
<input type="number" defaultValue={mark} name="mark" placeholder="Type here Marks" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Level</span>

</div>

<select name="level" defaultValue={level} className="input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-[10px] border-2 border-[#EFEFEF]" id="">

<option value="easy"> Easy </option>
<option value="medium"> Medium</option>
<option value="hard"> Hard</option>

</select>

<div className="label">

</div>
</label>

</div>


<div className="md:flex gap-8 mt-4">


<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold"> Thumbnail Image URL</span>

</div>

<input type="text" defaultValue={thumb_img} name="photo" placeholder="Type here Photo URL" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold"> Date</span>

</div>


<DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]"/>

<div className="label">

</div>
</label>

</div>





<div className="flex justify-end">
<button  className=" text-white hover:bg-[#805839]  font-raleway  px-4 bg-[#573c28] font-bold mt-8  py-2   rounded"><input type="submit" value="Update" /></button>
</div>
</form>
</div>
</div>
     </div>
    );
};

export default Update;