import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import { assetsAddAction } from "store/Action/assetsAction";
import { useNavigate } from "react-router-dom";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { DashboardLayout, DashboardNavbar, Footer } from "components/Layout";
import { getAllPumpAction } from "store/Action/pumpAction";
import { getAllCategoryAction } from "store/Action/categoryAction";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

const AddAssets = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [assetsData, setAssetskData] = useState({
    assets_name: "",
    assets_type: "",
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
    dispatch(assetsAddAction(assetsData));
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
                          <label style={{ fontSize: "15px" }}>assets_name</label>
                          <SoftInput
                            type="string"
                            placeholder="Enter The assets_name"
                            name="assets_name"
                            value={assetsData.assets_name}
                            onChange={handleChange}
                          />
                          {/* <input type="text" name="product" onChange={handleChange} value={assetsData.product}/> */}
                        </SoftBox>
                      </Grid>
                      <Grid item xs={12}>
                        <SoftBox mb={2}>
                          <label style={{ fontSize: "15px" }}>assets_type</label>
                          <SoftInput
                            type="string"
                            placeholder="Enter The assets_type"
                            name="assets_type"
                            value={assetsData.assets_type}
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

export default AddAssets;
