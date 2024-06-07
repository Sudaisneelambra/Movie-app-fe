import { Routes,Route } from "react-router-dom"
import UserHome from "../pages/userhome"
import MovieCard from "../pages/movieCard"

const UserRoutes = () =>{
    return <>
        <Routes>
            <Route path="/" element={<UserHome/>}></Route>
            <Route path="/moviecard" element={<MovieCard/>}></Route>
        </Routes>
    </>
}

export default UserRoutes