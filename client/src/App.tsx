import React, { useEffect } from "react";
import logo from "./logo.svg";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import ContactUs from "./components/contactUs/ContactUS";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import DoctorProfile from "./components/DoctorProfile/DoctorProfile";
import Review from "./components/DoctorProfile/Review";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import ServicePage from "./components/ServicePage/ServicePage";
import Overview from "./components/DoctorProfile/Overview";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { getOnePatient } from "./store/patinetSlice";
import { getAllDoctors, getOneDoctor } from "./store/doctorSlice";
import DoctorChat from "./components/DoctorChat/DoctorChat";
import AllAppointments from "./components/AllAppointments/AllAppointments";
import AllPatients from "./components/AllPatients/AllPatients";
import Schedule from "./components/Schedule/Schedule";
import { ToastContainer } from "react-toastify";


  function App() {
  const dispatch:AppDispatch = useDispatch();
  const doctor = useSelector((state: RootState) => state.doctor);
  const patient = useSelector((state: RootState) => state.patient);
  useEffect(() => {
    const userType = localStorage.getItem("type");
    if (userType==="patient") {
      dispatch(getOnePatient())
    }else if(userType==="doctor"){
      dispatch(getOneDoctor())
    }
    dispatch(getAllDoctors())
  },[]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctorProfile" element={<DoctorProfile />}>
          <Route path="" element={<Overview />} />
          <Route path="review" element={<Review />} />
          <Route path="docChat" element={<DoctorChat/>} />
          <Route path="appointments" element={<AllAppointments/>} />
          <Route path="patients" element={<AllPatients/>} />
          <Route path="schedule" element={<Schedule/>} />
        </Route>
        <Route path="/services" element={<ServicePage />} />
        <Route path="/Review" element={<Review />} />
      </Routes>
      <ToastContainer/>
      <Footer />
    </div>
  );
}

export default App;
