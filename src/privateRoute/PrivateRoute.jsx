
import PropTypes from 'prop-types';
import useAuth from '../hook/useAuth';
import { Navigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';


const PrivateRoute = ({children}) => {
    const {loader, user} = useAuth()
    if(loader){
        return <div  className='flex items-center mt-28 justify-center'>

<ColorRing
        
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}

    
      ></ColorRing>
        </div>
    }
    if(user){

        return children
    }


    return <Navigate   to='/login' ></Navigate>}

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;