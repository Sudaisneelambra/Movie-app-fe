import { Routes,Route } from "react-router-dom"
import AdminHome from "../pages/adminhome"

const AdminRoutes = () =>{
    return <>
        <Routes>
            <Route path="/" element={<AdminHome/>} ></Route>
        </Routes>
    </>
}

export default AdminRoutes