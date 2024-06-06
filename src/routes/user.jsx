import { Routes,Route } from "react-router-dom"
import UserHome from "../pages/userhome"

const UserRoutes = () =>{
    return <>
        <Routes>
            <Route path="/" element={<UserHome/>}></Route>
        </Routes>
    </>
}

export default UserRoutes