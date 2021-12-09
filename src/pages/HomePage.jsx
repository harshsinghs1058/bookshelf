import { Navigate } from "react-router-dom";
export default function HomePage() {
  const authJson = localStorage.getItem("bookshelfAuth");
  if (authJson) {
    const authObj = JSON.parse(authJson);
    if (authObj.isSignedIn) {
      return <Navigate to='Books' />;
    }
  }
  return <Navigate to='/sign-in' />;
}
