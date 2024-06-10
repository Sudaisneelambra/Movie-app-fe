// import dfault_image from '../../../assets/menu.png'
import { Link } from "react-router-dom";
import styles from "./Moviecard.module.css";
import Button from "../../shared/button/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectToken, setToken } from "../../../features/tokenSlice";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "../../../utils/axios.instance";
import Rating from "../../Rating/Rating";

const MovieCards = ({ data }) => {
  const [decodedToken, setdecodedToken] = useState(null);

  const [rating, setRating] = useState(0);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    let tokens = token;
    if (!tokens) {
      tokens = localStorage.getItem("token");
    }
    if (tokens) {
      dispatch(setToken(tokens));
      setdecodedToken(jwtDecode(tokens));
    }
  }, [token, dispatch, data]);

  const handleDelete = (id) => {
    axiosInstance
      .delete(`/admin/delete/${id}`)
      .then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlesubmitrating = (id) => {
    if (rating !== 0) {
      axiosInstance
        .post("/user/addrating", { rating, id })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            setRating(0);
          } else {
            alert(res.data.message);
            setRating(0);

          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("select the rating");
    }
  };

  const calCulateRating = (fullratingArray)=>{
    console.log(fullratingArray);
        const totalRate = fullratingArray.reduce((i,e)=>{
            return i+=e.rating
        },0)
        console.log();
        return Math.round(totalRate / fullratingArray?.length)
  }
  const [actualRate, setActualRate] = useState(0)

  useEffect(()=>{
    console.log(data?.fullratings?.length);
    if(data?.fullratings?.length>0){
        const rating = calCulateRating(data?.fullratings);
        setActualRate(rating);
    }
  },[data?.fullratings])

  return (
    <>
      <div className={`${styles.mains} flex justify-center items-center py-2`}>
        <Link
          to={`/user/moviecard/${data?._id}`}
          className="flex justify-center items-center"
        >
          <img
            src={data?.filePath}
            alt=""
            className={`${styles.movieImage}  w-[90%] h-[300px] p-2 rounded-md shadow-lg`}
          />
        </Link>
        <h1 className={` font-bold text-[22px] text-[red]`}>{data.title}</h1>
        <h3 className={`text-left w-[90%] mt-4`}>
          {" "}
          <span className="font-bold">Casts</span> : {data.cast}
        </h3>
        <div className="flex justify-between  w-[90%]">
            <h1 className=" font-bold text-[green]">Total Rating : {actualRate}</h1>
            <Rating rating={actualRate}/>
        </div>
        <div className="flex mt-3 justify-evenly w-full items-center">
          <Rating setrating={setRating} rating={rating} />
          <Button
            buttonvalue={"apply"}
            classname={"apply"}
            handleClick={() => {
              handlesubmitrating(data?._id);
            }}
          />
        </div>
        {decodedToken?.isAdmin && (
          <div className=" w-full flex justify-evenly mt-3">
            <Button buttonvalue={"Edit"} classname={"signup"} />
            <Button
              buttonvalue={"Delete"}
              classname={"signup"}
              handleClick={() => {
                handleDelete(data?._id);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MovieCards;
