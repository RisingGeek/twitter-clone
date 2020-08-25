import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Routes from "./routes";
import { SET_THEME } from "./redux/actions";

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(theme).length === 0)
      dispatch({ type: SET_THEME, payload: "default" });
  }, []);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ToastContainer hideProgressBar />
      <Routes />
    </React.Suspense>
  );
}

export default App;
