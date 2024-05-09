import useAuth from "../../hook/useAuth";


const Navbar = () => {
    const {logOut} = useAuth()

    return (
        <div className="text-center">
       {/* <button onClick={()=>{

        logOut()
        .then(result => {
            console.log(result);
            alert('logout success')
        })
        .catach(error => console.log(error.message))
       }} >  Logout </button> */}
        </div>
    );
};

export default Navbar;