// import Grid from "@mui/material/Grid";
// import SoftBox from "components/SoftBox";
// import Card from "@mui/material/Card";

// // Pmate examples
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import BillingInformation from "layouts/billing/components/BillingInformation";
// import Transactions from "layouts/billing/components/Transactions";
// import data from "layouts/dashboard/components/Projects/data";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import SoftInput from "components/SoftInput";
// import SoftButton from "components/SoftButton";
// import { useSoftUIController } from "context";
// // import { Padding } from "@mui/icons-material";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { managerAddAction } from "store/Action/managerAction";
// import { useNavigate } from "react-router-dom";
// import { categoryAddAction } from "store/Action/categoryAction";
// import { getAllPumpAction } from "store/Action/pumpAction";
// import { FormControl, MenuItem, Select } from "@mui/material";
// import { stockAddAction } from "store/Action/stockAction";
// import { getAllCategoryAction } from "store/Action/categoryAction";
// // import { BsCloudArrowUpFill } from "react-icons/bs";

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 800,
//     borderRadius: "10px",
//     bgcolor: 'background.paper',
//     boxShadow: 24,
//     p: 4,
// };

// const AddStock = () => {
//     const [controller] = useSoftUIController();
//     const { miniSidenav, sidenavColor } = controller;
//     const navigate = useNavigate()
//     const dispatch = useDispatch();

//     const [stockData, setStockData] = useState({
//         userId: "",
//         categoryId: "",
//         stockDate: "",
//         pumpId: ""

//     })

//     console.log("stockData", stockData);
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log("value", value);
//         setStockData({
//             ...stockData,
//             [name]: value
//         });
//     };

//     const handleSubmit = () => {
//         dispatch(stockAddAction(stockData));
//         console.log("stockData",stockData);
//     }

//     const pumpList = useSelector(state => state.pump);
//     useEffect(() => {
//         dispatch(getAllPumpAction())
//     }, []);

//     const categoryList = useSelector(state => state.category);
//     useEffect(() => {
//         dispatch(getAllCategoryAction())
//     }, []);

//     return (
//         <DashboardLayout>
//             <DashboardNavbar />
//             <SoftBox mt={4} sx={{ minHeight: "80vh" }}>
//                 <SoftBox mb={1.5}>
//                     <Grid container spacing={3}>
//                         <Grid item xs={12} lg={12} >
//                             <Card >
//                                 <div style={{ padding: "20px" }}>

// <Grid container spacing={1}>
//     <Grid item xs={12}>
//         <SoftBox mb={2}>
//             <label style={{ fontSize: "15px" }}>User ID</label>
//             <SoftInput type="string" placeholder="Add User ID" onChange={handleChange} name="userId" value={stockData.userId} />
//         </SoftBox>
//     </Grid>
// </Grid>
// <Grid container spacing={1}>
//     <Grid item xs={12}>
//         <SoftBox mb={2}>
//             <label style={{ fontSize: "15px" }}>Category ID</label>
//             <SoftInput type="string" placeholder="Add Category ID" onChange={handleChange} name="categoryId" value={stockData.categoryId} />
//         </SoftBox>
//     </Grid>
// </Grid>
// <Grid container spacing={1}>
//     <Grid item xs={12}>
//         <SoftBox mb={2}>
//             <label style={{ fontSize: "15px" }}>Stock Date</label>
//             <SoftInput type="date" placeholder="Add Stock Date ID" onChange={handleChange} name="stockDate" value={stockData.stockDate} />
//         </SoftBox>
//     </Grid>
// </Grid>

//                                     <Grid container spacing={1}>
//                                         <Grid item xs={12}>
//                                             <SoftBox mb={2}>
//                                                 <label style={{ fontSize: "15px" }}>User ID</label>
//                                                 <SoftInput type="string" placeholder="Add User ID" onChange={handleChange} name="userId" value={stockData.userId} />
//                                             </SoftBox>
//                                         </Grid>
//                                     </Grid>

