import { Route,Routes } from "react-router-dom"
import Login from "../pages/login"
import Signup from "../pages/signup"

const CommonRoutes = () =>{
    return <>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    </>
}

export default CommonRoutes