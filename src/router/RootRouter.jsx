//import { Route, Routes } from "react-router-dom";
import { TopNavbar } from "../components/navbar/TopNavbar";
import { FooterSocial } from "../components/footer/FooterSocial";
import ScrollToTop from "../components/others/ScrollToTop";
import Home from "../pages/Home";
import Loans from "../pages/Loans";
import NotFound from "../pages/NotFound";
import About from "../pages/AboutUs";
import { BrowserRouter as Router,Route, Routes, Link } from "react-router-dom";

import Login from "../pages/login_component";
import SignUp from "../pages/signup_component";
import UserDetails from "../pages/userDetails";


function RootRouter() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
      
      <TopNavbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/loans' element={<Loans />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/login_component' element= {<Login />} />
        <Route exact path='*' element={<NotFound />} />
        <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
      </Routes>
      <FooterSocial />
      <ScrollToTop />
      </>
     
  );
}

export default RootRouter;
