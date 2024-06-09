import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/navbar/Navbar"

const AdminHome = () =>{
    const navlinks = [
        {
            name:'Add Card',
            link:'/admin/addcard'
        },
        {
            name:'View Cards',
            link:'/admin/showcard'
        },
        {
            name:'Show User',
            link:'/admin'
        }
    ]
    return <>
        <Navbar navLinks={navlinks}/>
        <div className="content">
                <Outlet />
        </div>
    </>
}

export default AdminHome