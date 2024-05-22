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
import { Grid} from "@mui/material";
import { getAllBanksAction } from "store/Action/bankAction";
import { updateBankAction } from "store/Action/bankAction";
import { deleteBankAction } from "store/Action/bankAction";
import { getAllPdfAction } from "store/Action/bankAction";
import { getPdfAction } from "store/Action/bankAction";


function Bank() {
    const [controller] = useSoftUIController();
    const { sidenavColor } = controller;
    const [openDown, setOpenDown] = useState(false);
    const [open, setOpen] = useState(false);
    const [bankId, setManagerById ] = useState({});
    console.log("bankId>>>",bankId)
    const [openDel, setOpenDel] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getAllbanks = useSelector((state) => state.banks);
   

    useEffect(() => {
        dispatch(getAllBanksAction());
    }, [dispatch]);


    useEffect(() => {
        console.log("Attendance Data:", getAllbanks);
    }, [getAllbanks]);

    const handleSubmit = () => {
        dispatch(updateBankAction(bankId?._id, bankId))
        handleClose()
    }
    
    const deleteBank = () => {
        dispatch(deleteBankAction(bankId?._id));
        handleCloseDel();
    };

    const DownloadPdf = () => {
        dispatch(getPdfAction(bankId));
        console.log("getpff", getPdfAction);
        handleCloseDown();
    };

    const handleOpenDown = () => setOpenDown(true);
    const handleCloseDown = () => setOpenDown(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenDel = () => setOpenDel(true);
    const handleCloseDel = () => setOpenDel(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setManagerById ({ ...bankId, [name]: value });
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

    const style2 = {
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
        { name: "Name", align: "left", backname: "name" },
        { name: "Type", align: "left", backname: "type" },
        { name: "Category", align: "left", backname: "category" },
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
                            <SoftTypography variant="h6">Bank list</SoftTypography>

                            <SoftButton
                                component="a"
                                variant="gradient"
                                color={sidenavColor}
                                onClick={() => { navigate('/AddBank') }}
                            >
                                Add Bank
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
                        {console.log("getALlBanks------>",getAllbanks)}
                            <Table columns={columns} rows={getAllbanks?.getAllBanks?.data} bankId={bankId} setManagerById ={setManagerById} handleOpenDown={handleOpenDown} handleOpen={handleOpen} handleOpenDel={handleOpenDel}  />                            
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
                <Box sx={style2}>
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
                                        <label style={{ fontSize: "15px" }}>user_id</label>
                                        <SoftInput
                                            type="text"
                                            // placeholder="Enter The "
                                            name="user_id"
                                            value={bankId?.user_id}
                                            onChange={handleInputChange} />
                                    </SoftBox>
                                </Grid>

                                <Grid item xs={6}>
                                    <SoftBox mb={2}>
                                        <label style={{ fontSize: "15px" }}>From Date</label>
                                        <SoftInput
                                            type="date"
                                            // placeholder="Enter The "
                                            name="fromDate"
                                            value={bankId?.fromDate}
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
                                            value={bankId?.toDate}
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
                                        <label style={{ fontSize: "15px" }}>Name</label>
                                        <SoftInput
                                            type="text"
                                            placeholder="Enter The name"
                                            name="name"
                                            value={bankId?.name}
                                            onChange={handleInputChange} />
                                    </SoftBox>
                                </Grid>

                                <Grid item xs={6}>
                                    <SoftBox mb={2}>
                                        <label style={{ fontSize: "15px" }}>Type</label>
                                        <SoftInput
                                            type="text"
                                            placeholder="Type"
                                            name="type"
                                            value={bankId?.type}
                                            onChange={handleInputChange} />
                                    </SoftBox>
                                </Grid>

                                <Grid item xs={6}>
                                    <SoftBox mb={2}>
                                        <label style={{ fontSize: "15px" }}>Category</label>
                                        <SoftInput
                                            type="text"
                                            placeholder="Category"
                                            name="category"
                                            value={bankId?.category}
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
                        Update Bank
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
                        Are you sure you want to delete this Bank?
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
                            onClick={deleteBank}
                        >
                            Delete
                        </SoftButton>
                    </div>
                </Box>
            </Modal>


        </DashboardLayout >
    );
}
export default Bank;