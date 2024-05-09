import { MdAssignment } from "react-icons/md";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const CreateAssinment = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div  className="bg-[#362417] rounded-md">
         
           <div   className=" p-12">   

<div  className="add-form-bg bg-gray-500 rounded  border  mx-auto p-4 md:p-8 ">
<div className="text-center flex justify-center gap-2 items-center">
<h1 className="text-2xl  font-bold  font-raleway   text-white ">Create an Assignment</h1> <MdAssignment className="text-white" />
</div>
<form  className="font-poppoins" >

<div className="md:flex gap-8 mt-8">

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Assignment  Title</span>

</div> 
<input  type="text" name="title" placeholder="Type here Assignment title" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>
<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold"> Description
</span>

</div>

<textarea name="description" placeholder="Type here Description"  className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]">

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
<input type="number" name="mark" placeholder="Type here Marks" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Level</span>

</div>

<select name="customization" className="input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-[10px] border-2 border-[#EFEFEF]" id="">

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

<input type="text" name="photo" placeholder="Type here Photo URL" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold"> Date</span>

</div>


<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]"/>

<div className="label">

</div>
</label>

</div>





<button  className="w-full text-white font-bold mt-8 px-2 py-2 border-2 border-[#EFEFEF] rounded-2xl"><input type="submit" value="Submit" /></button>
</form>
</div>
  </div>
        </div>
    );
};

export default CreateAssinment;