//                                     {/* <Grid container spacing={1}>
//                                         <Grid item xs={12}>
//                                             <SoftBox mb={2}>
//                                                 <label style={{ fontSize: "15px" }}>Select Pump</label>
//                                                 <FormControl fullWidth>
//                                                     <Select
//                                                         labelId="demo-simple-select-label"
//                                                         id="demo-simple-select"
//                                                         value={stockData?.pumpId}
//                                                         onChange={(e) => { handleChange(e) }}
//                                                         name="pumpId"
//                                                     >
//                                                         {pumpList?.getAllPump?.data?.map((res) => {
//                                                             return (
//                                                                 <MenuItem value={res?._id}>{res?.outletName}</MenuItem>
//                                                             )
//                                                         })}
//                                                     </Select>
//                                                 </FormControl>
//                                             </SoftBox>
//                                         </Grid>
//                                     </Grid>
//                                     <Grid container spacing={1}>
//                                         <Grid item xs={12}>
//                                             <SoftBox mb={2}>
//                                                 <label style={{ fontSize: "15px" }}>Select Category</label>
//                                                 <FormControl fullWidth>
//                                                     <Select
//                                                         labelId="demo-simple-select-label"
//                                                         id="demo-simple-select"
//                                                         value={stockData?.categoryId}
//                                                         onChange={(e) => { handleChange(e) }}
//                                                         name="categoryId"
//                                                     >
//                                                         {categoryList?.getAllCategory?.data?.map((res) => {
//                                                             return (
//                                                                 <MenuItem value={res?._id}>{res?.title}</MenuItem>
//                                                             )
//                                                         })}
//                                                     </Select>
//                                                 </FormControl>
//                                             </SoftBox>
//                                         </Grid>
//                                     </Grid> */}
//                                     <SoftButton
//                                         component="a"
//                                         variant="gradient"
//                                         color={sidenavColor}
//                                         fullWidth
//                                         onClick={handleSubmit}
//                                     >
//                                         Submit
//                                     </SoftButton>
//                                 </div>

//                             </Card>

//                         </Grid>
//                     </Grid>
//                 </SoftBox>
//                 <SoftBox my={3}>
//                     <Grid container spacing={3}>
//                         <Grid item xs={12} md={7}>
//                             <BillingInformation />
//                         </Grid>
//                         <Grid item xs={12} md={5}>
//                             <Transactions />
//                         </Grid>s
//                     </Grid>
//                 </SoftBox>
//             </SoftBox>
//             <Footer />
//         </DashboardLayout >
//     );
// }

// export default AddStock;

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import React, { useState,useEffect  } from "react";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import { stockAddAction,getAllStockAction  } from "store/Action/stockAction";
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


