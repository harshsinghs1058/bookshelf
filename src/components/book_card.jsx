import React from "react";

function BookCard() {
  return (
    <div className='m-5 w-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-black flex flex-col items-center justify-start pt-2 transform hover:scale-105 '>
      <div className='h-50v w-11/12 flex justify-center'>
        <img
          className='max-w-full max-h-full rounded-lg'
          src='https://edit.org/photos/img/blog/t9i-edit-book-covers-online.jpg-840.jpg'
          alt='Sunset in the mountains'
          height='300px'
        />
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>
          {String("Title of book").substring(0, 22) + "..."}
        </div>
        <div className='text-xs mb-2 text-gray-400'>
          by{" "}
          <span className='font-medium'>
            {String("Uploader Name").toUpperCase().substring(0, 20)}
          </span>
        </div>
        <div className='text-xs mb-2 text-gray-400'>
          Originally published by{" "}
          <span className='font-medium'>
            {String("Uploader Name").toUpperCase().substring(0, 20)}
          </span>
          {" in "}
          <span className='font-medium'>{"2002"}</span>
        </div>
        <div className='text-xs mb-2 font-semibold'>FREE</div>
        <p className='text-gray-700 text-sm'>
          {String(
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum quidem illum vero! Illum fugiat error, magni facilis, nobis veniam quo in autem itaque ut non! Ut inventore possimus dolor?"
          ).substring(0, 100) + "..."}
        </p>
        <div className='flex justify-evenly mt-4'>
          <button className='text-sm font-bold hover:text-white bg-green-400 px-8 rounded-lg  hover:bg-green-700'>
            READ ►
          </button>
          <button className='text-sm font-bold hover:text-white rounded-lg hover:bg-green-700 px-4'>
            LEARN MORE ►
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
