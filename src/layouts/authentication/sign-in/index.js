/**
=========================================================
* Pmate - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Pmate components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import loginImg from "assets/images/login.jpg";
import { useDispatch } from "react-redux";
import { loginAdminAction } from "store/Action/adminAction";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const [adminLogin, setAdminLogin] = useState({
    email: "",
    role: "admin",
    password: ""
  });

  const dispatch = useDispatch()
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setAdminLogin({ ...adminLogin, [name]: value });
  };

  const loginAdmin = () => {
    dispatch(loginAdminAction(adminLogin))
  }


  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={loginImg}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" name="email" value={adminLogin.email} onChange={handleLoginChange} placeholder="Email" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" onChange={handleLoginChange} name="password" value={adminLogin.password} placeholder="Password" />
        </SoftBox>
        {/* <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox> */}
        <SoftTypography component="label" variant="caption" fontWeight="bold">
          Not a Member? <Link to='/authentication/sign-up'>Register</Link>
        </SoftTypography>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={loginAdmin}>
            sign in
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
