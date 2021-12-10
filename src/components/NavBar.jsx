import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../context/authContext";
function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [auth, userSignIn, userSignOut] = useAuth(useAuth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.setItem(
      "bookshelfAuth",
      JSON.stringify({ isSignedIn: false, uid: "" })
    );
    userSignOut();
    navigate("/bookshelf/signIn");
  };

  return (
    <div className='bg-black text-white items-center flex justify-between h-16 w-screen px-20 fixed top-0'>
      <div
        className='font-bold text-2xl md:text-4xl cursor-pointer'
        onClick={() => navigate("/bookshelf")}
      >
        BookShelf
      </div>
      {width > 768 - 768 ? (
        <div>
          <TabNavOptions />
        </div>
      ) : (
        <div>phone</div>
      )}
    </div>
  );

  function TabNavOptions() {
    return (
      <div className='flex text-xl'>
        <div
          className='cursor-pointer mx-5 hover:bg-gray-500 rounded-xl px-5 py-2'
          onClick={() => navigate("/bookshelf/CreateNewBook")}
        >
          Add Book
        </div>
        <div
          className='cursor-pointer mx-5 hover:bg-gray-500 rounded-xl px-5 py-2'
          onClick={handleSignOut}
        >
          Sign Out
        </div>
      </div>
    );
  }
}

export default NavBar;
