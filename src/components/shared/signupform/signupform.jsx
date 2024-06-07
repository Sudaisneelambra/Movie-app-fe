import {  useState } from 'react';
import styles from './signupform.module.css'
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import {  setUser } from '../../../features/userSlice';
import { Link, useNavigate } from 'react-router-dom'; 
import axiosInstance from '../../../utils/axios.instance';
import { setToken } from '../../../features/tokenSlice';


const SignupForm =()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [message , setmessage] = useState('')

      // usestate using data collection
    const [formValue, setformValue] = useState({
        username: "",
        email: "",
        password: "",
    });

    // handling form data Change
    const handleInputChange = (e) => {
        const {name, value}= e.target
        setformValue((previous)=>(
            {
                    ...previous,
                    [name]:value
            }
        ))
    }


    // handling form submit
    const submitClicking = async(e)=>{
        e.preventDefault()
        if(!formValue.username || !formValue.email || !formValue.password){
            alert('fill the all Fields')
        } else {

          await axiosInstance.post('/signup',formValue,{withCredentials:true})
          .then((res)=>{
              if(res?.data?.success){
                localStorage.setItem('token',res?.data?.token)
                localStorage.setItem('users',JSON.stringify(formValue))
                dispatch(setUser(formValue));
                dispatch(setToken(res?.data?.token))
                navigate('/user')
              } else {
                setmessage(res?.data?.message)
                setTimeout(()=>{
                    setmessage('')
                },2000)
              }
          })
          .catch((err)=>{
            console.log(err);
          })
            
        }

    }


    return <>
    <div className={`${styles.main}  bg-[#b6b6c046] w-full h-screen grid place-items-center`}>
        <form onSubmit={submitClicking} className={`${styles.form} w-[90%] md:w-[650px] h-[50%]  flex flex-col items-center rounded-md justify-evenly ${styles.glassEffect}`}>
          <h1 className={`text-[24px] font-bold`}>Signup Form</h1>
          <div className={`flex flex-col w-[90%]`}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formValue.username}
              onChange={handleInputChange}
              className={`py-2 outline-none border-[1px] pl-2`}
              placeholder="Your Name"
            />
          </div>
          <div className={`flex flex-col w-[90%]`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValue.email}
              onChange={handleInputChange}
              className={`py-2 outline-none border-[1px] pl-2`}
              placeholder="Your Email"
            />
          </div>
          <div className={`flex flex-col w-[90%]`}>
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              value={formValue.password}
              onChange={handleInputChange}
              name="password"
              id="password"
              className={`py-2 outline-none border-[1px] pl-2`}
              placeholder="Your Password"
            />
          </div>
          <Button buttonvalue={'Sign up'} classname={'signup'}/>
          <h1 className={`text-[12px] text-[red]`}>{message}</h1>
          <h1>You have Already an Account ? <Link to={'/'}><span className={`text-[#4cad4c]`}>Login</span> </Link> </h1>
        </form>
      </div>
    </>
}

export default SignupForm