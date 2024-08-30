import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Onboarding from "../component/Onboarding";
import PatientLogin from "../pages/Patient/PatientLogin";
import ProfessionalLogin from "../pages/Professional/ProfessionalLogin";
import AdminLogin from "../pages/Admin/AdminLogin";
import ProfessionalRegister from "../pages/Professional/ProfessionalRegister";
import PatientRegister from "../pages/Patient/PatientRegister";
import AdminRegister from "../pages/Admin/AdminRegister";
import ForgottenPassword from "../pages/auth/ForgottenPassword";
import PatientDashboard from "../pages/Patient/PatientDashboard";
import ProfessionalDashboard from "../pages/Professional/ProfessionalDashboard";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import OverviewPatient from "../pages/Patient/screen/overview/OverviewPatient";
import DocumentPatient from "../pages/Patient/screen/document/DocumentPatient";
import AppointmentPatient from "../pages/Patient/screen/appointment/AppointmentPatient";
import PatientBio from "../utilites/reusable/PatientBio";
import DoctorDetails from "../pages/Admin/screen/staff/DoctorDetails";
import MedicaDetails from "../utilites/reusable/medicalbio/MedicaDetails";
import NurseRegister from "@/pages/nurse/NurseRegister";
import NurseLogin from "@/pages/nurse/NurseLogin";
import NurseDashboard from "@/pages/nurse/NurseDashboard";
import PatBioData from "@/component/Layout/nurse/PatBioData";
import PatDocData from "@/component/Layout/professional/PatDocData";



const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Onboarding} />
        <Route path="/patientLogin" Component={PatientLogin} />
        <Route path="/professionalLogin" Component={ProfessionalLogin} />
        <Route path="/adminLogin" Component={AdminLogin} />
        <Route path="/patientDashboard" Component={PatientDashboard} />
        <Route path="/professionalDashboard" Component={ProfessionalDashboard} />
        <Route path="/adminDashboard" Component={AdminDashboard} />
        <Route path="/professionalRegister" Component={ProfessionalRegister} />
        <Route path="/patientRegister" Component={PatientRegister} />
        <Route path="/nurseRegister" Component={NurseRegister} />
        <Route path="/nurseLogin" Component={NurseLogin} />
        <Route path="/nurseDashboard" Component={NurseDashboard} />
        <Route path="/adminRegister" Component={AdminRegister} />
        <Route path="/forgottenPassword" Component={ForgottenPassword} />
        <Route path="/overviewPatient" Component={OverviewPatient} />
        <Route path="/documentPatient" Component={DocumentPatient} />
        <Route path="/appointmentPatient" Component={AppointmentPatient} />
        <Route path="/patientBio" Component={PatientBio} />
        <Route path="/doctorDetails" Component={DoctorDetails} />
        <Route path="/medicalDetails" Component={MedicaDetails} />
        <Route path="/patBioData" Component={PatBioData} />
        <Route path="/patDocData" Component={PatDocData} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
