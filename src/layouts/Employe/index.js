// @mui material components
import Card from "@mui/material/Card";

// Pmate components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
// Pmate examples
import EditManagerModal from "layouts/EditManager/index"
// Data
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material";
import SoftInput from "components/SoftInput";
import { IoClose } from "react-icons/io5";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllEmployeeAction } from "store/Action/userAction";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useSoftUIController } from "context";
import { updateUserAction } from "store/Action/userAction";
import { deleteUserAction } from "store/Action/userAction";

function User() {
  const [controller] = useSoftUIController();
  const { sidenavColor } = controller;
  const [managerById, setManagerById] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openDel, setOpenDel] = useState(false);
  const handleOpenDel = () => setOpenDel(true);
  const handleCloseDel = () => setOpenDel(false);

  const [openView, setOpenView] = useState(false);
  const handleOpenView = () => setOpenView(true);
  const handleCloseView = () => setOpenView(false);


  const getAllUsers = useSelector((state) => state.users);
  console.log("getAllUsers", getAllUsers);


  useEffect(() => {
    dispatch(getAllEmployeeAction());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(updateUserAction(managerById?._id, managerById))
    handleClose()
  }

  const deleteEmploy = () => {
    dispatch(deleteUserAction(managerById?._id));
    handleCloseDel();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManagerById({ ...managerById, [name]: value });
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
    { name: "Full Name", align: "left", backname: "fullName" },
    { name: "Email", align: "left", backname: "email" },
    { name: "Address", align: "center", backname: "address" },
    { name: "Gender", align: "center", backname: "gender" },
    { name: "Role", align: "center", backname: "role" },
    { name: "City", align: "center", backname: "city" },
    { name: "Pincode", align: "center", backname: "pinCode" },
    { name: "", align: "right", backname: "EditButtonNoz", width: "1px" },
    { name: "", align: "right", backname: "delBtn", width: "1px" },
    { name: "", align: "right", backname: "ViewButton", width: "1px" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} sx={{ minHeight: "80vh" }}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">User list</SoftTypography>
              <SoftButton
                component="a"
                variant="gradient"
                color={sidenavColor}
                onClick={() => { navigate('/addemployee') }}
              >
                Add Employee
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
              <Table columns={columns} rows={getAllUsers?.getAllemployee?.data} handleOpenView={handleOpenView} setManagerById={setManagerById} handleOpen={handleOpen} handleOpenDel={handleOpenDel}  />
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
            <Grid item xs={12}>
              <Grid container spacing={2} px={2}>
                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }}>Name</label>
                    <SoftInput
                      type="text"
                      placeholder="Enter The name"
                      name="fullName"
                      value={managerById?.fullName}
                      onChange={handleInputChange} />
                  </SoftBox>
                </Grid>

                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }}>email</label>
                    <SoftInput
                      type="text"
                      placeholder="Type"
                      name="email"
                      value={managerById?.email}
                      onChange={handleInputChange} />
                  </SoftBox>
                </Grid>

                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }}>address</label>
                    <SoftInput
                      type="text"
                      placeholder="address"
                      name="address"
                      value={managerById?.address}
                      onChange={handleInputChange} />
                  </SoftBox>
                </Grid>

                <Grid item xs={6}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={managerById?.gender}
                    name="gender"
                    onChange={handleInputChange}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </Grid>



                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }}>role</label>
                    <SoftInput
                      type="text"
                      placeholder="role"
                      name="role"
                      value={managerById?.role}
                      onChange={handleInputChange} />
                  </SoftBox>
                </Grid>

                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }}>city</label>
                    <SoftInput
                      type="text"
                      placeholder="city"
                      name="city"
                      value={managerById?.city}
                      onChange={handleInputChange} />
                  </SoftBox>
                </Grid>

                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }}>pinCode</label>
                    <SoftInput
                      type="text"
                      placeholder="pinCode"
                      name="pinCode"
                      value={managerById?.pinCode}
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
            Update Employe
          </SoftButton>

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
            <Grid item xs={12}>
              <Grid container spacing={2} px={2}>
                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }} value="">Name: {managerById?.fullName}</label>
                  </SoftBox>
                </Grid>

                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }} value="">Email: {managerById?.email}</label>
                  </SoftBox>
                </Grid>

                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }} value="">address:{managerById?.address}</label>
                  </SoftBox>
                </Grid>

                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }} value="">gender:{managerById?.gender}</label>
                  </SoftBox>
                </Grid>

                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }} value="">role:{managerById?.role}</label>
                  </SoftBox>
                </Grid>

                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }} value="">city:{managerById?.city}</label>
                  </SoftBox>
                </Grid>

                <Grid item xs={6}>
                  <SoftBox mb={2}>
                    <label style={{ fontSize: "15px" }} value="">pincode:{managerById?.pinCode}</label>
                  </SoftBox>
                </Grid>
              </Grid>
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
            Are you sure you want to delete this employe?
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
              onClick={deleteEmploy}
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
