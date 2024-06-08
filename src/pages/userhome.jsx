
import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const UserHome = () =>{

    
    const navLinks =[
        {
            name:'Home',
            link:'/home'
        },
        {
            name:'Contact',
            link:'/contact'
        },
        {
            name:'Profile',
            link:'/Profile'
        },
        {
            name:'Links',
            link:'/links'
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