import React from "react";
import { useNavigate } from "react-router";
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className='h-screen w-screen flex items-center justify-center flex-col text-center'>
      <h1 className='text-9xl font-extrabold'>404</h1>
      <h2 className='text-4xl'>Page Not Found</h2>
      <div
        className='rounded-2xl bg-blue-400 px-20 py-2 text-2xl font-bold text-white hover:text-black hover:border-black hover:border-2 cursor-pointer text-center w-2/5 mt-10'
        onClick={() => {
          navigate("/bookshelf/", { replace: true });
        }}
      >
        Home Page
      </div>
    </div>
  );
}
