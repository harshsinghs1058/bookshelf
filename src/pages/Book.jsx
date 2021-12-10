import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import NavBar from "../components/NavBar";
import bookmark from "./../assets/bookmark.png";
import bookmark_yellow from "./../assets/bookmark-yellow.png";
import firebase from "firebase/compat/app";
import { useAuth } from "../context/authContext";
import loading_gif from "./../assets/loading_gif.gif";

async function getData(id, bookId) {
  const snapshot = await firebase.firestore().collection(id).doc(bookId).get();
  return snapshot.data();
}

function Book() {
  const [auth, userSignIn, userSignOut] = useAuth(useAuth);
  const [data, setData] = useState("loading");
  const [onlyBookMarks, setOnlyBookMarks] = useState(false);
  const { bookId } = useParams();
  const uid = auth.uid;
  let justForBookmark = 1;
  useEffect(() => {
    let mounted = true;
    if (uid && bookId)
      getData(uid, bookId).then((res) => {
        setData(res);
        console.log(res);
      });
    return (mounted = false);
  }, [uid, justForBookmark]);

  const handleBookmark = async (i) => {
    const e = document.getElementById(bookId + i + "c");
    if (e) {
      if (e.style.backgroundColor === "rgb(248, 255, 0)") {
        data.bookmarks[i] = 0;
        firebase.firestore().collection(uid).doc(bookId).update({
          bookmarks: data.bookmarks,
        });
      } else {
        data.bookmarks[i] = 1;
        firebase.firestore().collection(uid).doc(bookId).update({
          bookmarks: data.bookmarks,
        });
      }
      getData(uid, bookId).then((res) => {
        setData(res);
      });
    }
  };

  // //kuch karte ha animations type
  const clientHeight = document.documentElement.clientHeight;
  window.addEventListener("scroll", () => {
    if (data.book)
      data.book.map((element, i) => {
        const e = document.getElementById(bookId + i + "h");
        const es = document.getElementById(bookId + i + "hs");
        if (e && es) {
          const y = e.getBoundingClientRect().y;
          if (clientHeight > y && y > -210) {
            es.style.fontWeight = "bold";
          } else {
            es.style.fontWeight = "normal";
          }
        }
      });
  });

  return (
    <div>
      {data === "loading" ? (
        <div className='h-80v w-full grid justify-center items-center'>
          <img src={loading_gif} alt='loading' height='200px' width='200px' />
        </div>
      ) : data ? (
        <div className='mt-20'>
          <NavBar />
          <div className='w-full'>
            <div className='w-1/4 m-4 fixed break-all'>
              <div
                className=' px-10 ml-4 mr-4 rounded-xl py-2 text-center text-xl font-bold text-white hover:bg-black cursor-pointer'
                style={{
                  backgroundColor: onlyBookMarks
                    ? "black"
                    : "rgb(156, 163, 175)",
                }}
                onClick={() => setOnlyBookMarks(!onlyBookMarks)}
              >
                BookMarks
              </div>
              {data.book.map((element, i) => {
                if (!onlyBookMarks || data.bookmarks[i] === 1)
                  return (
                    <div
                      className='mt-4 ml-4 text-xl'
                      key={bookId + i + "hs"}
                      id={bookId + i + "hs"}
                    >
                      {element.chapterHeading}
                    </div>
                  );
              })}
            </div>
            <div className='w-1/2 mx-auto'>
              <img src={data.thumbnailUrl} className='mt-4 ml-4' />
              <div className='mt-4 ml-4 font-bold break-all text-2xl'>
                {data.title}
              </div>
              <div className='mt-4 ml-4 text-xl break-all'>{data.desc}</div>
              {onlyBookMarks && (
                <div className='mt-4 ml-4 font-bold break-all text-2xl'>
                  Bookmarks{" "}
                </div>
              )}
              <div className='mt-2 mb-4'>
                {data.book.map((element, i) => {
                  if (!onlyBookMarks || data.bookmarks[i] === 1)
                    return (
                      <div key={bookId + i}>
                        <div className='flex justify-between items-center'>
                          <div
                            className='mt-4 ml-4 font-bold text-xl'
                            id={bookId + i + "h"}
                          >
                            {element.chapterHeading}
                          </div>
                          <div>
                            <img
                              src={
                                data.bookmarks[i] === 0
                                  ? bookmark
                                  : bookmark_yellow
                              }
                              alt='bookmark'
                              height='20px'
                              width='20px'
                              onClick={() => {
                                handleBookmark(i);
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className='mt-4 ml-4'
                          id={bookId + i + "c"}
                          style={{
                            backgroundColor: data.bookmarks[i]
                              ? "#F8FF00"
                              : "white",
                          }}
                        >
                          {element.content}
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <NavBar />
          <div className='flex flex-col items-center font-bold justify-center absolute top-16 w-full bottom-0 text-4xl'>
            No Book Found
          </div>
        </div>
      )}
    </div>
  );
}
export default Book;
