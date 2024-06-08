import { Routes,Route } from "react-router-dom"
import AdminHome from "../pages/adminhome"
import CardAdd from "../components/admin/cardAdd/CardAdd"
import AdHome from "../pages/adhome"
import UsHome from "../pages/UsHome"

const AdminRoutes = () =>{
    return <>
        <Routes>
            <Route path="/" element={<AdminHome/>} >
                <Route path="/" element={<AdHome/>} ></Route>
                <Route path="/addcard" element={<CardAdd/>} ></Route>
                <Route path="/showcard" element={<UsHome/>} ></Route>
            </Route>
        </Routes>
    </>
}

export default AdminRoutes