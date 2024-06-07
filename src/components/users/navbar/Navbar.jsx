
import styles from './Navbar.module.css'
import movie_image from '../../../assets/3698776.png'
import logout from '../../../assets/power-off.png'
import menu from '../../../assets/menu.png'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../features/userSlice'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '../../../features/tokenSlice'

const Navbar = () =>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout =()=>{
        const confirm = window.confirm('are you sure to confirm')
        if(confirm){
            localStorage.clear()
            dispatch(setUser(null))
            navigate('/')
            dispatch(removeToken())
        }
    }
    return <>
        <nav className={`${styles.navbar} w-full h-[80px] flex items-center  bg-[gray]`}>
            <div className={`${styles.main} !w-full`}>
                <div className="">
                    <img src={movie_image} alt="movie"  className={`${styles.movieImg}`}/>
                </div>
                <ul className={`${styles.uls} md:gap-[50px] gap-[30px] font-bold text-[18px]`}>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Profile</li>
                    <li>Links</li>
                </ul>
                <div className={`flex justify-end pr-[30px]`}>
                    <img src={logout} alt="dfs"  className={`${styles.logoutImg}`} onClick={handleLogout}/>
                </div>
            </div>
            <img src={menu} alt="menu" className={`${styles.menu}`} />
        </nav>
    </>
}

export default Navbar