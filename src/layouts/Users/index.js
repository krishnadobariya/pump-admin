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
import { getAllUsersAction } from "store/Action/userAction";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useSoftUIController } from "context";

function User() {
    const [managerById, setManagerById] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [openDel, setOpenDel] = useState(false);
    const handleOpenDel = () => setOpenDel(true);
    const handleCloseDel = () => setOpenDel(false);

  
    
  const getAllUsers = useSelector((state) => state.users);
  console.log("getAllUsers",getAllUsers);


  useEffect(() => {
    dispatch(getAllUsersAction()); 
  }, [dispatch]);


  const columns = [
    { name: "Full Name", align: "left", backname: "fullName" },
    { name: "Email", align: "left", backname: "email" },
    { name: "Address", align: "center", backname: "address" },
    { name: "Gender", align: "center", backname: "gender" },
    { name: "Role", align: "center", backname: "role" },
    { name: "City", align: "center", backname: "city" },
    { name: "Pincode", align: "center", backname: "pinCode" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} sx={{ minHeight: "80vh" }}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">User list</SoftTypography>
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
              <Table columns={columns} rows={getAllUsers?.getAllUsers?.data} setManagerById={setManagerById} handleOpen={handleOpen} handleOpenDel={handleOpenDel} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />


    </DashboardLayout>
  );
}

export default User;
