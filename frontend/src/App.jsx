import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPass from './pages/ResetPass'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //
import GetStarted from './pages/GetStarted'
import Report_page from './page_user/Report_page'
import AdminAuth from './page_admin/AdminLogin'
import AdminAccessPin from './page_admin/AdminAccessPin'
import AboutPage from './pages/About'
import AdminDashboard from './page_admin/AdminDashboard'
import ViewAllReports from './page_user/View_All_Reports'
import EditReportPage from './page_user/Edit_Report_Page'
import FormalComplaintGenerator from './page_user/downloadable_report'
import MyFeedbackPage from './pages/feedback'



const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/email-verify' element={<EmailVerify />} />
        <Route path='/reset-password' element={<ResetPass />} />
        <Route path='/get-started' element={<GetStarted />} />
        <Route path='/report' element={<Report_page />} />
        <Route path='/admin-login' element={<AdminAuth />}  />
        <Route path='/admin-access-pin' element={<AdminAccessPin />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/admin-dashboard' element={<AdminDashboard/>} />
        <Route path='/view-all-reports' element={<ViewAllReports />} />
        <Route path='/edit-report/:id' element={<EditReportPage />} />
        <Route path='/formal-complaint' element={<FormalComplaintGenerator />} />
        <Route path='/feedback' element={<MyFeedbackPage />} />
      </Routes>
    </div>
  )
}

export default App