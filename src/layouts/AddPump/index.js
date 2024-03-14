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


const AddPump = () => {
    const [controller] = useSoftUIController();
    const { miniSidenav, sidenavColor } = controller;
    const [submitted, setSubmitted] = useState(1);
    const navigate = useNavigate()
    const dispatch = useDispatch();

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
        managerEmail: ""
    });

    const [productDetails, setProductDetails] = useState({
        ms: false,
        hsd: false,
        msPremium: false,
        hsdPremium: false,
        lubes: true,
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
        "alpgCng": {
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
        adminId : "60f799a8c877780012345678",
        managerId : "65b12aa3b8019e44c07621e2",
        "products": productDetails,
        "nozzleDetail": nozzleDetail ,
        "bankingDetails": bankingDetails ,
        "otherDetails" : otherDetails


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
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="admin-details" id="admin-details-header">
                                    Admin Details
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        {/* Admin Details Inputs */}

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Outlet Name</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Email"
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
                                                    placeholder="address"
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
                                                    placeholder="oilCompany"
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
                                                    placeholder="cmsCode"
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
                                                    placeholder="dealerName"
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
                                                    placeholder="dealerContact"
                                                    name="dealerContact"
                                                    value={adminDetails.dealerContact}
                                                    onChange={handleAdminDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="product-details" id="product-details-header">
                                    Product Details
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        {/* Product Details Inputs */}

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>MS</label>
                                                <input
                                                    type="checkbox"
                                                    value={productDetails.ms}
                                                    name="ms"
                                                    onChange={(e) => handleProductDetailsCheckChange(e)}
                                                />
                                            </SoftBox>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>hsd</label>
                                                <input
                                                    type="checkbox"
                                                    value={productDetails.hsd}
                                                    name="hsd"
                                                    onChange={(e) => handleProductDetailsCheckChange(e)}
                                                />
                                            </SoftBox>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>msPremium</label>
                                                <input
                                                    type="checkbox"
                                                    value={productDetails.msPremium}
                                                    name="msPremium"
                                                    onChange={(e) => handleProductDetailsCheckChange(e)}
                                                />
                                            </SoftBox>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>hsdPremium</label>
                                                <input
                                                    type="checkbox"
                                                    value={productDetails.hsdPremium}
                                                    name="hsdPremium"
                                                    onChange={(e) => handleProductDetailsCheckChange(e)}
                                                />
                                            </SoftBox>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>alpgCng</label>
                                                <input
                                                    type="checkbox"
                                                    value={productDetails.alpgCng}
                                                    name="alpgCng"
                                                    onChange={(e) => handleProductDetailsCheckChange(e)}
                                                />
                                            </SoftBox>

                                            {productDetails.ms === true && (
                                                <>
                                                    <SoftBox mb={2}>
                                                        <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                        <input
                                                            type="number"
                                                            name="ms.numberOfNozzles"
                                                            value={nozzleDetail.ms.numberOfNozzles}
                                                            onChange={handleProductDetailsChange}
                                                        />
                                                    </SoftBox>
                                                    <SoftBox mb={2}>
                                                        <label style={{ fontSize: "15px" }}>Tank</label>
                                                        <input
                                                            type="number"
                                                            name="ms.tank"
                                                            value={nozzleDetail.ms.tank}
                                                            onChange={handleProductDetailsChange}
                                                        />
                                                    </SoftBox>
                                                </>
                                            )}

                                            {productDetails.hsd === true && (
                                                <>
                                                    <SoftBox mb={2}>
                                                        <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                        <input
                                                            type="number"
                                                            name="hsd.numberOfNozzles"
                                                            value={nozzleDetail.hsd.numberOfNozzles}
                                                            onChange={handleProductDetailsChange}
                                                        />
                                                    </SoftBox>
                                                    <SoftBox mb={2}>
                                                        <label style={{ fontSize: "15px" }}>Tank</label>
                                                        <input
                                                            type="number"
                                                            name="hsd.tank"
                                                            value={nozzleDetail.hsd.tank}
                                                            onChange={handleProductDetailsChange}
                                                        />
                                                    </SoftBox>
                                                </>
                                            )}

                                            {productDetails.msPremium === true && (
                                                <>
                                                    <SoftBox mb={2}>
                                                        <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                        <input
                                                            type="number"
                                                            name="msPremium.numberOfNozzles"
                                                            value={nozzleDetail.msPremium.numberOfNozzles}
                                                            onChange={handleProductDetailsChange}
                                                        />
                                                    </SoftBox>
                                                    <SoftBox mb={2}>
                                                        <label style={{ fontSize: "15px" }}>Tank</label>
                                                        <input
                                                            type="number"
                                                            name="msPremium.tank"
                                                            value={nozzleDetail.msPremium.tank}
                                                            onChange={handleProductDetailsChange}
                                                        />
                                                    </SoftBox>
                                                </>
                                            )}
                                              {productDetails.hsdPremium === true && (
                                                <>
                                                    <SoftBox mb={2}>
                                                        <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                        <input
                                                            type="number"
                                                            name="hsdPremium.numberOfNozzles"
                                                            value={nozzleDetail.hsdPremium.numberOfNozzles}
                                                            onChange={handleProductDetailsChange}
                                                        />
                                                    </SoftBox>
                                                    <SoftBox mb={2}>
                                                        <label style={{ fontSize: "15px" }}>Tank</label>
                                                        <input
                                                            type="number"
                                                            name="hsdPremium.tank"
                                                            value={nozzleDetail.hsdPremium.tank}
                                                            onChange={handleProductDetailsChange}
                                                        />
                                                    </SoftBox>
                                                </>
                                            )}
                                             {productDetails.alpgCng === true && (
                                                <>
                                                    <SoftBox mb={2}>
                                                        <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                        <input
                                                            type="number"
                                                            name="alpgCng.numberOfNozzles"
                                                            value={nozzleDetail.alpgCng.numberOfNozzles}
                                                            onChange={handleProductDetailsChange}
                                                        />
                                                    </SoftBox>
                                                    <SoftBox mb={2}>
                                                        <label style={{ fontSize: "15px" }}>Tank</label>
                                                        <input
                                                            type="number"
                                                            name="alpgCng.tank"
                                                            value={nozzleDetail.alpgCng.tank}
                                                            onChange={handleProductDetailsChange}
                                                        />
                                                    </SoftBox>
                                                </>
                                            )}
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="banking-details" id="banking-details-header">
                                    Banking Details
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>UPI</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="upi"
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
                                                    placeholder="cardSwipeMachines"
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
                                                    placeholder="outletBanking"
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
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="other-details" id="other-details-header">
                                    Other Details
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>GST NO</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="gstNo"
                                                    name="gstNo"
                                                    value={adminDetails.gstNo}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Tin No</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="tinNo"
                                                    name="tinNo"
                                                    value={adminDetails.tinNo}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Peso License</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="pesoLicense"
                                                    name="pesoLicense"
                                                    value={adminDetails.pesoLicense}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Wm Certificate</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="wmCertificate"
                                                    name="wmCertificate"
                                                    value={adminDetails.wmCertificate}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Fire Certificate</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="fireCertificate"
                                                    name="fireCertificate"
                                                    value={adminDetails.fireCertificate}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Trade Certificate</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="tradeCertificate"
                                                    name="tradeCertificate"
                                                    value={adminDetails.tradeCertificate}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Nozzle Reading</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="nozzleReading"
                                                    name="nozzleReading"
                                                    value={adminDetails.nozzleReading}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Earthpit Certificate</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="earthpitCertificate"
                                                    name="earthpitCertificate"
                                                    value={adminDetails.earthpitCertificate}
                                                    onChange={handleOtherDetailsChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                    <SoftButton

                        variant="outlined"
                        color={sidenavColor}
                        fullWidth
                        onClick={handleSubmit}>
                        Submit
                    </SoftButton>
                </Card>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default AddPump;
