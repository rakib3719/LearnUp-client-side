
import PropTypes from 'prop-types';
import img from '../../assets/img/loginbg.png'
import { MdSystemUpdateAlt } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaCalendar, FaMarker } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const AssignmentCard = ({assignMentData, deleteHandle}) => {
const navigate = useNavigate()
    const {title, description, mark,email,_id, thumb_img, level, date} = assignMentData;
 

    return ( 
        <div className="card card-compact  bg-base-100 border  " >
        <figure><img src={img} alt="Assignment thump" className='w-[395px] h-[185px]' /></figure>
    
        <div className="card-body">
          <h2 className="card-title font-bold font-raleway">{title}</h2>
          <p className='font-work-sense'>{description.slice(0, 60)}...</p>
          <div className="badge bg-[#4F847B] text-white font-work-sense p-3">{level}</div>
        
          <div className='flex mt-2 justify-end'>
          
<p  className='font-raleway text-lg items-center  flex gap-1 ' > <FaMarker /><span className='font-semibold'>Mark:</span> {mark}
 </p>
 <p  className='font-work-sense text-lg items-center  flex gap-1'> <FaCalendar></FaCalendar> {date}</p>

          </div>
        
           <div className=" flex mt-4 justify-between gap-2">




<button onClick={()=>{navigate(`/update/${_id}`)

}} className="btn font-poppoins w-1/2 bg-[#682C0E] text-white flex items-center gap-2">  <MdSystemUpdateAlt /> Update</button>


      <button onClick={()=>deleteHandle(_id, email)} className="btn font-poppoins w-1/2 bg-orange-600 text-white flex items-center gap-2">   <MdDeleteForever /> Delete</button>
    </div>
    <hr  className='mt-4'/>
    <button  className="btn w-full font-poppoins  bg-[#010400] text-white flex items-center gap-2">  <MdSystemUpdateAlt /> View Assignment</button>
        </div>
      </div>
    );
  };
  


AssignmentCard.propTypes = {
    assignMentData: PropTypes.object ,
    deleteHandle : PropTypes.func
};

export default AssignmentCard;