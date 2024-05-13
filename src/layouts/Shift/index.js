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

import { useNavigate } from "react-router-dom";
import { useSoftUIController } from "context";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import SoftInput from "components/SoftInput";
import { IoClose } from "react-icons/io5";
import { Grid } from "@mui/material";
// import { getAllCreditsAction, updateCreditsAction, deleteCreditsAction } from "store/Action/creditsAction";
import { updateShiftAction } from "store/Action/shiftAction";
import { getAllShiftAction } from "store/Action/shiftAction";
import { deleteShiftAction } from "store/Action/shiftAction";
import { getShiftPdfAction } from "store/Action/shiftAction";



function Shift() {
    const [controller] = useSoftUIController();
    const { sidenavColor } = controller;
    const [open, setOpen] = useState(false);
    const [openDown, setOpenDown] = useState(false);
    const [shiftId, setManagerById] = useState({});
    const [openDel, setOpenDel] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getAllShift = useSelector((state) => state.shift);


    const handleOpenDown = () => setOpenDown(true);
    const handleCloseDown = () => setOpenDown(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenDel = () => setOpenDel(true);
    const handleCloseDel = () => setOpenDel(false);

    useEffect(() => {
        dispatch(getAllShiftAction());
    }, [dispatch]);


    useEffect(() => {
        console.log("shift Data:", shiftId);
    }, [getAllShift]);

    const handleSubmit = () => {
        dispatch(updateShiftAction(shiftId?._id, shiftId));
        handleClose()
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setManagerById({ ...shiftId, [name]: value });
    };

    const DownloadPdf = () => {
        dispatch(getShiftPdfAction(shiftId?._id));
        handleCloseDown();
    }

    const deleteTransaction = () => {
        dispatch(deleteShiftAction(shiftId?._id));
        handleCloseDel();
    };

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
        { name: "Slip Number", align: "left", backname: "slipNumber" },
        { name: "Quentity", align: "left", backname: "quantity" },
        { name: "shift In Charge", align: "left", backname: "shiftInCharge" },
        { name: "", align: "right", backname: "EditButtonNoz", width: "1px" },
        { name: "", align: "right", backname: "delBtn", width: "1px" },
        { name: "", align: "right", backname: "DownloadButton", width: "1px" },


    ];
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3} sx={{ minHeight: "80vh" }}>
                <SoftBox mb={3}>
                    <Card>
                        <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <SoftTypography variant="h6">Shift List</SoftTypography>

                            <SoftButton
                                component="a"
                                variant="gradient"
                                color={sidenavColor}
                                onClick={() => { navigate('/addshift') }}
                            >
                                Add Shift
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
                            {console.log("getAllTransaction------>", getAllShift)}
                            <Table columns={columns} rows={getAllShift?.getAllShift?.data} shiftId={shiftId} setManagerById={setManagerById} handleOpenDown={handleOpenDown} handleOpen={handleOpen} handleOpenDel={handleOpenDel} />
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
                                            value={shiftId?.date}
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
                                        <label style={{ fontSize: "15px" }}>Slip Number</label>
                                        <SoftInput
                                            type="text"
                                            placeholder="slipNumber"
                                            name="slipNumber"
                                            value={shiftId?.slipNumber}
                                            onChange={handleInputChange} />
                                    </SoftBox>
                                </Grid>

                                <Grid item xs={6}>
                                    <SoftBox mb={2}>
                                        <label style={{ fontSize: "15px" }}>Quantity</label>
                                        <SoftInput
                                            type="text"
                                            placeholder="Category"
                                            name="quantity"
                                            value={shiftId?.quantity}
                                            onChange={handleInputChange} />
                                    </SoftBox>
                                </Grid>

                                <Grid item xs={6}>
                                    <SoftBox mb={2}>
                                        <label style={{ fontSize: "15px" }}>Shift In Charge</label>
                                        <SoftInput
                                            type="text"
                                            placeholder="Category"
                                            name="shiftInCharge"
                                            value={shiftId?.shiftInCharge}
                                            onChange={handleInputChange} />
                                    </SoftBox>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>
                    <SoftButton
                        variant="gradient"
                        color={sidenavColor}
                        fullWidth
                        onClick={handleSubmit}
                    >
                        Update Shift
                    </SoftButton>
                </Box>
            </Modal>

            <Modal
                open={openDel}
                onClose={handleCloseDel}
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
                            onClick={handleCloseDel}
                        />
                    </div>

                    <p
                        style={{
                            textAlign: "center",
                            marginTop: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        Are you sure you want to delete this Category?
                    </p>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <SoftButton
                            component="a"
                            variant="gradient"
                            color={"secondary"}
                            onClick={handleCloseDel}
                        >
                            Cancel
                        </SoftButton>
                        <SoftButton
                            component="a"
                            variant="gradient"
                            color={"error"}
                            sx={{ marginLeft: "30px" }}
                            onClick={deleteTransaction}
                        >
                            Delete
                        </SoftButton>
                    </div>
                </Box>
            </Modal>
        </DashboardLayout >
    );
}
export default Shift;