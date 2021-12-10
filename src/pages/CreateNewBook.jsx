import { useFormik } from "formik";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useAuth } from "../context/authContext";
import { Navigate, useNavigate } from "react-router";
import loading_gif from "./../assets/loading_gif.gif";

const initialValues = {
  title: "",
  thumbnailUrl: "",
  desc: "",
  book: "",
};
const validate = (values) => {
  let errors = {};
  if (values.title.length == 0) {
    errors.title = "Required";
  }
  if (values.thumbnailUrl.length == 0) {
    errors.thumbnailUrl = "Required";
  }
  if (values.desc.length == 0) {
    errors.desc = "Required";
  }
  if (values.book.length == 0) {
    errors.book = "Required";
  }

  return errors;
};

function CreateNewBook() {
  const formik = useFormik({ initialValues, validate });
  const [isLoading, setIsLoading] = useState(false);
  const [isAllEdited, setIsAllEdited] = useState(false);
  const [auth, userSignIn, userSignOut] = useAuth(useAuth);
  const navigate = useNavigate();
  const handleFormSubmission = async (event) => {
    event.preventDefault();
    setIsAllEdited(true);
    if (
      !(
        formik.errors.title ||
        formik.errors.desc ||
        formik.errors.thumbnailUrl ||
        formik.errors.book
      )
    ) {
      setIsLoading(true);
      let bookList = strToTitleAndContent(formik.values.book);
      var bookmarks = [];
      for (var i = 0; i < bookList.size(); i++) {
        bookmarks.push(0);
      }
      await firebase
        .firestore()
        .collection(auth.uid)
        .doc()
        .set({
          title: formik.values.title,
          desc: formik.values.desc,
          thumbnailUrl: formik.values.thumbnailUrl,
          book: bookList,
          bookmarks: bookmarks,
        })
        .then((res) => {
          console.log(res);
          navigate("/bookshelf", { replace: true });
        });
      setIsLoading(false);
    }
  };
  return (
    <div className='flex flex-col items-center w-full mt-20'>
      <NavBar className='h-20' />
      <div className='w-full text-4xl font-bold flex justify-center items-center h-20 '>
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
        <div className='text-2xl mb-2 ml-3'>Description</div>
        <div className=' border-2 border-black rounded-2xl w-full focus-within:border-blue-500 focus-within:border-3 pr-5'>
          <textarea
            className=' text-2xl m-1 ml-3 outline-none w-full'
            placeholder='Description'
            name='desc'
            maxLength={100}
            onChange={formik.handleChange}
            value={formik.values.desc}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='text-red-600 ml-4'>
          {(() => isAllEdited || formik.touched.desc) ? formik.errors.desc : ""}
        </div>
        <div className='text-2xl mb-2 ml-3'>
          Book Content{" "}
          <span className='text-xl'>wrap chapter name with ```</span>
        </div>
        <div className=' border-2 border-black rounded-2xl w-full focus-within:border-blue-500 focus-within:border-3 pr-5'>
          <textarea
            className=' text-2xl m-1 ml-3 outline-none w-full '
            placeholder='Book Content (wrap chapter name with in ``` comas)'
            name='book'
            onChange={formik.handleChange}
            value={formik.values.book}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='text-red-600 ml-4'>
          {(() => isAllEdited || formik.touched.book) ? formik.errors.book : ""}
        </div>
      </div>
      <div
        className='text-2xl my-4 px-10 font-bold  bg-gray-500 hover:bg-black py-4 rounded-lg  w-1/5 text-white text-center'
        onClick={handleFormSubmission}
      >
        {isLoading ? (
          <img
            src={loading_gif}
            height='34px'
            width='34px'
            alt='loading'
            className='mx-auto'
          />
        ) : (
          "Add Book"
        )}
      </div>
    </div>
  );
}
const strToTitleAndContent = (s) => {
  var list = [];
  var chapterHeading = "";
  var content = "";
  let flag = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "`" && s[i + 1] === "`" && s[i + 2] === "`") {
      if (flag === false) {
        flag = true;
        if (chapterHeading !== "") {
          list.push({ content, chapterHeading });
          chapterHeading = "";
          content = "";
        }
      } else {
        flag = false;
      }
      i += 2;
    } else if (flag) {
      chapterHeading += s[i];
    } else {
      content += s[i];
    }
  }
  list.push({ content, chapterHeading });
  return list;
};

export default CreateNewBook;
