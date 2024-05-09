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
import { getAllTransactionAction } from "store/Action/transactionAction";



function Transaction() {
    const [controller] = useSoftUIController();
    const { sidenavColor } = controller;
    const [open, setOpen] = useState(false);
    const [transactionId, setManagerById] = useState({});
    const [openDel, setOpenDel] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getAllTransaction = useSelector((state) => state.transaction);

    
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenDel = () => setOpenDel(true);
    const handleCloseDel = () => setOpenDel(false);
    
    useEffect(() => {
        dispatch(getAllTransactionAction());
    }, [dispatch]);


    useEffect(() => {
        console.log("transaction Data:", getAllTransaction);
    }, [getAllTransaction]);
    
    // const handleSubmit = () => {
    //     dispatch(updateCreditsAction(creditsId?._id, creditsId));
    //     handleClose()
    // }
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setManagerById({ ...creditsId, [name]: value });
    // };

    // const deleteCredits = () => {
    //     dispatch(deleteCreditsAction(creditsId?._id));
    //     handleCloseDel();
    // };

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
        { name: "Name", align: "left", backname: "customerName" },
        { name: "Transaction_title", align: "left", backname: "transaction_title" },
        { name: "Amount", align: "left", backname: "amount" },
        { name: "Type", align: "left", backname: "type" },
        // { name: "", align: "right", backname: "EditButtonNoz", width: "1px" },
        // { name: "", align: "right", backname: "delBtn", width: "1px" }

    ];
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3} sx={{ minHeight: "80vh" }}>
                <SoftBox mb={3}>
                    <Card>
                        <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <SoftTypography variant="h6">Transaction List</SoftTypography>

                            <SoftButton
                                component="a"
                                variant="gradient"
                                color={sidenavColor}
                                onClick={() => { navigate('/addtransaction') }}
                            >
                                Add Credits
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
                            {console.log("getAllTransaction------>", getAllTransaction)}
                            <Table columns={columns} rows={getAllTransaction?.getAllTransaction?.data} transactionId={transactionId} setManagerById={setManagerById}  handleOpen={handleOpen} handleOpenDel={handleOpenDel} />
                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
            <Footer />
{/* 
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
                                            value={creditsId?.name}
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
                                            value={creditsId?.category}
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
                        Update Credits
                    </SoftButton>
                </Box>
            </Modal> */}

            {/* <Modal
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
                            onClick={deleteCredits}
                        >
                            Delete
                        </SoftButton>
                    </div>
                </Box>
            </Modal> */}
        </DashboardLayout >
    );
}
export default Transaction;