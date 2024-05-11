import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Login from "../pages/login/Login";
import Registar from "../pages/login/registar/Registar";
import Home from "../pages/home/Home";
import CreateAssinment from "../pages/createAssinment/CreateAssinment";
import Assignments from "../pages/assignments/Assignments";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Update from "../pages/update/Update";
import AssignmentDetails from "../pages/assignmentDetails/AssignmentDetails";
import Pending from "../pages/pendingPage/Pending";
import GiveMark from "../pages/giveMark/GiveMark";
import MyAssignment from "../pages/myAtteptedAssignment/MyAssignment";


const router = createBrowserRouter([{

path: '/',
element: <Root></Root>,
children: [{

    path:'/login',
    element: <Login></Login>
},

{
    path: '/registar',
    element: <Registar></Registar>
},{

    path:'/',
    element: <Home></Home>
},

{
    path:'/create_ass',
    element:<PrivateRoute><CreateAssinment></CreateAssinment></PrivateRoute>
},
{
    path:'/assignment',
    element: <Assignments></Assignments>
},
{
    path:'/update/:id',
    element: <Update></Update>

    
},

{
    path:'/assDetails/:id',
    element:<PrivateRoute> <AssignmentDetails></AssignmentDetails></PrivateRoute>
},
{
    path:'/pending',
    element:<PrivateRoute>    <Pending></Pending>  </PrivateRoute>
},
{
    path:'/giveMark/:id',
    element:<PrivateRoute>    <GiveMark></GiveMark>  </PrivateRoute>
},
{
    path:'/myAssignment',
    element:<PrivateRoute>    <MyAssignment></MyAssignment>  </PrivateRoute>
}

]

}])

export default router;

