import { useEffect, useState } from 'react'
import style from './CSS/ushome.module.css'
import axiosInstance from '../utils/axios.instance'
import MovieCards from '../components/users/moviecard/MovieCard'

const UsHome =()=>{

    const [data, setdata] =useState([])

    useEffect(()=>{
        axiosInstance.get('/user/allCards')
        .then((res)=>{
            if(res.data.success){
                console.log('anu');
                setdata(res.data.data)
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return <>
         <div className={`${style.mainHome} w-full`}>
            {
                data.map((item)=>{
                    return <MovieCards key={item._id} data={item}/>
                })
            }

        </div>
    </>
}

export default UsHome