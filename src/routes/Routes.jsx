import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Login from "../pages/login/Login";
import Registar from "../pages/login/registar/Registar";
import Home from "../pages/home/Home";
import CreateAssinment from "../pages/createAssinment/CreateAssinment";
import Assignments from "../pages/assignments/Assignments";
import PrivateRoute from "../privateRoute/PrivateRoute";


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
}

]

}])

export default router;

