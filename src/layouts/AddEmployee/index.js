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

// @mui material components
import Grid from "@mui/material/Grid";

// Pmate components
import SoftBox from "components/SoftBox";
import Card from "@mui/material/Card";
// import SoftTypography from "components/SoftTypography";
// import Table from "examples/Tables/Table";
// // Pmate components
// import MasterCard from "examples/Cards/MasterCard";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Pmate examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// // addClient page components
// import PaymentMethod from "layouts/billing/components/PaymentMethod";
// import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import data from "layouts/dashboard/components/Projects/data";

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { useSoftUIController } from "context";
// import { Padding } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeeAddAction } from "store/Action/userAction";
import { useNavigate } from "react-router-dom";
// import { BsCloudArrowUpFill } from "react-icons/bs";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    borderRadius: "10px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


const AddUser = () => {
    const [controller] = useSoftUIController();
    const { miniSidenav, sidenavColor } = controller;
    const [submitted, setSubmitted] = useState(1);
    const navigate = useNavigate()
    const Clients = useSelector(state => state.client);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedName, setSelectedName] = useState("");

    const [error, setError] = useState({
        fullName: "",
        email: "",
        mobile: "",
        password: "",
    })

    const dispatch = useDispatch();

    const [managerData, setManagerData] = useState({

        fullName: "",
        email: "",
        mobile: "",
        role: "employee",
        password: "",

    })

    console.log("managerData", managerData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("value", value);
        setManagerData({
            ...managerData,
            [name]: value
        });
        if (error[name] != '') {
            setError({
                ...error,
                [name]: ''
            })
        }
        if (value == '') {
            setError(prevError => ({ ...prevError, [name]: `Please enter ${name}` }));
        }
    };

    const handleSubmit = () => {
        // Validate form fields
        const newErrors = {};
        console.log("error", error);
        Object.keys(error).forEach((key) => {
            console.log("managerData[key]", key, "...", managerData, managerData[key], error[key], "vddsds", error);
            if (managerData[key] === '' && error[key] == '') {
                console.log("trrrrrrrr");
                setError(prevError => ({ ...prevError, [key]: `Please enter ${key}` }));
            }
        });
        setSubmitted(submitted + 1)
        console.log("managerData", managerData);
    }


    useEffect(() => {
        if (submitted != 1) {
            const allErrorsEmpty = Object.values(error).every(errorMessage => errorMessage === '');
            console.log("allErrorsEmpty", allErrorsEmpty);
            if (allErrorsEmpty) {
                dispatch(employeeAddAction(managerData));
            }
        }
    }, [submitted]);

    useEffect(() => {
        console.log("ClientsClientsClients", Clients);
        if (Clients?.addManager?.message === "Success") {
            console.log("Navigating to /manager...");
            navigate('/manager');
        }
    }, [Clients?.addManager?.message]);

    console.log("errrrr", error);
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox mt={4} sx={{ minHeight: "80vh" }}>
                <SoftBox mb={1.5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12} >
                            <Card >
                                <div style={{ padding: "20px" }}>

                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Full Name</label>
                                                <SoftInput type="text" placeholder="Full Name" onChange={handleChange} name="fullName" value={managerData.fullName} />
                                                {error?.fullName && <span style={{ color: 'red', fontSize: "15px" }}>{error?.fullName}</span>}
                                            </SoftBox>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Email</label>
                                                <SoftInput type="email" placeholder="Email" onChange={handleChange} name="email" value={managerData.email} />
                                            </SoftBox>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Phone no.</label>
                                                <SoftInput type="number" placeholder="Phone number" onChange={handleChange} name="mobile" value={managerData.mobile} />
                                                {error?.mobile && <span style={{ color: 'red', fontSize: "15px" }}>{error?.mobile}</span>}

                                            </SoftBox>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Password</label>
                                                <SoftInput type="password" placeholder="Password" onChange={handleChange} name="password" value={managerData.password} />
                                                {error?.password && <span style={{ color: 'red', fontSize: "15px" }}>{error?.password}</span>}
                                            </SoftBox>
                                        </Grid>
                                    </Grid>
                                    <SoftButton
                                        component="a"
                                        variant="gradient"
                                        color={sidenavColor}
                                        fullWidth
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </SoftButton>
                                </div>

                            </Card>


                        </Grid>
                    </Grid>
                </SoftBox>
                <SoftBox my={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <BillingInformation />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Transactions />
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
            <Footer />
        </DashboardLayout >
    );
}

export default AddUser;
