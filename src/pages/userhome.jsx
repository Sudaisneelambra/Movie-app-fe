import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import Navbar from "../components/users/navbar/Navbar";
import MovieCard from "../components/users/moviecard/MovieCard";
import style from './CSS/userhome.module.css'

const UserHome = () =>{

    const data = useSelector(selectUser)
    console.log(data);

    return <>
        <Navbar />
        <div className={`${style.mainHome} w-full`}>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>

        </div>
    </>
}

export default UserHome