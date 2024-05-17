import React, { useState } from 'react'
import doctorAvatar from "../../assets/images/avatar-doctor.png"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getOneDoctor } from '../../store/doctorSlice';
import { getOnePatient } from '../../store/patinetSlice';
import {toast} from "react-toastify"
interface props {
    doctor: any,
    date: any
}

function LeadingMedicine({ doctor, date }: props) {
    const dispatch: AppDispatch = useDispatch()
    const doc: any = useSelector((state: RootState) => state.doctor.doctorInfo)
    const patient: any = useSelector((state: RootState) => state.patient.patientInfo)
    const [disease, setDisease] = useState("")
    const handleAppointment = async (appo: any) => {
        try {
            const token = localStorage.getItem("token")
            if (!disease) {
                toast.info("Fill disease First", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                  return;
            }
            if (!token) {
                toast.warning("You Need To Login", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
            } else {
                const response = await axios.post("http://localhost:5000/api/appointment/add", appo);
                if (response.data.status === "pending") {
                    const userType = localStorage.getItem("type");
                    const res = await axios.put(`http://localhost:5000/api/doctor/schedule/up`, {
                        id: doctor.id,
                        time: date
                    })
                    if (userType === "patient") {
                        dispatch(getOnePatient())
                    } else if (userType === "doctor") {
                        dispatch(getOneDoctor())
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='one-leading-card d-flex flex-column align-items-center justify-content-center gap-3 p-2' style={{ background: "#fff", width: "25rem", height: "15rem" }}>
            {/* <div className='d-flex gap-2' style={{ color: "yellow" }}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </div> */}
            <div className='d-flex flex-row align-items-center justify-content-center gap-3 '>
                <div className='d-flex' style={{ height: "3rem", width: "3rem" }}>
                    <img src={doctor.avatarUrl || doctorAvatar} style={{ width: "100%", borderRadius: "50%", height: "100%" }} alt='doctor-avatar' />
                </div>
                <div className='d-flex align-items-start' style={{ fontSize: 20, fontWeight: "500" }}>{doctor.department}</div>
            </div>
            <div className='d-flex align-items-start' style={{ fontSize: 20, fontWeight: "500" }}>{doctor.name}</div>
            <input
                onChange={(e: any) => { setDisease(e.target.value) }}
                className='d-flex w-80 ' placeholder='Disease' style={{ paddingLeft: "1.2rem", border: "none", borderRadius: "0.5rem", outline: "none", background: "#ECECEC" }} />
            <div
                onClick={() => { handleAppointment({ disease, date, DoctorId: doctor.id, PatientId: doc.id || patient.id }) }}
                className='d-flex btn-service-book-appointement w-80' style={{
                    padding: "0.5rem 2.5rem",
                    borderRadius: "0.3125rem",
                    background: "#007E85",
                    color: "#fff"

                }}>
                Book Appointment
            </div>
        </div>
    )
}

export default LeadingMedicine