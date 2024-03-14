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
import Card from "@mui/material/Card";

// CodersBay components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
// CodersBay examples
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
import { Grid } from "@mui/material";
import SoftInput from "components/SoftInput";


function Tables() {
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [controller] = useSoftUIController();
  const [row, setRow] = useState([]);
  const { miniSidenav, sidenavColor } = controller;
  const Clients = useSelector(state => state.client);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mangerById, setManagerById] = useState();

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const getAllManager = useSelector((state) => state.manager.getAllManager);
  console.log("getAllManager", getAllManager?.data)

  const handleEditClick = (rowData) => {
    navigate('/addmanager')
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setEditModalData({});
  };
  const handleSaveChanges = (editedData) => {
    console.log("Saving changes:", editedData);
    setEditModalData({});
    setEditModalOpen(false);

  };
  useEffect(() => {
    dispatch(getAllManagerAction())
  }, [dispatch])


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("value", value);
    setAdminData({
      ...mangerById,
      [name]: value
    });
  };


  useEffect(() => {
    setRow(getAllManager?.data?.data || [])
  }, [getAllManager])

  console.log("ClientsClients", Clients);

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
    { name: "Status", align: "center", backname: "status" },
    { name: "Address", align: "center", backname: "address" },
    { name: "Gender", align: "center", backname: "gender" },
    { name: "Role", align: "center", backname: "role" },
    { name: "City", align: "center", backname: "city" },
    { name: "Pincode", align: "center", backname: "pinCode" },
    { name: "", align: "right", backname: "ViewButton" },


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
              <Table columns={columns} rows={getAllManager?.data} mangerById={mangerById} setManagerById={setManagerById} onEditClick={handleEditClick} handleOpen={handleOpen} />
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
          <Grid container spacing={2}>
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
                <label style={{ fontSize: "15px" }}>Country</label>
                <SoftInput type="text" placeholder="Country" onChange={handleChange} name="country" value={mangerById?.country} />
              </SoftBox>
            </Grid>
            <Grid item xs={4}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>Pin Code</label>
                <SoftInput type="text" placeholder="Pin Code" onChange={handleChange} name="pinCode" value={mangerById?.pinCode} />
              </SoftBox>
            </Grid>
            <Grid item xs={4}>
              <SoftBox mb={2}>
                <label style={{ fontSize: "15px" }}>State</label>
                <SoftInput type="text" placeholder="State" onChange={handleChange} name="state" value={mangerById?.State} />
              </SoftBox>
            </Grid>
          </Grid>
          <SoftButton component='a'
            variant="gradient"
            color={sidenavColor}
            fullWidth>
            Edit Manager
          </SoftButton>
        </Box>
      </Modal>
      {/* <EditManagerModal
        isOpen={editModalOpen}
        onClose={handleEditModalClose}
        managerData={editModalData}
        onSave={handleSaveChanges}
      /> */}
    </DashboardLayout>
  );
}

export default Tables;
