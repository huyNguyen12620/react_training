import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './index.scss';
import "./index.scss";

// Cấu hình react-router-dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ReactForm from './pages/ReactForm/ReactForm';
import Page404 from './pages/Page404/Page404';
import ReactLifeCycle from './pages/ReactLifeCycle/ReactLifeCycle';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />}>
        {/* <Route index element={<Home/>}></Route> */}
        <Route path="home" element={<Home />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="reactform" element={<ReactForm />}></Route>
        <Route path="lifecycle" element={<ReactLifeCycle />}></Route>
        {/* <Route path="*" element={<Page404 />}></Route> */}
        <Route path="*" element={<Navigate to="" />}></Route>

      </Route>

      {/* <Route path='contact' element={<Contact/>}></Route> */}
    </Routes>
  </BrowserRouter>
);
