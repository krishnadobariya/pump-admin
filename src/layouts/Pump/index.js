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
import Card from "@mui/material/Card";

// Pmate components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
// Pmate examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import EditManagerModal from "layouts/EditManager/index"
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import projectsTableData from "layouts/tables/data/projectsTableData";

import { useNavigate } from "react-router-dom";

import { useSoftUIController } from "context";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllManagerAction } from "store/Action/managerAction";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, MenuItem, Select } from "@mui/material";
import SoftInput from "components/SoftInput";
import { getAllPumpAction } from "store/Action/pumpAction";
import { Close, ExpandMore } from "@mui/icons-material";
import { updatePumpAction } from "store/Action/pumpAction";
import SoftAlertCloseIcon from "components/SoftAlert/SoftAlertCloseIcon";
import { IoClose } from "react-icons/io5";


function Pump() {
    const [controller] = useSoftUIController();
    const { miniSidenav, sidenavColor } = controller;
    const [open, setOpen] = useState(false);
    const [openDown, setOpenDown] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [mangerById, setManagerById] = useState();
    const handleOpenDown = () => setOpenDown(true);
    const handleCloseDown = () => setOpenDown(false);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const getAllPump = useSelector((state) => state.pump);


    useEffect(() => {
        dispatch(getAllPumpAction())
    }, [dispatch])


    const handleSubmit = () => {
        dispatch(updatePumpAction(mangerById?._id, mangerById))
    }

    const DownloadPdf = () => {
        // dispatch(getNozzlePdfAction(mangerById?._id));
        // console.log("getpff", mangerById);
        handleCloseDown();
    }


    console.log("mangerByIdmangerByIdmangerById", mangerById);

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
        maxHeight: "80vh", overflowY: "scroll"
    };


    const columns = [
        { name: "Manager Name", align: "left", backname: "managerName" },
        // { name: "Client Industry", align: "left", backname: "clientindustry" },
        { name: "Manager Email", align: "left", backname: "managerEmail" },
        { name: "Manager Contact", align: "center", backname: "managerContact" },
        { name: "Dealer Name", align: "center", backname: "dealerName" },
        { name: "Dealer Email", align: "center", backname: "dealerEmail" },
        { name: "Dealer Contact", align: "center", backname: "dealerContact" },
        { name: "Address", align: "center", backname: "address" },
        { name: "Outlet Name", align: "center", backname: "outletName" },
        { name: "", align: "right", backname: "EditButton" },
        { name: "", align: "right", backname: "DownloadButton", width: "1px" },


    ];
    const handleFormChange = (section, name, value) => {
        console.log("Form Change:", section, name, value);
        if (name == undefined) {
            setManagerById(prevState => ({
                ...prevState,
                [section]: value
            }));
        } else {
            setManagerById(prevState => ({
                ...prevState,
                [section]: {
                    ...prevState[section],
                    [name]: value
                }
            }));
        }

    };

    const managerList = useSelector(state => state.manager);
    console.log("managerList", managerList);
    useEffect(() => {
        dispatch(getAllManagerAction())
    }, []);

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;

        const inputValue = e.target.type === 'checkbox' ? checked : value;
        console.log("Input Change:", inputValue);
        const [section, field] = name.split('.');
        handleFormChange(section, field, inputValue);
    };
    return (

        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3} sx={{ minHeight: "80vh" }}>
                <SoftBox mb={3}>
                    <Card>
                        <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <SoftTypography variant="h6">Pump list</SoftTypography>
                            <SoftButton
                                component="a"
                                variant="gradient"
                                color={sidenavColor}
                                onClick={() => { navigate('/addpump') }}
                            >
                                Add Pump
                            </SoftButton>
                        </SoftBox>

                        <SoftBox
                            sx={{
                                "& .MuiTableRow-root:not(:last-child)": {
                                    "& td": {
                                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                                            `${borderWidth[1]} solid ${borderColor}`,
                                    },
                                },
                            }}
                        >
                            <Table columns={columns} rows={getAllPump?.getAllPump?.data} mangerById={mangerById} handleOpenDown={handleOpenDown} setManagerById={setManagerById} handleOpen={handleOpen} />
                        </SoftBox>
                    </Card>
                </SoftBox>

            </SoftBox>
            <Footer />

            <Modal
                open={openDown}
                onClose={handleCloseDown}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div
                        style={{ display: "flex", justifyContent: "end", width: "100%" }}
                    >
                        <IoClose
                            style={{
                                backgroundColor: "#DEDBD7",
                                padding: "3px",
                                borderRadius: "2px",
                            }}
                            onClick={handleCloseDown}
                        />
                    </div>
                    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                        <Grid item xs={12}>
                            <Grid container spacing={2} px={2}>
                                <Grid item xs={6}>
                                    <SoftBox mb={2}>
                                        <label style={{ fontSize: "15px" }}>From Date</label>
                                        <SoftInput
                                            type="date"
                                            name="fromDate"
                                            value={mangerById?.fromDate}
                                            onChange={handleInputChange} />
                                    </SoftBox>
                                </Grid>

                                <Grid item xs={6}>
                                    <SoftBox mb={2}>
                                        <label style={{ fontSize: "15px" }}>To Date</label>
                                        <SoftInput
                                            type="date"
                                            // placeholder="Type"
                                            name="toDate"
                                            value={mangerById?.toDate}
                                            onChange={handleInputChange} />
                                    </SoftBox>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <SoftButton
                            component="a"
                            variant="gradient"
                            color={"secondary"}
                            onClick={handleCloseDown}
                        >
                            Cancel
                        </SoftButton>
                        <SoftButton
                            component="a"
                            variant="gradient"
                            color={"error"}
                            sx={{ marginLeft: "30px" }}
                            onClick={DownloadPdf}
                        >
                            Download
                        </SoftButton>
                    </div>
                </Box>
            </Modal>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <div style={{ display: "flex", justifyContent: "end", width: "100%" }} >
                        <IoClose style={{ backgroundColor: "#DEDBD7", padding: "3px", borderRadius: "2px" }} onClick={handleClose} />
                    </div>

                    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                        <Grid item xs={12}>
                            <Accordion defaultExpanded sx={{ boxShadow: "none" }}>
                                <AccordionSummary expandIcon={<ExpandMore />} sx={{ fontSize: "20px" }} aria-controls="admin-details" id="admin-details-header">
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
                                                    value={mangerById?.outletName}
                                                    onChange={handleInputChange} />
                                            </SoftBox>


                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Address</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Address"
                                                    name="address"
                                                    value={mangerById?.address}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Oil Company</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Oil Company"
                                                    name="oilCompany"
                                                    value={mangerById?.oilCompany}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Cms Code</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Cms Code"
                                                    name="cmsCode"
                                                    value={mangerById?.cmsCode}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Dealer Name</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Dealer Name"
                                                    name="dealerName"
                                                    value={mangerById?.dealerName}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Dealer Contact</label>
                                                <SoftInput
                                                    type="number"
                                                    placeholder="Dealer Contact"
                                                    name="dealerContact"
                                                    value={mangerById?.dealerContact}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Dealer Email</label>
                                                <SoftInput
                                                    type="email"
                                                    placeholder="Dealer Email"
                                                    name="dealerEmail"
                                                    value={mangerById?.dealerEmail}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Manager Name</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Manager Name"
                                                    name="managerName"
                                                    value={mangerById?.managerName}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Manager Contact</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Manager Contact"
                                                    name="managerContact"
                                                    value={mangerById?.managerContact}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Manager Email</label>
                                                <SoftInput
                                                    type="email"
                                                    placeholder="Manager Email"
                                                    name="managerEmail"
                                                    value={mangerById?.managerEmail}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Select Manager</label>
                                                <FormControl fullWidth>
                                                    {console.log("mangerById?.managerIdmangerById?.managerId", mangerById?.managerId)}
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={mangerById?.managerId}
                                                        onChange={(e) => { handleInputChange(e) }}
                                                        name="managerId"
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
                                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="product-details" id="product-details-header">
                                    Product Details
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={1} px={3}>
                                        {/* Product Details Inputs */}

                                        <Grid item xs={12}>
                                            <SoftBox mb={2}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox checked={mangerById?.products?.ms} />} value={mangerById?.products?.ms} name="products.ms"
                                                        onChange={(e) => handleInputChange(e)} label="MS" />
                                                </FormGroup>
                                            </SoftBox>

                                            {mangerById?.products?.ms === true && (
                                                <>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.ms.numberOfNozzles"
                                                                    value={mangerById?.nozzleDetail?.ms?.numberOfNozzles}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.ms.tank"
                                                                    value={mangerById?.nozzleDetail.ms.tank}
                                                                    onChange={handleInputChange}
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
                                                    <FormControlLabel control={<Checkbox checked={mangerById?.products?.hsd} />} value={mangerById?.products?.hsd} name="products.hsd"
                                                        onChange={(e) => handleInputChange(e)} label="HSD" />
                                                </FormGroup>
                                            </SoftBox>
                                            {mangerById?.products?.hsd === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.hsd.numberOfNozzles"
                                                                    value={mangerById?.nozzleDetail.hsd.numberOfNozzles}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.hsd.tank"
                                                                    value={mangerById?.nozzleDetail.hsd.tank}
                                                                    onChange={handleInputChange}
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
                                                    <FormControlLabel control={<Checkbox checked={mangerById?.products?.msPremium} />} value={mangerById?.products?.msPremium}
                                                        name="products.msPremium"
                                                        onChange={(e) => handleInputChange(e)} label="Ms Premium" />
                                                </FormGroup>
                                            </SoftBox>

                                            {mangerById?.products?.msPremium === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.msPremium.numberOfNozzles"
                                                                    value={mangerById?.nozzleDetail.msPremium.numberOfNozzles}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.msPremium.tank"
                                                                    value={mangerById?.nozzleDetail.msPremium.tank}
                                                                    onChange={handleInputChange}
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
                                                    <FormControlLabel control={<Checkbox checked={mangerById?.products?.hsdPremium} />} value={mangerById?.products?.hsdPremium}
                                                        name="products.hsdPremium"
                                                        onChange={(e) => handleInputChange(e)} label="Hsd Premium" />
                                                </FormGroup>
                                            </SoftBox>
                                            {mangerById?.products?.hsdPremium === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.hsdPremium.numberOfNozzles"
                                                                    value={mangerById?.nozzleDetail.hsdPremium.numberOfNozzles}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.hsdPremium.tank"
                                                                    value={mangerById?.nozzleDetail.hsdPremium.tank}
                                                                    onChange={handleInputChange}
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
                                                    <FormControlLabel control={<Checkbox checked={mangerById?.products?.lubes} />} value={mangerById?.products?.lubes} name="products.lubes"
                                                        onChange={(e) => handleInputChange(e)} label="Lubes" />
                                                </FormGroup>
                                            </SoftBox>
                                            {mangerById?.products?.lubes === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.lubes.numberOfNozzles"
                                                                    value={mangerById?.nozzleDetail?.lubes?.numberOfNozzles}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.lubes.tank"
                                                                    value={mangerById?.nozzleDetail.lubes?.tank}
                                                                    onChange={handleInputChange}
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
                                                    <FormControlLabel control={<Checkbox checked={mangerById?.products?.alpg} />} value={mangerById?.products?.alpg} name="products.alpg"
                                                        onChange={(e) => handleInputChange(e)} label="ALPG" />
                                                </FormGroup>
                                            </SoftBox>
                                            {mangerById?.products?.alpg === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.alpg.numberOfNozzles"
                                                                    value={mangerById?.nozzleDetail.alpg.numberOfNozzles}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.alpg.tank"
                                                                    value={mangerById?.nozzleDetail.alpg.tank}
                                                                    onChange={handleInputChange}
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
                                                    <FormControlLabel control={<Checkbox value={mangerById?.products?.cng} />} value={mangerById?.products?.cng} name="products.cng"
                                                        onChange={(e) => handleInputChange(e)} label="CNG" />
                                                </FormGroup>
                                            </SoftBox>
                                            {mangerById?.products?.cng === true && (
                                                <>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Number of Nozzles</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.cng.numberOfNozzles"
                                                                    value={mangerById?.nozzleDetail.cng.numberOfNozzles}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </SoftBox>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <SoftBox mb={2}>
                                                                <label style={{ fontSize: "15px" }}>Tank</label>
                                                                <SoftInput
                                                                    type="number"
                                                                    name="nozzleDetail.cng.tank"
                                                                    value={mangerById?.nozzleDetail.cng.tank}
                                                                    onChange={handleInputChange}
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
                                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="banking-details" id="banking-details-header">
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
                                                    name="bankingDetails.upi"
                                                    value={mangerById?.bankingDetails?.upi}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Card Swipe Machines</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Card Swipe Machines"
                                                    name="bankingDetails.cardSwipeMachines"
                                                    value={mangerById?.bankingDetails?.cardSwipeMachines}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Outlet Banking</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Outlet Banking"
                                                    name="bankingDetails.outletBanking"
                                                    value={mangerById?.bankingDetails?.outletBanking}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion sx={{ boxShadow: "none" }}>
                                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="other-details" id="other-details-header">
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
                                                    name="otherDetails.gstNo"
                                                    value={mangerById?.otherDetails?.gstNo}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Bank Statements</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Bank Statements"
                                                    name="otherDetails.bankStatements"
                                                    value={mangerById?.otherDetails?.bankStatements}
                                                    onChange={handleInputChange} />
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
                                                    name="otherDetails.tinNo"
                                                    value={mangerById?.otherDetails?.tinNo}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Lubes</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Lubes"
                                                    name="otherDetails.lubes"
                                                    value={mangerById?.otherDetails?.lubes}
                                                    onChange={handleInputChange} />
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
                                                    name="otherDetails.pesoLicense"
                                                    value={mangerById?.otherDetails?.pesoLicense}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Stocks</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Stocks"
                                                    name="otherDetails.stocks"
                                                    value={mangerById?.otherDetails?.stocks}
                                                    onChange={handleInputChange} />
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
                                                    name="otherDetails.wmCertificate"
                                                    value={mangerById?.otherDetails?.wmCertificate}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Labour Certificate</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Labour Certificate"
                                                    name="otherDetails.labourCertificate"
                                                    value={mangerById?.otherDetails?.labourCertificate}
                                                    onChange={handleInputChange} />
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
                                                    name="otherDetails.fireCertificate"
                                                    value={mangerById?.otherDetails?.fireCertificate}
                                                    onChange={handleInputChange} />
                                            </SoftBox>

                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Tankers Receipts</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Tankers Receipts"
                                                    name="otherDetails.tankersReceipts"
                                                    value={mangerById?.otherDetails?.tankersReceipts}
                                                    onChange={handleInputChange} />
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
                                                    name="otherDetails.tradeCertificate"
                                                    value={mangerById?.otherDetails?.tradeCertificate}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>panNumber</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Pan Number"
                                                    name="otherDetails.panNumber"
                                                    value={mangerById?.otherDetails?.panNumber}
                                                    onChange={handleInputChange} />
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
                                                    name="otherDetails.nozzleReading"
                                                    value={mangerById?.otherDetails?.nozzleReading}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Credit Customers</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Credit Customers"
                                                    name="otherDetails.creditCustomers"
                                                    value={mangerById?.otherDetails?.creditCustomers}
                                                    onChange={handleInputChange} />
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
                                                    name="otherDetails.earthpitCertificate"
                                                    value={mangerById?.otherDetails?.earthpitCertificate}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Expenses</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Expenses"
                                                    name="otherDetails.expenses"
                                                    value={mangerById?.otherDetails?.expenses}
                                                    onChange={handleInputChange} />
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
                                                    name="otherDetails.dailySalesAndPricing"
                                                    value={mangerById?.otherDetails?.dailySalesAndPricing}
                                                    onChange={handleInputChange} />
                                            </SoftBox>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SoftBox mb={2}>
                                                <label style={{ fontSize: "15px" }}>Daily Swipe And Upi Payments</label>
                                                <SoftInput
                                                    type="text"
                                                    placeholder="Daily Swipe And Upi Payments"
                                                    name="otherDetails.dailySwipeAndUpiPayments"
                                                    value={mangerById?.otherDetails?.dailySwipeAndUpiPayments}
                                                    onChange={handleInputChange} />
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
                        onClick={handleSubmit}
                    >
                        Update Pump
                    </SoftButton>

                </Box>
            </Modal>
            {/* <EditManagerModal
        isOpen={editModalOpen}
        onClose={handleEditModalClose}
        managerData={editModalData}
        onSave={handleSaveChanges}
      /> */}
        </DashboardLayout >
    );
}

export default Pump;
