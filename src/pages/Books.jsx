import React, { useEffect, useState } from "react";
import BookCard from "../components/book_card";
import NavBar from "../components/NavBar";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useAuth } from "../context/authContext";
import loading_gif from "./../assets/loading_gif.gif";
async function getData(id) {
  const snapshot = await firebase.firestore().collection(id).get();
  return snapshot.docs.map((doc) => {
    return { id: doc.id, data: doc.data() };
  });
}

function Books() {
  const [auth, userSignIn, userSignOut] = useAuth(useAuth);
  const [data, setData] = useState("loading");
  const uid = auth.uid;
  useEffect(() => {
    if (uid)
      getData(auth.uid).then((res) => {
        setData(res);
      });
  }, [uid]);

  return (
    <div className='mt-20'>
      <NavBar />

      {data === "loading" ? (
        <div className='h-80v w-full grid justify-center items-center'>
          <img src={loading_gif} alt='loading' height='200px' width='200px' />
        </div>
      ) : data.length > 0 ? (
        <div className='flex flex-shrink-0 justify-center flex-wrap '>
          {data.map((element) => (
            <BookCard key={element.id} data={element} />
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center font-bold justify-center absolute top-16 w-full bottom-0 text-4xl'>
          Empty
          <span className=' inline font-normal'>try adding some books</span>
        </div>
      )}
    </div>
  );
}

export default Books;
