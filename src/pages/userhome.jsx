
import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const UserHome = () =>{

    
    const navLinks =[
        {
            name:'Home',
            link:'/user'
        },
        {
            name:'Contact',
            link:'/user'
        },
        {
            name:'Profile',
            link:'/user'
        },
        {
            name:'Links',
            link:'/user'
        }
    ]

   

    return <>
        <Navbar navLinks={navLinks}/>
        <div className="">
            <Outlet/>
        </div>
    </>
}

export default UserHome