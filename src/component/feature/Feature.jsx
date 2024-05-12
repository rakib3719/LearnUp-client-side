import { IoCreate } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { RiFeedbackFill } from "react-icons/ri";
import { MdTrackChanges } from "react-icons/md";
import { SiGooglecampaignmanager360 } from "react-icons/si";
import { FaBookOpen } from "react-icons/fa6";
const Feature = () => {
    return (
<div className="mt-28">


<div  className="text-center">

<h1  className="text-3xl font-raleway font-bold "  >Features</h1>
<p  className="font-work-sense">Explore the key features that make our platform perfect for group study and collaboration among peers.</p>
</div>

<div   className="feture-Item mt-8 font-raleway grid md:grid-cols-2 lg:grid-cols-3 gap-8" >

<div className="card  border-2 ">
  <div className="card-body">
  <IoCreate className="text-3xl text-[#C24914]"/>

    <h2 className="card-title">Create and Manage Assignments</h2>
    <p>Easily create assignments for group study sessions and manage them efficiently.</p>
  
  </div>
</div>



<div className="card  border-2 ">
  <div className="card-body">
  <GrGroup className="text-3xl text-[#C24914]"/>

    <h2 className="card-title">Join Study Groups and Collaborate</h2>
    <p>Collaborate on projects seamlessly by joining study assignments created by peers.</p>
  
  </div>
</div>







<div className="card  border-2 ">
  <div className="card-body">
  <RiFeedbackFill className="text-3xl text-[#C24914]"/>

    <h2 className="card-title">Peer Evaluation and Feedback</h2>
    <p>Receive valuable feedback on assignments from peers to enhance your skills.</p>
  
  </div>
</div>





<div className="card  border-2 ">
  <div className="card-body">
  <MdTrackChanges className="text-3xl text-[#C24914]"/>

    <h2 className="card-title">Track Assignments and Deadlines</h2>
    <p>Stay organized with a comprehensive view of assignment submissions and deadlines.</p>
  
  </div>
</div>




<div className="card  border-2 ">
  <div className="card-body">
  <SiGooglecampaignmanager360 className="text-3xl text-[#C24914]"/>

    <h2 className="card-title">Secure Assignment Management</h2>
    <p>Rest assured with secure assignment management and data integrity.</p>
  
  </div>
</div>





<div className="card  border-2 ">
  <div className="card-body">
  <FaBookOpen className="text-3xl text-[#C24914]"/>

    <h2 className="card-title">Foster Collaborative Learning</h2>
    <p>Create a collaborative learning environment to achieve academic success together.</p>
  
  </div>
</div>
</div>


</div>
    );
};

export default Feature;