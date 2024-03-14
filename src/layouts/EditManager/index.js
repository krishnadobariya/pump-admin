import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { managerAddAction } from "store/Action/managerAction";
import { useNavigate, useParams } from "react-router-dom";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Accordion, AccordionSummary, AccordionDetails, Grid } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EditManager = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const Clients = useSelector(state => state.client);
    const dispatch = useDispatch();

    const [managerData, setManagerData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        role: "",
        address: ""

        // Add more fields as needed
    });

    const [error, setError] = useState({
        fullName: "",
        email: "",
        mobile: "",
        role: "",
        address: ""

        // Add more fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setManagerData({
            ...managerData,
            [name]: value
        });
        if (error[name] !== '') {
            setError({
                ...error,
                [name]: ''
            });
        }
        if (value === '') {
            setError(prevError => ({ ...prevError, [name]: `Please enter ${name}` }));
        }
    };

    const handleSubmit = () => {
        const newErrors = {};
        Object.keys(error).forEach((key) => {
            if (managerData[key] === '' && error[key] === '') {
                setError(prevError => ({ ...prevError, [key]: `Please enter ${key}` }));
            }
        });
        // Dispatch an action to update the manager data
        dispatch(managerAddAction(managerData));
    };

    useEffect(() => {
        const fetchManagerData = async () => {
            try {
                // Fetch manager data from the backend using the ID
                const response = await fetch(`your_backend_url/managers/${id}`);
                const data = await response.json();

                // Set the manager data in the state
                setManagerData({
                    fullName: data.fullName,
                    email: data.email,
                    mobile: data.mobile,
                    role: data.role,
                    address: data.address,
                    // Add more fields as needed
                });
            } catch (error) {
                console.error("Error fetching manager data:", error);
                // Handle the error as needed
            }
        };

        fetchManagerData(); // Call the fetchManagerData function
    }, [id]);

    useEffect(() => {
        if (Clients?.editManager?.message === "Success") {
            navigate('/manager');
        }
    }, [Clients?.editManager?.message, navigate]);

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox mt={4} sx={{ minHeight: "80vh" }}>
                <SoftBox mb={1.5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12}>
                            <Accordion defaultExpanded sx={{ boxShadow: "none" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    sx={{ fontSize: "18px" }}
                                >
                                    Update Information
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Full Name</label>
                                                <SoftInput type="text" placeholder="Full Name" onChange={handleChange} name="fullName" value={managerData.fullName} />
                                                {error?.fullName && <span style={{ color: 'red', fontSize: "15px" }}>{error?.fullName}</span>}
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Email</label>
                                                <SoftInput type="email" placeholder="Email" onChange={handleChange} name="email" value={managerData.email} />
                                            </SoftBox>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Phone no.</label>
                                                <SoftInput type="number" placeholder="Phone number" onChange={handleChange} name="mobile" value={managerData.mobile} />
                                                {error?.mobile && <span style={{ color: 'red', fontSize: "15px" }}>{error?.mobile}</span>}
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Role</label>
                                                <SoftInput type="text" placeholder="Role" onChange={handleChange} name="role" value={managerData.role} />
                                                {error?.role && <span style={{ color: 'red', fontSize: "15px" }}>{error?.role}</span>}
                                            </SoftBox>
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Address</label>
                                                <SoftInput type="text" placeholder="Address" onChange={handleChange} name="address" value={managerData.address} />
                                                {error?.role && <span style={{ color: 'red', fontSize: "15px" }}>{error?.role}</span>}
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>status</label>
                                                <SoftInput type="text" placeholder="City" onChange={handleChange} name="city" value={managerData.city} />
                                                {error?.role && <span style={{ color: 'red', fontSize: "15px" }}>{error?.role}</span>}
                                            </SoftBox>
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Pincode</label>
                                                <SoftInput type="number" placeholder="pinCode" onChange={handleChange} name="pinCode" value={managerData.pinCode} />
                                                {error?.role && <span style={{ color: 'red', fontSize: "15px" }}>{error?.role}</span>}
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Status</label>
                                                <SoftInput type="text" placeholder="status" onChange={handleChange} name="status" value={managerData.status} />
                                                {error?.role && <span style={{ color: 'red', fontSize: "15px" }}>{error?.role}</span>}
                                            </SoftBox>
                                        </Grid>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>

                            <SoftButton
                                component="a"
                                variant="gradient"
                                color="primary"  
                                fullWidth
                                onClick={handleSubmit}
                            >
                                Update
                            </SoftButton>
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
};

export default EditManager;
