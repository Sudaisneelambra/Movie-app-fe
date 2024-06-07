import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { selectToken, setToken } from '../features/tokenSlice';
import { useDispatch, useSelector } from 'react-redux';
import {jwtDecode} from 'jwt-decode';

const  AdminGuard =()=>{
    const token = useSelector(selectToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        try{
                let localStorageToken = token;
                if (!localStorageToken) {
                     localStorageToken = localStorage.getItem('token');
                }    
                if (localStorageToken) {
                    dispatch(setToken(localStorageToken))
                    const decodedToken = jwtDecode(localStorageToken);
                    if(!decodedToken.isAdmin) {
                        navigate('/user');
                    }
                } else {
                    navigate('/')
                }
                   
        }
        catch(err){
            console.log(err);
        }
    }, [token, dispatch, navigate]);

    return (
        <>
            <Outlet />
        </>
    )
}

export default AdminGuard