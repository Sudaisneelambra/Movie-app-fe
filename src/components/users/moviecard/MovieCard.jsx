import dfault_image from '../../../assets/menu.png'
import styles from './Moviecard.module.css'

const MovieCard = () =>{

    return <>
        <div className={`${styles.mains} flex justify-center items-center py-2`}>
            <img src={dfault_image} alt="" className={`${styles.movieImage}  w-[90%] p-2 rounded-md`} />
            <h1 className={` font-bold text-[22px]`}>Title</h1>
            <h3 className={`text-left w-[80%]`}>Casts</h3>
            <p className={`w-[80%]`}>dsgku,adsgyu,sduhagiu,dshgiua</p>
        </div>
    </>
}

export default MovieCard