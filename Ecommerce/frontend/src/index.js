import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Newproduct from "./Pages/Newproduct";
import Signup from "./Pages/Signup";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route index element={<Home />}></Route>
      <Route path="services" element={<Services />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="portfolio" element={<Portfolio />}></Route>
      <Route path="contact" element={<ContactUs />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="newproduct" element={<Newproduct />}></Route>
      <Route path="signup" element={<Signup />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
