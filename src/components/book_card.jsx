import React from "react";
import { useNavigate } from "react-router";

function BookCard({ data }) {
  const navigate = useNavigate();
  return (
    <div className='m-5 w-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-black flex flex-col items-center justify-start pt-2 transform hover:scale-105 '>
      <div className='h-50v w-11/12 flex justify-center'>
        <img
          className='max-w-full max-h-full rounded-lg'
          src={data.data.thumbnailUrl}
          alt='Sunset in the mountains'
          height='300px'
        />
      </div>
      <div className='px-6 py-4 w-full'>
        <div className='font-bold text-xl mb-2'>
          {String(data.data.title).substring(0, 22) + "..."}
        </div>
        <p className='text-gray-700 text-sm break-all w-90%'>
          {String(data.data.desc).substring(0, 100) + "..."}
        </p>
        <div className='flex justify-evenly mt-4'>
          <button
            className='text-sm font-bold hover:text-white bg-green-400 py-4 rounded-lg  hover:bg-green-700 w-90%'
            onClick={() => navigate(`/bookshelf/book/${data.id}`)}
          >
            READ ►
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
