import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { DashboardLayout, DashboardNavbar, Footer } from "components/Layout";
import { expenseAddAction } from "store/Action/expenseAction";
import { getAllCategoryAction } from "store/Action/categoryAction";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

const AddExpense = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [assetsData, setAssetskData] = useState({
    name: "",
    type: "",
  });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setAssetskData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssetskData({ ...assetsData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(expenseAddAction(assetsData));
    console.log("assetskData------->", assetsData);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4} sx={{ minHeight: "80vh" }}>
        <SoftBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Card>
                <div style={{ padding: "20px" }}>
                  <Grid container spacing={1}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <SoftBox mb={2}>
                          <label style={{ fontSize: "15px" }}>Name</label>
                          <SoftInput
                            type="string"
                            placeholder="Enter The name"
                            name="name"
                            value={assetsData.name}
                            onChange={handleChange}
                          />
                          {/* <input type="text" name="product" onChange={handleChange} value={assetsData.product}/> */}
                        </SoftBox>
                      </Grid>
                      <Grid item xs={12}>
                        <SoftBox mb={2}>
                          <label style={{ fontSize: "15px" }}>Type</label>
                          <SoftInput
                            type="string"
                            placeholder="Enter The type"
                            name="type"
                            value={assetsData.type}
                            onChange={handleChange}
                          />
                          {/* <input type="text" name="product" onChange={handleChange} value={assetsData.product}/> */}
                        </SoftBox>
                      </Grid>
                    </Grid>
                  </Grid>

                  <SoftButton
                    variant="gradient"
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Submit
                  </SoftButton>
                </div>
              </Card>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default AddExpense;
