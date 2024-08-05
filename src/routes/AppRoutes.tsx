import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Onboarding from '../component/Onboarding';
import PatientLogin from '../pages/Patient/PatientLogin';
import ProfessionalLogin from '../pages/Professional/ProfessionalLogin';
import AdminLogin from '../pages/Admin/AdminLogin';
import ProfessionalRegister from '../pages/Professional/ProfessionalRegister';
import PatientRegister from '../pages/Patient/PatientRegister';
import AdminRegister from '../pages/Admin/AdminRegister';
import ForgottenPassword from '../pages/auth/ForgottenPassword';
import PatientDashboard from '../pages/Patient/PatientDashboard';
import ProfessionalDashboard from '../pages/Professional/ProfessionalDashboard';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import OverviewPatient from '../pages/Patient/screen/overview/OverviewPatient';



const AppRoutes: React.FC = () => {
   

  
    return (
        <Router>           
            <Routes>
                <Route path='/' Component={Onboarding} />
                <Route path='/patientLogin' Component={PatientLogin} />
                <Route path='/professionalLogin' Component={ProfessionalLogin} />
                <Route path='/adminLogin' Component={AdminLogin} />
                <Route path='/patientDashboard' Component={PatientDashboard} />
                <Route path='/professionalDashboard' Component={ProfessionalDashboard} />
                <Route path='/adminDashboard' Component={AdminDashboard} />
                <Route path='/professionalRegister' Component={ProfessionalRegister} />
                <Route path='/patientRegister' Component={PatientRegister} />
                <Route path='/adminRegister' Component={AdminRegister} />
                <Route path='/forgottenPassword' Component={ForgottenPassword} />
                <Route path='/overviewPatient' Component={OverviewPatient} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
