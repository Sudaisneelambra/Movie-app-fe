import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"

const UserHome = () =>{

    const data = useSelector(selectUser)
    console.log(data);

    return <>
        <h1>user home page</h1>
    </>
}

export default UserHome