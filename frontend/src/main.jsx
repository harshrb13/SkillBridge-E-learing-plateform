import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from "react-hot-toast";
// import { VideoProvider } from "./contexts/VideoContext"; // Import the context provider

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      {/* <VideoProvider> Wrap the App component with the VideoProvider */}
        <App />
        <Toaster />
      {/* </VideoProvider> */}
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
