import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/index.css";
import CreateNewBook from "./pages/CreateNewBook";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useAuth } from "./context/authContext";
import Books from "./pages/Books";
import HomePage from "./pages/HomePage";
import Book from "./pages/Book";

firebase.initializeApp({
  //config
  //TODO::Use env
  apiKey: "AIzaSyAC_pfgTeBv5eX-SAryBBV2hMm7t9nfbSo",
  authDomain: "bookshelf-7f547.firebaseapp.com",
  projectId: "bookshelf-7f547",
  storageBucket: "bookshelf-7f547.appspot.com",
  messagingSenderId: "37943744380",
  appId: "1:37943744380:web:beec8e86828960d25a36f9",
});
const auth = firebase.auth();
function App() {
  const [auth] = useAuth(useAuth);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/bookshelf/' element={<HomePage />} />
          <Route exact path='/bookshelf/Books' element={<Books />} />
          <Route exact path='/bookshelf/SignUp' element={<SignUp />} />
          <Route exact path='/bookshelf/SignIn' element={<SignIn />} />
          <Route
            exact
            path='/bookshelf/CreateNewBook'
            element={<CreateNewBook />}
          />
          <Route exact path='/bookshelf/book/:bookId' element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
