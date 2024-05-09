import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Login from "../pages/login/Login";
import Registar from "../pages/login/registar/Registar";


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
}

]

}])

export default router;

