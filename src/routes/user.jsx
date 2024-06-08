import { Routes,Route } from "react-router-dom"
import UserHome from "../pages/userhome"
import MovieCard from "../pages/movieCard"
import UsHome from "../pages/UsHome"

const UserRoutes = () =>{
    return <>
        <Routes>
            <Route path="/" element={<UserHome/>}>
                <Route path="/" element={<UsHome/>}></Route>
                <Route path="/moviecard/:id" element={<MovieCard/>}></Route>
            </Route>
        </Routes>
    </>
}

export default UserRoutes