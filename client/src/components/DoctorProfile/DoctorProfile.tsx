import "./style.css"
import React, { useEffect } from "react"
import SideBar from "./SideBar"
import TopNav from "./TopNav";
import { Outlet } from "react-router";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { getOnePatient } from "../../store/patinetSlice";
import { getOneDoctor } from "../../store/doctorSlice";

const DoctorProfile = (): React.JSX.Element => {
  const dispatch: AppDispatch = useDispatch()
  // useEffect(() => {
  //   const type = localStorage.getItem("type")
  //   if (type === "patient") {
  //     dispatch(getOnePatient())
  //   } else if (type === "doctor") {
  //     dispatch(getOneDoctor())
  //   }
  // },[])


  return (
    <div className="DoctorProfile-body">
      <SideBar />
      <div className="DoctorProfile-main">
        <TopNav />
        <Outlet />
      </div>
    </div>
  )
}

export default DoctorProfile