// import dfault_image from '../../../assets/menu.png'
import { Link } from 'react-router-dom'
import styles from './Moviecard.module.css'
import Button from '../../shared/button/Button'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectToken, setToken } from '../../../features/tokenSlice'
import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import axiosInstance from '../../../utils/axios.instance'

const MovieCards = ({data}) =>{
    const [decodedToken, setdecodedToken]= useState(null)

    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    useEffect(()=>{
        let tokens = token
        if(!tokens){
            tokens = localStorage.getItem('token');
        }
        if(tokens){
            dispatch(setToken(tokens));
            setdecodedToken(jwtDecode(tokens));
        }
    },[token,dispatch,data])

    const handleDelete = (id)=>{
        console.log(id);
        // axiosInstance.delete(`/admin/delete${id}`)
    }

    return <>
        <div className={`${styles.mains} flex justify-center items-center py-2`}>
            <Link to={`/user/moviecard/${data?._id}`} className='flex justify-center items-center'><img src={data?.filePath} alt="" className={`${styles.movieImage}  w-[90%] h-[300px] p-2 rounded-md shadow-lg`} /></Link>
            <h1 className={` font-bold text-[22px] text-[red]`}>{data.title}</h1>
            <h3 className={`text-left w-[80%] mt-4`}> <span className='font-bold'>Casts</span>  : {data.cast}</h3>
           {
            decodedToken?.isAdmin && (
                <div className=" w-full flex justify-evenly mt-3" >
            <Button buttonvalue={'Edit'} classname={'signup'}/>
            <Button buttonvalue={'Delete'} classname={'signup'} handleClick={()=>{handleDelete(data?._id)}} />
           </div>
            ) 
           }
        </div>
    </>
}

export default MovieCards