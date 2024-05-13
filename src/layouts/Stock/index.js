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
import { getAllCategoryAction } from "store/Action/categoryAction";
import { updateCategoryAction } from "store/Action/categoryAction";
import { getAllStockAction } from "store/Action/stockAction";



function Stock() {
    const [controller] = useSoftUIController();
    const { miniSidenav, sidenavColor } = controller;
    const [openDown, setOpenDown] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [mangerById, setManagerById] = useState();
    const [openDel, setOpenDel] = useState(false);
    const handleOpenDown = () => setOpenDown(true);
    const handleCloseDown = () => setOpenDown(false);
    const handleOpenDel = () => setOpenDel(true);
    const handleCloseDel = () => setOpenDel(false);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const getAllStock = useSelector((state) => state.stock);
    console.log("getAllStock", getAllStock);

    useEffect(() => {
        dispatch(getAllStockAction())
    }, [dispatch])


    // const handleSubmit = () => {
    //     dispatch(updateNozzlesAction(mangerById?._id, mangerById))
    //     handleClose()
    // }


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

    const style1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        borderRadius: "10px",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        maxHeight: "80vh"
    };

    const columns = [
        { name: "Stock Date", align: "left", backname: "stockDate" },
        { name: "user ID", align: "left", backname: "userId" },
        // { name: "Client Industry", align: "left", backname: "clientindustry" },
        // { name: "Pump Id", align: "center", backname: "pumpId" },
        { name: "Category Id", align: "center", backname: "categoryId" },
        { name: "", align: "right", backname: "EditButtonNoz", width: "1px" },
        { name: "", align: "right", backname: "delBtn", width: "1px" },
        { name: "", align: "right", backname: "DownloadButton", width: "1px" },


    ];

    // const deleteNozzles = () => {
    //     dispatch(deleteNozzlesAction(mangerById?._id))
    //     handleCloseDel()
    // }
    const pumpList = useSelector(state => state.pump);
    useEffect(() => {
        dispatch(getAllPumpAction())
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setManagerById({ ...mangerById, [name]: value });
    };

    const DownloadPdf = () => {
        // dispatch(getNozzlePdfAction(mangerById?._id));
        // console.log("getpff", mangerById);
        handleCloseDown();
    };
    const handleChange = () => {

    }
    const categoryList = useSelector(state => state.category);
    useEffect(() => {
        dispatch(getAllCategoryAction())
    }, []);
    return (

        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3} sx={{ minHeight: "80vh" }}>
                <SoftBox mb={3}>
                    <Card>
                        <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <SoftTypography variant="h6">Stock list</SoftTypography>
                            <SoftButton
                                component="a"
                                variant="gradient"
                                color={sidenavColor}
                                onClick={() => { navigate('/addStock') }}
                            >
                                Add STOCK
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
                            <Table columns={columns} rows={getAllStock?.getAllStock?.data} mangerById={mangerById} setManagerById={setManagerById} handleOpenDown={handleOpenDown} handleOpen={handleOpen} handleOpenDel={handleOpenDel} />
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
                <Box sx={style1}>
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
                            <Grid container spacing={2} px={2}>
                                <Grid item xs={6}>
                                    <SoftBox mb={2}>
                                        <label style={{ fontSize: "15px" }}>Stock Date</label>
                                        <SoftInput
                                            type="text"
                                            placeholder="Description"
                                            name="stockDate"
                                            value={mangerById?.stockDate}
                                            onChange={handleInputChange} />
                                    </SoftBox>
                                </Grid>

                                <Grid item xs={6}>
                                    <SoftBox mb={2}>
                                        <label style={{ fontSize: "15px" }}>User ID</label>
                                        <SoftInput
                                            type="text"
                                            placeholder="Number Of Nozzles"
                                            name="userId"
                                            value={mangerById?.userId}
                                            onChange={handleInputChange} />
                                    </SoftBox>
                                </Grid>

                                <Grid item xs={12}>
                                    <SoftBox mb={2}>
                                        <label style={{ fontSize: "15px" }}>Select Pump</label>
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={mangerById?.pumpId}
                                                onChange={(e) => { handleInputChange(e) }}
                                                name="managerId"
                                            >
                                                {pumpList?.getAllPump?.data?.map((res) => {
                                                    return (
                                                        <MenuItem value={res?._id}>{res?.outletName}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    </SoftBox>

                                </Grid>


                                <Grid item xs={12}>
                                    <SoftBox mb={2}>
                                        <label style={{ fontSize: "15px" }}>Select Category</label>
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={mangerById?.categoryId}
                                                onChange={(e) => { handleChange(e) }}
                                                name="categoryId"
                                            >
                                                {categoryList?.getAllCategory?.data?.map((res) => {
                                                    return (
                                                        <MenuItem value={res?._id}>{res?.title}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    </SoftBox>
                                </Grid>


                            </Grid>
                        </Grid>

                    </Grid>
                    {/* <SoftButton
                        variant="gradient"
                        color={sidenavColor}
                        fullWidth
                        onClick={handleSubmit}
                    >
                        Update Nozzles
                    </SoftButton> */}

                </Box>
            </Modal>

            <Modal
                open={openDel}
                onClose={handleCloseDel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style1}>
                    <div style={{ display: "flex", justifyContent: "end", width: "100%" }} >
                        <IoClose style={{ backgroundColor: "#DEDBD7", padding: "3px", borderRadius: "2px" }} onClick={handleCloseDel} />
                    </div>


                    <p style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
                        Are you sure you want to delete this Nozzles?
                    </p>

                    {/* <div style={{ display: "flex", justifyContent: "center" }}>
                        <SoftButton component='a'
                            variant="gradient"
                            color={"secondary"}
                            onClick={handleCloseDel}>
                            Cancel
                        </SoftButton>
                        <SoftButton component='a'
                            variant="gradient"
                            color={"error"}
                            sx={{ marginLeft: "30px" }}
                            onClick={deleteNozzles}>

                            Delete
                        </SoftButton>
                    </div> */}

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

export default Stock;