const AddStock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [stockData, setStockData] = useState({
    userId: "",
    categoryId: "",
    stockDate: "",
    stockReading: [],
    receipts: "",
    invoice_date: "",
    receipts_amount: "",
    receipts_quantity: "",
    tanker_no: "",
    invoice_no: "",
  });


  const initialTank = {
    [`tank_1_opening_dip`]: "",
    [`tank_1_closing_dip`]: "",
    [`tank_1_opening_stock`]: "",
    [`tank_1_closing_stock`]: "",
  };
  
  useEffect(() => {
    setStockData({
      ...stockData,
      stockReading: [initialTank],
    });
  }, []);


  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedStockReading = [...stockData.stockReading];
    updatedStockReading[index][name] = value;
    setStockData({
      ...stockData,
      stockReading: updatedStockReading,
    });
  };

  const handleAddTank = () => {
    const newTank = {
      [`tank_${stockData.stockReading.length + 1}_opening_dip`]: "",
      [`tank_${stockData.stockReading.length + 1}_closing_dip`]: "",
      [`tank_${stockData.stockReading.length + 1}_opening_stock`]: "",
      [`tank_${stockData.stockReading.length + 1}_closing_stock`]: ""
    };
    setStockData({
      ...stockData,
      stockReading: [...stockData.stockReading, newTank],
    });
  };

  const handleRemoveTank = (index) => {
    const updatedStockReading = [...stockData.stockReading];
    updatedStockReading.splice(index, 1);
    setStockData({
      ...stockData,
      stockReading: updatedStockReading,
    });
  };

  // api calling

  const handleSubmit = () => {
    dispatch(stockAddAction(stockData));
    console.log("stockData", stockData);
  };

  useEffect(() => {
    dispatch(getAllStockAction());
}, []);








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
                          <label style={{ fontSize: "15px" }}>User ID</label>
                          <SoftInput
                            type="string"
                            placeholder="Add User ID"
                            onChange={(e) =>
                              setStockData({
                                ...stockData,
                                userId: e.target.value,
                              })
                            }
                            value={stockData.userId}
                          />
                        </SoftBox>
                      </Grid>
                      <Grid item xs={12}>
                        <SoftBox mb={2}>
                          <label style={{ fontSize: "15px" }}>
                            Category ID
                          </label>
                          <SoftInput
                            type="string"
                            placeholder="Add Category ID"
                            onChange={(e) =>
                              setStockData({
                                ...stockData,
                                categoryId: e.target.value,
                              })
                            }
                            value={stockData.categoryId}
                          />
                        </SoftBox>
                      </Grid>
                      <Grid item xs={12}>
                        <SoftBox mb={2}>
                          <label style={{ fontSize: "15px" }}>Stock Date</label>
                          <SoftInput
                            type="date"
                            placeholder="Add Stock Date"
                            onChange={(e) =>
                              setStockData({
                                ...stockData,
                                stockDate: e.target.value,
                              })
                            }
                            value={stockData.stockDate}
                          />
                        </SoftBox>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    {stockData.stockReading.map((tank, index) => (
                      <React.Fragment key={index}>
                        <Grid item xs={6}>
                          <SoftBox mb={2}>
                            <label style={{ fontSize: "15px" }}>
                              Tank {index + 1} Opening Dip
                            </label>
                            <SoftInput
                              type="number"
                              placeholder={`Tank ${index + 1} Opening Dip`}
                              onChange={(e) => handleChange(e, index)}
                              name={`tank_${index + 1}_opening_dip`}
                              value={
                                tank[`tank_${index + 1}_opening_dip`] || ""
                              }
                            />
                          </SoftBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SoftBox mb={2}>
                            <label style={{ fontSize: "15px" }}>
                              Tank {index + 1} Closing Dip
                            </label>
                            <SoftInput
                              type="number"
                              placeholder={`Tank ${index + 1} Closing Dip`}
                              onChange={(e) => handleChange(e, index)}
                              name={`tank_${index + 1}_closing_dip`}
                              value={
                                tank[`tank_${index + 1}_closing_dip`] || ""
                              }
                              
                            />
                          </SoftBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SoftBox mb={2}>
                            <label style={{ fontSize: "15px" }}>
                              Tank {index + 1} Opening Stock
                            </label>
                            <SoftInput
                              type="number"
                              placeholder={`Tank ${index + 1} Opening Stock`}
                              onChange={(e) => handleChange(e, index)}
                              name={`tank_${index + 1}_opening_stock`}
                              value={
                                tank[`tank_${index + 1}_opening_stock`] || ""
                              }
                            />
                          </SoftBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SoftBox mb={2}>
                            <label style={{ fontSize: "15px" }}>
                              Tank {index + 1} Closing Stock
                            </label>
                            <SoftInput
                              type="number"
                              placeholder={`Tank ${index + 1} Closing Stock`}
                              onChange={(e) => handleChange(e, index)}
                              name={`tank_${index + 1}_closing_stock`}
                              value={
                                tank[`tank_${index + 1}_closing_stock`] || ""
                              }
                            />
                          </SoftBox>
                          {index !== stockData.stockReading.length - 1 && (
                            <div
                              className=""
                              style={{
                                display: "flex",
                                justifyContent: "end",
                                width: "100%",
                              }}
                            >
                              <IconButton
                                style={{
                                  display: "flex",
                                }}
                                onClick={() => handleRemoveTank(index)}
                              >
                                <ClearIcon />
                              </IconButton>
                            </div>
                          )}
                        </Grid>
                      </React.Fragment>
                    ))}
                  </Grid>
                  <SoftButton
                    variant="gradient"
                    fullWidth
                    onClick={handleAddTank}
                  >
                    Add Tank
                  </SoftButton>
                  <Grid item xs={12}>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="product-details"
                        id="product-details-header"
                      >
                        MS Receipts
                      </AccordionSummary>

                      <AccordionDetails>
                        <Grid container spacing={1}>
                          <Grid container spacing={1}>
                            <Grid item xs={12}>
                              <SoftBox mb={2}>
                                <label style={{ fontSize: "15px" }}>
                                  MS Receipts
                                </label>
                                <SoftInput
                                  type="string"
                                  placeholder="Add MS Receipts"
                                  onChange={(e) =>
                                    setStockData({
                                      ...stockData,
                                      receipts: e.target.value,
                                    })
                                  }
                                  value={stockData.receipts}
                                />
                              </SoftBox>
                            </Grid>
                            <Grid item xs={12}>
                              <SoftBox mb={2}>
                                <label style={{ fontSize: "15px" }}>
                                  MS Invoice Date
                                </label>
                                <SoftInput
                                  type="date"
                                  placeholder="Add Invoice Date"
                                  onChange={(e) =>
                                    setStockData({
                                      ...stockData,
                                      invoice_date: e.target.value,
                                    })
                                  }
                                  value={stockData.invoice_date}
                                />
                              </SoftBox>
                            </Grid>
                            <Grid item xs={12}>
                              <SoftBox mb={2}>
                                <label style={{ fontSize: "15px" }}>
                                  MS Receipts Amount
                                </label>
                                <SoftInput
                                  type="number"
                                  placeholder="Add Receipts Amount"
                                  onChange={(e) =>
                                    setStockData({
                                      ...stockData,
                                      receipts_amount: e.target.value,
                                    })
                                  }
                                  value={stockData.receipts_amount}
                                />
                              </SoftBox>
                            </Grid>
                            <Grid item xs={12}>
                              <SoftBox mb={2}>
                                <label style={{ fontSize: "15px" }}>
                                  MS Receipts Quantity
                                </label>
                                <SoftInput
                                  type="number"
                                  placeholder="Add Receipts Quantity"
                                  onChange={(e) =>
                                    setStockData({
                                      ...stockData,
                                      receipts_quantity: e.target.value,
                                    })
                                  }
                                  value={stockData.receipts_quantity}
                                />
                              </SoftBox>
                            </Grid>
                            <Grid item xs={12}>
                              <SoftBox mb={2}>
                                <label style={{ fontSize: "15px" }}>
                                  MS Tanker No.
                                </label>
                                <SoftInput
                                  type="number"
                                  placeholder="Add Tanker No."
                                  onChange={(e) =>
                                    setStockData({
                                      ...stockData,
                                      tanker_no: e.target.value,
                                    })
                                  }
                                  value={stockData.tanker_no}
                                />
                              </SoftBox>
                            </Grid>
                            <Grid item xs={12}>
                              <SoftBox mb={2}>
                                <label style={{ fontSize: "15px" }}>
                                  MS Invoice No.
                                </label>
                                <SoftInput
                                  type="number"
                                  placeholder="Add MS Invoice No."
                                  onChange={(e) =>
                                    setStockData({
                                      ...stockData,
                                      invoice_no: e.target.value,
                                    })
                                  }
                                  value={stockData.invoice_no}
                                />
                              </SoftBox>
                            </Grid>
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
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

export default AddStock;
