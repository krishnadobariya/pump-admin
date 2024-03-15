/**
=========================================================
* CodersBay - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// CodersBay components
import SoftBox from "components/SoftBox";
import Card from "@mui/material/Card";
// import SoftTypography from "components/SoftTypography";
// import Table from "examples/Tables/Table";
// // CodersBay components
// import MasterCard from "examples/Cards/MasterCard";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// CodersBay examples
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
import { pumpAddAction } from "store/Action/pumpAction";
import { FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select } from "@mui/material";
// import { BsCloudArrowUpFill } from "react-icons/bs";
import Checkbox from '@mui/material/Checkbox';
import { getAllManagerAction } from "store/Action/managerAction";

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


const AddPump = () => {
    const [controller] = useSoftUIController();
    const { miniSidenav, sidenavColor } = controller;
    const [submitted, setSubmitted] = useState(1);
    const [managerId, setManagerId] = useState();
    const adminId = localStorage.getItem('adminId');
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const managerList = useSelector(state => state.manager);
    console.log("managerList", managerList);
    useEffect(() => {
        dispatch(getAllManagerAction())
    }, []);

    const handleChange = (e) => {
        console.log(e.target.value);
        setManagerId(e.target.value)
    }
    const [adminDetails, setAdminDetails] = useState({
        adminId: "",
        managerId: "",
        outletName: "",
        address: "",
        oilCompany: "",
        cmsCode: "",
        dealerName: "",
        dealerContact: "",
        dealerEmail: "",
        managerName: "",
        managerContact: "",
        managerEmail: "",
    });

    const [productDetails, setProductDetails] = useState({
        ms: false,
        hsd: false,
        msPremium: false,
        hsdPremium: false,
        lubes: false,
        alpg: false,
        cng: false,

    });


    const [nozzleDetail, setNozzleDetail] = useState({
        "ms": {
            numberOfNozzles: "",
            tank: ""
        },
        "hsd": {
            numberOfNozzles: "",
            tank: ""
        },
        "msPremium": {
            numberOfNozzles: "",
            tank: ""
        },
        "hsdPremium": {
            numberOfNozzles: "",
            tank: ""
        },
        "lubes": {
            numberOfNozzles: "",
            tank: ""
        },
        "alpg": {
            numberOfNozzles: "",
            tank: ""
        },
        "cng": {
            numberOfNozzles: "",
            tank: "",
        }
    });

    const [bankingDetails, setBankingDetails] = useState({
        upi: "",
        cardSwipeMachines: "",
        outletBanking: ""
    });

    const [otherDetails, setOtherDetails] = useState({
        gstNo: "",
        tinNo: "",
        pesoLicense: "",
        wmCertificate: "",
        fireCertificate: "",
        tradeCertificate: "",
        nozzleReading: "",
        earthpitCertificate: "",
        stocks: "",
        labourCertificate: "",
        tankersReceipts: "",
        panNumber: "",
        creditCustomers: "",
        expenses: "",
        dailySalesAndPricing: "",
        dailySwipeAndUpiPayments: "",
        lubes: "",
        bankStatements: ""
    });

    const handleAdminDetailsChange = (e) => {
        const { name, value } = e.target;
        setAdminDetails({ ...adminDetails, [name]: value });
    };

    const handleProductDetailsCheckChange = (e) => {
        const { name } = e.target;
        const isChecked = e.target.checked;
        setProductDetails({
            ...productDetails,
            [name]: isChecked
        });
    };

    const handleProductDetailsChange = (e) => {
        const { name, value } = e.target;
        const [product, key] = name.split('.');
        setNozzleDetail(prevState => ({
            ...prevState,
            [product]: {
                ...prevState[product],
                [key]: value
            }
        }));
    };


    const handleBankingDetailsChange = (e) => {
        const { name, value } = e.target;
        setBankingDetails({ ...bankingDetails, [name]: value });
    };

    const handleOtherDetailsChange = (e) => {
        const { name, value } = e.target;
        setOtherDetails({ ...otherDetails, [name]: value });
    };

    const handleSubmit = () => {
        // Handle form submission
        setSubmitted(submitted + 1)
        console.log("Form submitted");
    };

    const payload = {
        ...adminDetails,
        adminId: adminId,
        managerId: managerId,
        "products": productDetails,
        "nozzleDetail": nozzleDetail,
        "bankingDetails": bankingDetails,
        "otherDetails": otherDetails
    }

    console.log("payload", payload)

    useEffect(() => {
        if (submitted != 1) {
            // const allErrorsEmpty = Object.values(error).every(errorMessage => errorMessage === '');
            // console.log("allErrorsEmpty", allErrorsEmpty);
            // if (allErrorsEmpty) {
            dispatch(pumpAddAction(payload));
            // }
        }
    }, [submitted]);

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox mt={4} sx={{ minHeight: "80vh" }}>
                <Card style={{ padding: "20px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Accordion defaultExpanded sx={{ boxShadow: "none" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize: "20px" }} aria-controls="admin-details" id="admin-details-header">
                                    Admin Details
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2} px={2}>
                                        {/* Admin Details Inputs */}

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Outlet Name</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Outlet Name"
                                                    name="outletName"
                                                    value={adminDetails.outletName}
                                                    onChange={handleAdminDetailsChange} />
                                            </SoftBox>


                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Address</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Address"
                                                    name="address"
                                                    value={adminDetails.address}
                                                    onChange={handleAdminDetailsChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Oil Company</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Oil Company"
                                                    name="oilCompany"
                                                    value={adminDetails.oilCompany}
                                                    onChange={handleAdminDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Cms Code</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Cms Code"
                                                    name="cmsCode"
                                                    value={adminDetails.cmsCode}
                                                    onChange={handleAdminDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Dealer Name</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Dealer Name"
                                                    name="dealerName"
                                                    value={adminDetails.dealerName}
                                                    onChange={handleAdminDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Dealer Contact</label>
                                                <SoftInput
                                                    type="number"
                                                    placeholder="Dealer Contact"
                                                    name="dealerContact"
                                                    value={adminDetails.dealerContact}
                                                    onChange={handleAdminDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Dealer Email</label>
                                                <SoftInput
                                                    type="email"
                                                    placeholder="Dealer Email"
                                                    name="dealerEmail"
                                                    value={adminDetails.dealerEmail}
                                                    onChange={handleAdminDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Manager Name</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Manager Name"
                                                    name="managerName"
                                                    value={adminDetails.managerName}
                                                    onChange={handleAdminDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Manager Contact</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Manager Contact"
                                                    name="managerContact"
                                                    value={adminDetails.managerContact}
                                                    onChange={handleAdminDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Manager Email</label>
                                                <SoftInput
                                                    type="email"
                                                    placeholder="Manager Email"
                                                    name="managerEmail"
                                                    value={adminDetails.managerEmail}
                                                    onChange={handleAdminDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Select Manager</label>
                                                <FormControl fullWidth>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={managerId}
                                                        onChange={(e) => { handleChange(e) }}
                                                    >
                                                        {managerList?.getAllManager?.data?.map((res) => {
                                                            return (
                                                                res?.role !== "admin" && <MenuItem value={res?._id}>{res?.fullName}</MenuItem>

                                                            )
                                                        })}
                                                    </Select>
                                                </FormControl>
                                            </SoftBox>

                                        </Grid>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion sx={{ boxShadow: "none" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="product-details" id="product-details-header">
                                    Product Details
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={1} px={3}>
                                        {/* Product Details Inputs */}

                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox />} value={productDetails.ms} name="ms"
                                                        onChange={(e) => handleProductDetailsCheckChange(e)} label="MS" />
                                                </FormGroup>
                                            </SoftBox>

                                            {productDetails.ms === true && (
                                                <>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="ms.numberOfNozzles"
                                                                    value={nozzleDetail.ms.numberOfNozzles}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="ms.tank"
                                                                    value={nozzleDetail.ms.tank}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                    </Grid>
                                                </>
                                            )}

                                        </Grid>
                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox />} value={productDetails.hsd} name="hsd"
                                                        onChange={(e) => handleProductDetailsCheckChange(e)} label="HSD" />
                                                </FormGroup>
                                            </SoftBox>
                                            {productDetails.hsd === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="hsd.numberOfNozzles"
                                                                    value={nozzleDetail.hsd.numberOfNozzles}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="hsd.tank"
                                                                    value={nozzleDetail.hsd.tank}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                    </Grid>
                                                </>
                                            )}
                                        </Grid>



                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox />} value={productDetails.msPremium}
                                                        name="msPremium"
                                                        onChange={(e) => handleProductDetailsCheckChange(e)} label="Ms Premium" />
                                                </FormGroup>
                                            </SoftBox>

                                            {productDetails.msPremium === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="msPremium.numberOfNozzles"
                                                                    value={nozzleDetail.msPremium.numberOfNozzles}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="msPremium.tank"
                                                                    value={nozzleDetail.msPremium.tank}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                    </Grid>
                                                </>
                                            )}
                                        </Grid>

                                        <Grid item xs={12}>

                                            <SoftBox mb={2}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox />} value={productDetails.hsdPremium}
                                                        name="hsdPremium"
                                                        onChange={(e) => handleProductDetailsCheckChange(e)} label="Hsd Premium" />
                                                </FormGroup>
                                            </SoftBox>
                                            {productDetails.hsdPremium === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="hsdPremium.numberOfNozzles"
                                                                    value={nozzleDetail.hsdPremium.numberOfNozzles}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="hsdPremium.tank"
                                                                    value={nozzleDetail.hsdPremium.tank}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                    </Grid>
                                                </>
                                            )}
                                        </Grid>

                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox />} value={productDetails.lubes} name="lubes"
                                                        onChange={(e) => handleProductDetailsCheckChange(e)} label="Lubes" />
                                                </FormGroup>
                                            </SoftBox>
                                            {productDetails.lubes === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="lubes.numberOfNozzles"
                                                                    value={nozzleDetail.lubes.numberOfNozzles}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="lubes.tank"
                                                                    value={nozzleDetail.lubes.tank}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                    </Grid>
                                                </>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox />} value={productDetails.alpg} name="alpg"
                                                        onChange={(e) => handleProductDetailsCheckChange(e)} label="ALPG" />
                                                </FormGroup>
                                            </SoftBox>
                                            {productDetails.alpg === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="alpg.numberOfNozzles"
                                                                    value={nozzleDetail.alpg.numberOfNozzles}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="alpg.tank"
                                                                    value={nozzleDetail.alpg.tank}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                    </Grid>
                                                </>
                                            )}
                                        </Grid>


                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox />} value={productDetails.cng} name="cng"
                                                        onChange={(e) => handleProductDetailsCheckChange(e)} label="CNG" />
                                                </FormGroup>
                                            </SoftBox>
                                            {productDetails.cng === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="cng.numberOfNozzles"
                                                                    value={nozzleDetail.cng.numberOfNozzles}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="cng.tank"
                                                                    value={nozzleDetail.cng.tank}
                                                                    onChange={handleProductDetailsChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                    </Grid>

                                                </>
                                            )}
                                        </Grid>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion sx={{ boxShadow: "none" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="banking-details" id="banking-details-header">
                                    Banking Details
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2} px={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>UPI</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="UPI"
                                                    name="upi"
                                                    value={adminDetails.upi}
                                                    onChange={handleBankingDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Card Swipe Machines</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Card Swipe Machines"
                                                    name="cardSwipeMachines"
                                                    value={adminDetails.cardSwipeMachines}
                                                    onChange={handleBankingDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Outlet Banking</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Outlet Banking"
                                                    name="outletBanking"
                                                    value={adminDetails.outletBanking}
                                                    onChange={handleBankingDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion sx={{ boxShadow: "none" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="other-details" id="other-details-header">
                                    Other Details
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2} px={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>GST NO</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="GST No"
                                                    name="gstNo"
                                                    value={adminDetails.gstNo}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Bank Statements</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Bank Statements"
                                                    name="bankStatements"
                                                    value={otherDetails.bankStatements}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2} px={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Tin No</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Tin No"
                                                    name="tinNo"
                                                    value={adminDetails.tinNo}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Lubes</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Lubes"
                                                    name="lubes"
                                                    value={otherDetails.lubes}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2} px={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Peso License</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Peso License"
                                                    name="pesoLicense"
                                                    value={otherDetails.pesoLicense}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Stocks</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Stocks"
                                                    name="stocks"
                                                    value={otherDetails.stocks}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2} px={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Wm Certificate</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Wm Certificate"
                                                    name="wmCertificate"
                                                    value={otherDetails.wmCertificate}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Labour Certificate</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Labour Certificate"
                                                    name="labourCertificate"
                                                    value={otherDetails.labourCertificate}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} px={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Fire Certificate</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Fire Certificate"
                                                    name="fireCertificate"
                                                    value={otherDetails.fireCertificate}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>

                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Tankers Receipts</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Tankers Receipts"
                                                    name="tankersReceipts"
                                                    value={otherDetails.tankersReceipts}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} px={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Trade Certificate</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Trade Certificate"
                                                    name="tradeCertificate"
                                                    value={otherDetails.tradeCertificate}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>panNumber</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Pan Number"
                                                    name="panNumber"
                                                    value={otherDetails.panNumber}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2} px={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Nozzle Reading</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Nozzle Reading"
                                                    name="nozzleReading"
                                                    value={otherDetails.nozzleReading}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Credit Customers</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Credit Customers"
                                                    name="creditCustomers"
                                                    value={otherDetails.creditCustomers}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2} px={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Earthpit Certificate</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Earthpit Certificate"
                                                    name="earthpitCertificate"
                                                    value={otherDetails.earthpitCertificate}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Expenses</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Expenses"
                                                    name="expenses"
                                                    value={otherDetails.expenses}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={2} px={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Daily Sales And Pricing</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Daily Sales And Pricing"
                                                    name="dailySalesAndPricing"
                                                    value={otherDetails.dailySalesAndPricing}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Daily Swipe And Upi Payments</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Daily Swipe And Upi Payments"
                                                    name="dailySwipeAndUpiPayments"
                                                    value={otherDetails.dailySwipeAndUpiPayments}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                    <SoftButton
                        variant="gradient"
                        color={sidenavColor}
                        fullWidth
                        onClick={handleSubmit}>
                        Create Pump
                    </SoftButton>
                </Card>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default AddPump;
