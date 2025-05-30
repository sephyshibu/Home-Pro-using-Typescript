import { BrowserRouter as Router, Routes,Route,Navigate } from 'react-router'
import './App.css'
import "leaflet/dist/leaflet.css";
import 'leaflet-geosearch/dist/geosearch.css';
import Login from './components/Login/Logn'
import Signup from './components/Signup/Signup'
import Otp from './components/OTP/Otp'
import Home from './components/Home/Home'
import ForgetPassword from './components/Forgetpassword/Forgetpassword'
import ForgetPasswordOTp from './components/Forgetpassword/ForgetPasswordOTp'
import ChangePassword from './components/Forgetpassword/ChangePassword'
import {Toaster} from 'react-hot-toast'
import UserLayout from './components/Profile/Userlayout'
import ProfilePage from './components/Profile/ProfilePage'
import TechnicianList from './components/AvailableTech.tsx/Availabletech'
import TechnicianProfile from './components/Techprofile/Profile'
import AddressPage from './components/Profile/Address'
import PaymentPage from './components/Payment/ProceedPayment'
import ThankYouPage from './components/ThankYou/ThankYou';
import Services from './components/Profile/Service'
import ViewBookingsProfile from './components/Profile/ViewBookings';
import ChangePasswords from './components/Profile/Password';
import ThankYouPageService from './components/Thankyouservice/ThankYouService';
import WalletPage from './components/Profile/Wallet';
function App() {
 

  return (
    <>
    <Toaster/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={
              <Login />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/forgetpassotp' element={<ForgetPasswordOTp/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}/>
        <Route path='/available-technicians' element={<TechnicianList/>}/>
        <Route path='/viewprofile' element={<TechnicianProfile/>}/>
        <Route path='/proceedpayment' element={<PaymentPage/>}/>
        <Route path='/thankyou' element={<ThankYouPage/>}/>
         <Route path='/thankyouservice' element={<ThankYouPageService/>}/>
        <Route path='/viewbookingddetails' element={<ViewBookingsProfile/>}/>
        <Route path='/myaccount' element={<UserLayout />}>
          {/* When /myaccount, redirect to /myaccount/profile */}
          <Route index element={<Navigate to="profile" replace />} />
          
          {/* Child routes under /myaccount */}
          <Route path="profile" element={<ProfilePage />} />
          <Route path='addressmanagment' element={<AddressPage/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='passwordchange' element={<ChangePasswords/>}/>
          <Route path='wallet' element={<WalletPage/>}/>
        </Route>
      
      
      </Routes>
    </Router>
    </>
    
  
  )
}

export default App
