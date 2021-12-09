import React, { useEffect, useState } from "react";
import BookCard from "../components/book_card";
import NavBar from "../components/NavBar";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useAuth } from "../context/authContext";

async function getData() {
  // await firebase
  //   .firestore()
  //   .collection("wwszdv5AzXWxMMDoLBQDaA5M7HH3")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.docs.map((doc) => console.log(doc));
  //   });

  await firebase
    .firestore()
    .collection("wwszdv5AzXWxMMDoLBQDaA5M7HH3")
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => console.log(doc.data())));
}

function Books() {
  const [auth, userSignIn, userSignOut] = useAuth(useAuth);
  const [docs, setDocs] = useState(undefined);

  // const ref = firebase.firestore().collection("wwszdv5AzXWxMMDoLBQDaA5M7HH3");
  // useEffect(() => {
  //   ref.get().then((querySnapshot) => {
  //     if (!docs) setDocs(querySnapshot);
  //   }, []);
  // });

  getData();

  return (
    <>
      <NavBar />
      <div className='flex flex-shrink-0 justify-center flex-wrap '>
        {/* {docs &&
          docs.forEach((doc) => {
            // if (querySnapshot) {
            console.log(doc);
            // console.log(doc.id, " => ", doc.data());
            // doc.data() is never undefined for query doc snapshots
            return <div>Hello World</div>;
            // }
          })} */}
        {/* {docs &&
          docs.docs.map((doc) => {
            console.log(doc);
            <div>Element</div>;
          })} */}
      </div>
    </>
  );
}

export default Books;
