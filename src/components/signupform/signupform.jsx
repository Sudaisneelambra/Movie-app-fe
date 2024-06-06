import {  useState } from 'react';
import './signupform.css'
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import {  setAdmin, setUser } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom'; 


const SignupForm =()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate()

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
    const submitClicking =(e)=>{
        e.preventDefault()
        if(!formValue.username || !formValue.email || !formValue.password){
            alert('fill the all Fields')
        } else {
            dispatch(setUser(formValue));
            dispatch(setAdmin(false));
            navigate('/user')
        }

    }


    return <>
    <div className="main  bg-[#b6b6c046] w-full h-screen grid place-items-center">
        <form onSubmit={submitClicking} className="form w-[90%] md:w-[650px] h-[50%]  flex flex-col items-center rounded-md justify-evenly glass-effect">
          <h1 className="text-[24px] font-bold">LoginForm</h1>
          <div className=" flex flex-col w-[90%]">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formValue.username}
              onChange={handleInputChange}
              className="py-2 outline-none border-[1px] pl-2"
              placeholder="Your Name"
            />
          </div>
          <div className=" flex flex-col w-[90%]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValue.email}
              onChange={handleInputChange}
              className="py-2 outline-none border-[1px] pl-2"
              placeholder="Your Email"
            />
          </div>
          <div className=" flex flex-col w-[90%]">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              value={formValue.password}
              onChange={handleInputChange}
              name="password"
              id="password"
              className="py-2 outline-none border-[1px] pl-2"
              placeholder="Your Password"
            />
          </div>
          <Button buttonvalue={'Sign up'} classname={'signup'}/>
        </form>
      </div>
    </>
}

export default SignupForm