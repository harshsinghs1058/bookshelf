import { useFormik } from "formik";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useAuth } from "../context/authContext";
const initialValues = {
  title: "",
  year: "2020",
  thumbnailUrl: "",
  bookUrl: "",
  desc: "",
};
const validate = (values) => {
  let errors = {};
  if (values.title.length == 0) {
    errors.title = "Required";
  }
  if (values.year.length == 0) {
    errors.year = "Required";
  }
  if (values.thumbnailUrl.length == 0) {
    errors.thumbnailUrl = "Required";
  }
  if (values.bookUrl.length == 0) {
    errors.bookUrl = "Required";
  }
  if (values.desc.length == 0) {
    errors.desc = "Required";
  }

  return errors;
};

function CreateNewBook() {
  const formik = useFormik({ initialValues, validate });
  const [isLoading, setIsLoading] = useState(false);
  const [isAllEdited, setisAllEdited] = useState(false);
  const [auth, userSignIn, userSignOut] = useAuth(useAuth);
  const handleFormSubmission = async (event) => {
    event.preventDefault();
    setisAllEdited(true);
    if (
      !(
        formik.errors.title ||
        formik.errors.bookUrl ||
        formik.errors.desc ||
        formik.errors.thumbnailUrl ||
        formik.errors.year
      )
    ) {
      setIsLoading(true);
      firebase.firestore().collection(auth.uid).doc().set({
        title: formik.values.title,
        bookUrl: formik.values.bookUrl,
        desc: formik.values.desc,
        thumbnailUrl: formik.values.thumbnailUrl,
        year: formik.values.year,
      });
      setIsLoading(false);
    }
  };
  return (
    <div className='flex flex-col items-center w-screen h-screen'>
      <NavBar className='h-20' />
      <div className='w-screen text-4xl font-bold flex justify-center items-center h-20 '>
        Add New Book
      </div>
      <div className='ml-10 items-start flex flex-col w-60%'>
        <div className='text-2xl mb-2 ml-3'>Title</div>
        <div className=' border-2 border-black rounded-2xl w-full focus-within:border-blue-500 focus-within:border-3 pr-7'>
          <input
            type='text'
            placeholder='Book Title'
            className=' text-2xl m-1 ml-3 outline-none w-full '
            formNoValidate
            name='title'
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur={formik.handleBlur}
            autoFocus
          />
        </div>
        <div className='text-red-600 ml-4'>
          {(() => isAllEdited || formik.touched.title)
            ? formik.errors.title
            : ""}
        </div>
        <div className='text-2xl mb-2 ml-3'>Publish Year</div>
        <div className=' border-2 border-black rounded-2xl w-full focus-within:border-blue-500 focus-within:border-3 pr-10'>
          <input
            type='number'
            min='1900'
            max='2020'
            step='1'
            placeholder='Book Title'
            className=' text-2xl m-1 ml-3 outline-none w-full'
            name='year'
            onChange={formik.handleChange}
            value={formik.values.year}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='text-red-600 ml-4'>
          {(() => isAllEdited || formik.touched.year) ? formik.errors.year : ""}
        </div>
        <div className='text-2xl mb-2 ml-3'>Thumbnail URL</div>
        <div className=' border-2 border-black rounded-2xl w-full focus-within:border-blue-500 focus-within:border-3 pr-7'>
          <input
            type='url'
            placeholder='Thumbnail URL'
            className=' text-2xl m-1 ml-3 outline-none w-full '
            name='thumbnailUrl'
            onChange={formik.handleChange}
            value={formik.values.thumbnailUrl}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='text-red-600 ml-4'>
          {(() => isAllEdited || formik.touched.thumbnailUrl)
            ? formik.errors.thumbnailUrl
            : ""}
        </div>
        <div className='text-2xl mb-2 ml-3'>Book URL</div>
        <div className=' border-2 border-black rounded-2xl w-full focus-within:border-blue-500 focus-within:border-3 pr-7'>
          <input
            type='text'
            placeholder='Book PDF Url'
            className=' text-2xl m-1 ml-3 outline-none w-full '
            name='bookUrl'
            onChange={formik.handleChange}
            value={formik.values.bookUrl}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='text-red-600 ml-4'>
          {(() => isAllEdited || formik.touched.bookUrl)
            ? formik.errors.bookUrl
            : ""}
        </div>
        <div className='text-2xl mb-2 ml-3'>Description</div>
        <div className=' border-2 border-black rounded-2xl w-full focus-within:border-blue-500 focus-within:border-3 pr-5'>
          <textarea
            className=' text-2xl m-1 ml-3 outline-none w-full'
            placeholder='Description'
            name='desc'
            onChange={formik.handleChange}
            value={formik.values.desc}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='text-red-600 ml-4'>
          {(() => isAllEdited || formik.touched.desc) ? formik.errors.desc : ""}
        </div>
      </div>
      <button
        className='text-2xl my-4 px-10 font-bold  bg-gray-500 hover:bg-black py-4 rounded-lg  text-white'
        onClick={handleFormSubmission}
      >
        CONTINUE
      </button>
    </div>
  );
}

export default CreateNewBook;
