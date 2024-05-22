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



import { useNavigate } from "react-router-dom";

import { useSoftUIController } from "context";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllExpensesAction,
  updateExpensesAction,
  deleteExpenseAction,
} from "store/Action/expenseAction";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Grid,
} from "@mui/material";
import SoftInput from "components/SoftInput";
import { Close, ExpandMore } from "@mui/icons-material";
import { updatePumpAction } from "store/Action/pumpAction";
import SoftAlertCloseIcon from "components/SoftAlert/SoftAlertCloseIcon";
import { IoClose } from "react-icons/io5";
import {
  assetsGetAction,
  updateAssetsAction,
  deleteAssetsAction,
} from "store/Action/assetsAction";

function User() {
  const [controller] = useSoftUIController();
  const { sidenavColor } = controller;
  const [expenseId, setManagerById] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openDown, setOpenDown] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenDown = () => setOpenDown(true);
  const handleCloseDown = () => setOpenDown(false);
  const [openDel, setOpenDel] = useState(false);
  const handleOpenDel = () => setOpenDel(true);
  const handleCloseDel = () => setOpenDel(false);

  const getAllExpenses = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(getAllExpensesAction());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(updateExpensesAction(expenseId?._id, expenseId));
    handleClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManagerById({ ...expenseId, [name]: value });
  };

  const DownloadPdf = () => {
    // dispatch(getNozzlePdfAction(mangerById?._id));
    // console.log("getpff", mangerById);
    handleCloseDown();
  }
  const deleteExpenses = () => {
    dispatch(deleteExpenseAction(expenseId?._id));
    handleCloseDel();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    borderRadius: "10px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflowY: "scroll",
  };

  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    borderRadius: "10px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
  };

  const columns = [
    { name: "Name", align: "left", backname: "name" },
    { name: "Type", align: "left", backname: "type" },
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
            <SoftBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SoftTypography variant="h6">Expenses list</SoftTypography>
              <SoftButton
                component="a"
                variant="gradient"
                color={sidenavColor}
                onClick={() => {
                  navigate("/addExpense");
                }}
              >
                Add Expenses
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
              <Table
                columns={columns}
                rows={getAllExpenses?.getAllExpenses?.data}
                setManagerById={setManagerById}
                handleOpen={handleOpen}
                handleOpenDel={handleOpenDel}
                handleOpenDown={handleOpenDown}
              />
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
                      value={expenseId?.fromDate}
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
                      value={expenseId?.toDate}
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
          <div
            style={{ display: "flex", justifyContent: "end", width: "100%" }}
          >
            <IoClose
              style={{
                backgroundColor: "#DEDBD7",
                padding: "3px",
                borderRadius: "2px",
              }}
              onClick={handleClose}
            />
          </div>
          <Grid container spacing={2} sx={{ marginTop: "10px" }}>
            <Grid item xs={12}>
              <Grid container spacing={2} px={2}>
                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }}>Expenses Name</label>
                    <SoftInput
                      type="text"
                      placeholder="Assets Name"
                      name="name"
                      value={expenseId?.name}
                      onChange={handleInputChange}
                    />
                  </SoftBox>
                </Grid>
                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }}>Assets Type</label>
                    <SoftInput
                      type="text"
                      placeholder="Assets Type"
                      name="type"
                      value={expenseId?.type}
                      onChange={handleInputChange}
                    />
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
            Update Expenses
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
            Are you sure you want to delete this expenses?
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
              onClick={deleteExpenses}
            >
              Delete
            </SoftButton>
          </div>
        </Box>
      </Modal>
    </DashboardLayout>
  );
}

export default User;
