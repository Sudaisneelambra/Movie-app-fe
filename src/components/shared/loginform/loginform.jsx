import { useState } from "react";
import axiosInstance from "../../../utils/axios.instance";
import Button from "../button/Button";
import { Link, useNavigate } from 'react-router-dom'; 
import styles from "./loginform.module.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setAdmin, setUser } from "../../../features/userSlice";
import { setToken } from "../../../features/tokenSlice";

const LoginForm = () => {

  const navigate = useNavigate()  
  const [message, setmessage] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.email || !data.password) {
      alert("Please fill in all fields");
    } else {
      await axiosInstance
        .post("/login", data)
        .then((res) => {
            if(res?.data?.success) {
                if(res?.data.user.isAdmin){
                    localStorage.setItem('token',res?.data?.token)
                    localStorage.setItem('users',JSON.stringify(data))
                    dispatch(setAdmin(data));
                    dispatch(setToken(res?.data?.token))
                    navigate('/admin')
                } else if (!res?.data.user.isAdmin) {
                    localStorage.setItem('token',res?.data?.token)
                    localStorage.setItem('users',JSON.stringify(data))
                    dispatch(setUser(data));
                    dispatch(setToken(res?.data?.token))
                    navigate('/user')
                }
            } else{
                setmessage(res.data.message);
                setTimeout(()=>{
                  setmessage('')
              },2000)
            }
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className={`${styles.main}  bg-[#b6b6c046] w-full h-screen grid place-items-center`}>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.form} w-[90%] md:w-[650px] h-[50%]  flex flex-col items-center rounded-md justify-evenly ${styles.glassEffect}`}
        >
          <h1 className={`text-[24px] font-bold`}>Login Form</h1>
          <div className={` flex flex-col w-[90%]`}>
            <label htmlFor="email">email</label>
            <input
              {...register("email", { required: true })}
              className={`py-2 outline-none border-[1px] pl-2`}
              placeholder="Your Email"
            />
            {errors.email && (
              <span className={`text-[13px] text-red-600`}>
                This field is required
              </span>
            )}
          </div>
          <div className={`flex flex-col w-[90%]`}>
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: true })}
              className={`py-2 outline-none border-[1px] pl-2`}
              placeholder="Your password"
            />
            {errors.password && (
              <span className={`text-[13px] text-red-600`}>
                This field is required
              </span>
            )}
          </div>
          <Button buttonvalue={"Login"} classname={"signup"} />
          <h1 className={`text-[12px] text-[red]`}>{message}</h1>
          <h1>You Dont have an account? <Link to={'/signup'}><span className={`text-[#4cad4c]`}>Sign up</span></Link> </h1>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
