import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ToastContainer hideProgressBar />
      <Routes />
    </React.Suspense>
  );
}

export default App;
