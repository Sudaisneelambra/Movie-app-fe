import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../../utils/axios.instance";
import { useLocation } from "react-router-dom";

// Validation schema
const MovieSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  cast: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  image: Yup.mixed().required("Image is required"),
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CardAdd = () => {
  const [submittedValues, setSubmittedValues] = useState(null);
  const [id, setId] = useState(null);
  const [movie, setMovie] = useState({
    title: "",
    cast: "",
    image: null,
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false);
    setSubmittedValues(values);
    
    if (!values.image) {
      alert("Image is required");
      return;
    }

    let formData = new FormData();
    formData.append('title', values.title);
    formData.append('cast', values.cast);
    formData.append('image', values.image);

    const url = id ? `/admin/editCard/${id}` : '/admin/addCard';

    await axiosInstance.post(url, formData)
      .then((res) => {
        if (res.data.success) {
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let query = useQuery();

  useEffect(() => {
    const cardId = query.get("id");
    if (cardId) {
      setId(cardId);
      axiosInstance.get(`/admin/getCard/${cardId}`)
        .then((res) => {
          if (res.data.success) {
            setMovie(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <>
      <div>
        <h1 className="w-full text-center my-5 text-[30px] font-bold">
          {id ? "Edit Movie" : "Add Movie"}
        </h1>

        <Formik
          initialValues={movie}
          enableReinitialize={true}
          validationSchema={MovieSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Title
                </label>
                <Field
                  type="text"
                  name="title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cast"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Cast
                </label>
                <Field
                  type="text"
                  name="cast"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="cast"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>

        {submittedValues && (
          <div className="w-full flex justify-center items-center mt-7">
            <div className="shadow-lg p-3 rounded-md">
              <h2>Submitted Movie Details</h2>
              <p>
                <strong>Title:</strong> {submittedValues.title}
              </p>
              <p>
                <strong>Cast:</strong> {submittedValues.cast}
              </p>
              <img src={URL.createObjectURL(submittedValues.image)} alt="Movie Poster" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardAdd;
