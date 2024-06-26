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
// import EditManagerModal from "layouts/EditManager/index"
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
// import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material";
import SoftInput from "components/SoftInput";
import { updateManagerAction } from "store/Action/managerAction";
import { IoClose } from "react-icons/io5";
import { deleteManagerAction } from "store/Action/managerAction";


function Manager() {
  // const { columns: prCols, rows: prRows } = projectsTableData;
  const [controller] = useSoftUIController();
  const [row, setRow] = useState([]);
  const { miniSidenav, sidenavColor } = controller;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openDel, setOpenDel] = useState(false);
  const handleOpenDel = () => setOpenDel(true);
  const handleCloseDel = () => setOpenDel(false);

  const [openView, setOpenView] = useState(false);
  const handleOpenView = () => setOpenView(true);
  const handleCloseView = () => setOpenView(false);

  const [mangerById, setManagerById] = useState();

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const getAllManager = useSelector((state) => state.manager.getAllManager);
  console.log("getAllManager", getAllManager?.data)


  useEffect(() => {
    dispatch(getAllManagerAction())
  }, [dispatch])


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("value", value);
    setManagerById({
      ...mangerById,
      [name]: value
    });
  };

  const editManager = () => {
    dispatch(updateManagerAction(mangerById?._id, mangerById))
    handleClose()
  }
  const deleteManager = () => {
    dispatch(deleteManagerAction(mangerById?._id));
    handleCloseDel();
  };

  useEffect(() => {
    setRow(getAllManager?.data?.data || [])
    console.log("getAllManager--->", getAllManager);
  }, [getAllManager])





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
    { name: "Full Name", align: "left", backname: "fullName" },
    // { name: "Client Industry", align: "left", backname: "clientindustry" },
    { name: "Email", align: "left", backname: "email" },
    // { name: "Phone no.", align: "center", backname: "mobile" },
    { name: "Address", align: "center", backname: "address" },
    { name: "Gender", align: "center", backname: "gender" },
    { name: "Role", align: "center", backname: "role" },
    { name: "City", align: "center", backname: "city" },
    { name: "Pincode", align: "center", backname: "pinCode" },
    { name: "", align: "right", backname: "EditButtonNoz" },
    { name: "", align: "right", backname: "delBtn", width: "1px" },
    { name: "", align: "right", backname: "ViewButton", width: "1px" },
  ];

  console.log("mangerById", mangerById)

  return (

    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} sx={{ minHeight: "80vh" }}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Manager list</SoftTypography>
              <SoftButton
                component="a"
                variant="gradient"
                color={sidenavColor}
                onClick={() => { navigate('/addmanager') }}
              >
                Add manager
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
              <Table columns={columns} rows={getAllManager?.data} mangerById={mangerById} setManagerById={setManagerById} handleOpen={handleOpen} handleOpenDel={handleOpenDel} handleOpenView={handleOpenView} />
            </SoftBox>
          </Card>
        </SoftBox>

      </SoftBox>
      <Footer />

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
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Full Name</label>
                <SoftInput type="text" placeholder="Full Name" onChange={handleChange} name="fullName" value={mangerById?.fullName} />
              </SoftBox>
            </Grid>
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Email</label>
                <SoftInput type="text" placeholder="Email" onChange={handleChange} name="email" value={mangerById?.email} />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Complete Address</label>
                <SoftInput type="text" placeholder="Complete Address" onChange={handleChange} name="completeAddress" value={mangerById?.completeAddress} />
              </SoftBox>
            </Grid>
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Country Code</label>
                <SoftInput type="text" placeholder="Country Code" onChange={handleChange} name="countryCode" value={mangerById?.countryCode} />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={3}>

            <Grid item xs={4}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Address</label>
                <SoftInput type="text" placeholder="Address" onChange={handleChange} name="address" value={mangerById?.address} />
              </SoftBox>
            </Grid>
            <Grid item xs={4}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>City</label>
                <SoftInput type="text" placeholder="City" onChange={handleChange} name="city" value={mangerById?.city} />
              </SoftBox>
            </Grid>
            <Grid item xs={4}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>State</label>
                <SoftInput type="text" placeholder="State" onChange={handleChange} name="state" value={mangerById?.state} />
              </SoftBox>

            </Grid>
            <Grid container spacing={3}>

            </Grid>
            <Grid item xs={4}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Country</label>
                <SoftInput type="text" placeholder="Country" onChange={handleChange} name="country" value={mangerById?.country} />
              </SoftBox>
            </Grid>
            <Grid item xs={4}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Pin Code</label>
                <SoftInput type="number" placeholder="Pin Code" onChange={handleChange} name="pinCode" value={mangerById?.pinCode} />
              </SoftBox>
            </Grid>

            <Grid item xs={4}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Gender</label>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={mangerById?.gender}
                    name="gender"
                    onChange={handleChange}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </SoftBox>
            </Grid>
          </Grid>
          <SoftButton component='a'
            variant="gradient"
            color={sidenavColor}
            onClick={editManager}
            fullWidth>
            Update Manager
          </SoftButton>
        </Box>
      </Modal>

      <Modal
        open={openDel}
        onClose={handleCloseDel}
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
            Are you sure you want to delete this Manager?
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
              onClick={deleteManager}
            >
              Delete
            </SoftButton>
          </div>
        </Box>
      </Modal>

      <Modal
        open={openView}
        onClose={handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "end", width: "100%" }} >
            <IoClose style={{ backgroundColor: "#DEDBD7", padding: "3px", borderRadius: "2px" }} onClick={handleCloseView} />
          </div>

          <Grid container spacing={2} sx={{ marginTop: "10px" }}>
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Full Name: {mangerById?.fullName} </label>
                {/* <SoftInput type="text" placeholder="Full Name" onChange={handleChange} name="fullName" value={mangerById?.fullName} /> */}
              </SoftBox>
            </Grid>
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Email: {mangerById?.email}</label>
                {/* <SoftInput type="text" placeholder="Email" onChange={handleChange} name="email" value={mangerById?.email} /> */}
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Complete Address: {mangerById?.completeAddress}</label>
                {/* <SoftInput type="text" placeholder="Complete Address" onChange={handleChange} name="completeAddress" value={mangerById?.completeAddress} /> */}
              </SoftBox>
            </Grid>
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Country Code: {mangerById?.countryCode}</label>
                {/* <SoftInput type="text" placeholder="Country Code" onChange={handleChange} name="countryCode" value={mangerById?.countryCode} /> */}
              </SoftBox>
            </Grid>
          </Grid>
          <Grid container spacing={3}>

            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Address: {mangerById?.address}</label>
                {/* <SoftInput type="text" placeholder="Address" onChange={handleChange} name="address" value={mangerById?.address} /> */}
              </SoftBox>
            </Grid>
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>City: {mangerById?.city}</label>
                {/* <SoftInput type="text" placeholder="City" onChange={handleChange} name="city" value={mangerById?.city} /> */}
              </SoftBox>
            </Grid>
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>State: {mangerById?.state}</label>
                {/* <SoftInput type="text" placeholder="State" onChange={handleChange} name="state" value={mangerById?.state} /> */}
              </SoftBox>

            </Grid>
            <Grid container spacing={3}>

            </Grid>
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Country: {mangerById?.country}</label>
                {/* <SoftInput type="text" placeholder="Country" onChange={handleChange} name="country" value={mangerById?.country} /> */}
              </SoftBox>
            </Grid>
            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Pin Code: {mangerById?.pinCode}</label>
                {/* <SoftInput type="number" placeholder="Pin Code" onChange={handleChange} name="pinCode" value={mangerById?.pinCode} /> */}
              </SoftBox>
            </Grid>

            <Grid item xs={6}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Gender: {mangerById?.gender}</label>
              </SoftBox>
            </Grid>
          </Grid>
          <SoftButton
            variant="gradient"
            color={sidenavColor}
            fullWidth
            onClick={handleCloseView}
          >
            Close
          </SoftButton>
        </Box>
      </Modal>


    </DashboardLayout>
  );
}

export default Manager;
