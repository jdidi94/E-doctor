import React from 'react'
import AppointmentRequest from "./AppointmentRequest";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const AppointmentsList = () => {
  const doctor: any = useSelector((state: RootState) => state.doctor.doctorInfo)

  const navigate = useNavigate()
  return (
    <div className="DoctorProfile-appointment-requests-list">
      <div className="DoctorProfile-appointment-requests-list-header">
        <span className="DoctorProfile-appointment-requests-list-header-title">
          Appointment Request
        </span>
        <span className="DoctorProfile-appointment-requests-list-header-view" onClick={() => navigate("/doctorProfile/appointments")} >
          View all &gt;{" "}
        </span>
      </div>
      <div className="DoctorProfile-appointment-requests-list-container">
        {
          doctor.Appointments?.map((appo: any, index: number) => index < 4 ? <AppointmentRequest appo={appo} key={index}  /> : null)
        }

        {/* <AppointmentRequest isConfirmed={false} isPending={true} />
        <AppointmentRequest isConfirmed={true} isPending={false} />
        <AppointmentRequest isConfirmed={false} isPending={false} /> */}
      </div>
    </div>
  )
}

export default AppointmentsList