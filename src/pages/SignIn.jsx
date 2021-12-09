import { useFormik } from "formik";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import firebase from "@firebase/app-compat";
const initialValues = {
  email: "",
  password: "",
};
const validate = (values) => {
  let errors = {};
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //email validation
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!re.test(values.email.trim())) {
    errors.email = "Invalid email";
  }

  //password validation
  if (values.password.length < 8) {
    errors.password = "Min length is 8";
  }

  return errors;
};

function SignIn() {
  const [width, setWidth] = useState(window.screen.width);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({ initialValues, validate });
  const [isAllEdited, setisAllEdited] = useState(false);
  const [auth, userSignIn, userSignOut] = useAuth(useAuth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    setisAllEdited(true);
    if (!(formik.errors.email || formik.errors.password)) {
      setIsLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(
          formik.values.email.trim(),
          formik.values.password
        )
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          localStorage.setItem(
            "bookshelfAuth",
            JSON.stringify({ isSignedIn: true, uid: user.multiFactor.user.uid })
          );
          navigate("/bookshelf/books", { replace: true });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode + " " + errorMessage);
        });
      setIsLoading(false);
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-green-700'>
      <div className='flex w-5/6 h-5/6 bg-white rounded-3xl justify-center'>
        {width > 768 && (
          <div className='bg-yellow-500 w-1/2 flex flex-col items-start justify-center rounded-l-3xl'>
            <div className='mx-auto w-90%'>
              <div className='lg:text-6xl text-white md:text-4xl'>
                <span className='font-bold'>MY </span>
                BookShelf
              </div>
              <div>
                Its not just a E-BookShelf ,its a way to wide breadth of
                information, experience, and knowledge.
              </div>
            </div>
          </div>
        )}
        <div className='flex flex-col items-center md:w-1/2 w-full h-full py-10 justify-evenly'>
          <h1 className='font-bold text-4xl'>Create Account</h1>
          <div className='mx-10'>
            <div className='border-2 border-black rounded-2xl focus-within:border-blue-500 lg:w-96 w-90%  focus-within:border-3'>
              <input
                type='email'
                placeholder='E-Mail'
                className=' text-xl m-1 ml-3 outline-none w-11/12'
                formNoValidate
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                autoFocus
              />
            </div>
            <div className='text-red-600 ml-4'>
              {(() => isAllEdited || formik.touched.email)
                ? formik.errors.email
                : ""}
            </div>
          </div>
          <div className='mx-10'>
            <div className='border-2 border-black rounded-2xl focus-within:border-blue-500 lg:w-96 w-90%  focus-within:border-3'>
              <input
                type='password'
                placeholder='Password'
                className=' text-xl m-1 ml-3 outline-none w-11/12'
                formNoValidate
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className='text-red-600 ml-4'>
              {(() => isAllEdited || formik.touched.password)
                ? formik.errors.password
                : ""}
            </div>
          </div>

          <div
            className='rounded-2xl bg-yellow-400 px-20 py-2 text-2xl font-bold text-white hover:text-black hover:border-black hover:border-2 cursor-pointer'
            onClick={handleFormSubmission}
          >
            Sign Up
          </div>
          <hr className='border-t-2 border-gray-500 my-3 h-1 w-9/12' />
          <div
            className='rounded-2xl bg-blue-400 px-20 py-2 text-2xl font-bold text-white hover:text-black hover:border-black hover:border-2 cursor-pointer'
            onClick={() => navigate("/bookshelf/signUp")}
          >
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
