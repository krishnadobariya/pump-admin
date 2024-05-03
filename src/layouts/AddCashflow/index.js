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
import { managerAddAction } from "store/Action/managerAction";
import { useNavigate } from "react-router-dom";
import { cashFlowAddAction } from "store/Action/cashFlowAction";
import { FormControl, MenuItem, Select } from "@mui/material";



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


const AddCashFlow= () => {
    const [controller] = useSoftUIController();
    const { miniSidenav, sidenavColor } = controller;
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [cashFlowData, setcashFlowData] = useState({

        name: "",
        category: ""
    })

    console.log("cashFlowData", cashFlowData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("value", value);
        setcashFlowData({
            ...cashFlowData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        dispatch(cashFlowAddAction(cashFlowData));
    }

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
                                                <label style={{ fontSize: "15px" }}>Name</label>
                                                <SoftInput type="text" placeholder="Enter Name" onChange={handleChange} name="name" value={cashFlowData.name} />

                                            </SoftBox>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Category</label>
                                                <SoftInput type="text" placeholder="Enter Category" onChange={handleChange} name="category" value={cashFlowData.category} />
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

export default AddCashFlow;
