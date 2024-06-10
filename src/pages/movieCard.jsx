import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../utils/axios.instance';
import MovieCards from '../components/users/moviecard/MovieCard';


const MovieCard = ()=>{

    const { id } = useParams();
    const [data,setdata]= useState([])
    useEffect(() => {
        axiosInstance.post(`/user/singlecard`,{id})
            .then(response => {
                if (response.data.success) {
                    setdata(response.data.data)
                    console.log(response.data.data);
                } else {
                        console.log(response.data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
            });
    }, []); 

    return <>
        <div className="w-full h-screen flex justify-center items-center flex-col">
        <h1 className='font-bold text-[25px]'>Movie Card Details</h1>
        <div className="">
                <MovieCards data={data}/>
        </div>
        </div>
    </>
}

export default MovieCard