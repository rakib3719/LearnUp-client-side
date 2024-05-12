import { MdAssignment } from "react-icons/md";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import { ToastContainer, toast } from "react-toastify";


const CreateAssinment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();


    const foromHandle = e => {


        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const mark = e.target.mark.value;
        const thumb_img = e.target.photo.value;
        const level = e.target.level.value;
        const name = user.displayName;
        const email = user.email

        const date = startDate.toLocaleDateString();
        if (/^[0-2]?[0-9]$/.test(mark)) {
            toast.error('Please provide a value of at least 30 marks.')
            return;
        }

        const assinmentInfo = { title, description, mark, thumb_img, level, date, name, email }
        axiosSecure.post('/createAss', assinmentInfo)
            .then(data => {

                if (data.data.acknowledged) {
                    Swal.fire({
                        title: 'Seuccessfully Create an Assignment',
                        text: 'Thank You',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }

            })


    }

    return (
        <div className="bg-[#362417] mt-12 rounded-md">

            <ToastContainer></ToastContainer>
            <div className="p-4 sm:p-12">

                <div className="add-form-bg  bg-gray-500 rounded  border  mx-auto p-4 md:p-8 ">
                    <div className="text-center flex justify-center gap-2 items-center">
                        <h1 className="text-xl sm:text-2xl  font-bold  font-raleway   text-white ">Create an Assignment</h1> <MdAssignment className="text-white" />
                    </div>
                    <form onSubmit={foromHandle} className="font-poppoins" >

                        <div className="md:flex gap-8 mt-8">

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text  text-white font-semibold">Assignment  Title</span>

                                </div>
                                <input required type="text" name="title" placeholder="Type here Assignment title" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
                                <div className="label">

                                </div>
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-white font-semibold"> Description
                                    </span>

                                </div>

                                <textarea required name="description" placeholder="Type here Description" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]">

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
                                <input type="number" required name="mark" placeholder="Type here Marks" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
                                <div className="label">

                                </div>
                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-white font-semibold"> Assignment Difficulty Level</span>

                                </div>

                                <select required name="level" className="input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-[10px] border-2 border-[#EFEFEF]" id="">

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

                                <input required type="text" name="photo" placeholder="Type here Photo URL" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
                                <div className="label">

                                </div>
                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-white font-semibold"> Date</span>

                                </div>


                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />

                                <div className="label">

                                </div>
                            </label>

                        </div>





                        <div className="flex justify-end">
                            <button className=" text-white font-raleway  px-4 bg-[#573c28] font-bold mt-8  py-2   rounded"><input type="submit" value="Submit" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssinment;