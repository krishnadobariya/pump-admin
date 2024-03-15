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
import Grid from "@mui/material/Grid";

// Pmate components
import SoftBox from "components/SoftBox";
import Card from "@mui/material/Card";
import SoftTypography from "components/SoftTypography";
import Table from "examples/Tables/Table";
// Pmate components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Pmate examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import data from "layouts/dashboard/components/Projects/data";
import SoftButton from "components/SoftButton";
import { useSoftUIController } from "context";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { invoiceListAction } from "store/Action/managerAction";
import { useEffect, useState } from "react";


function Billing() {
  const dispatch = useDispatch();
  const Clients = useSelector(state => state.client);
  const [row, setRow] = useState([]);

  const columns = [
    { name: "Date", align: "left", backname: "date" },
    { name: "Invoice", align: "left", backname: "invoiceNo" },
    { name: "Billed To", align: "center", backname: "clientId" },
    // { name: "Amount", align: "center", backname: "items" },
    { name: "Status", align: "center", backname: "paymentStatus" },
    { name: "Payment Date", align: "center", backname: "paymentDate" },
    { name: "", align: "right", backname: "_id" }
  ];

  // useEffect(() => {
  //   dispatch(invoiceListAction("0"))
  // }, [])


  useEffect(() => {
    setRow(Clients?.invoiceListData?.data?.data)
  }, [Clients?.invoiceListData])


  console.log("cdd", Clients);

  const [controller] = useSoftUIController();
  const navigate = useNavigate();
  // const [row, setRow] = useState([]);
  const { miniSidenav, sidenavColor } = controller;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4} sx={{ minHeight: "80vh" }}>
        <SoftBox mb={1.5}>
          <Grid container spacing={3}>

            <Grid item xs={12} lg={12}>
              <Card>
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <SoftTypography variant="h6">Tax Invocies Table</SoftTypography>
                  <SoftButton
                    component="a"
                    variant="gradient"
                    color={sidenavColor}
                    onClick={() => { navigate('/createtaxinvoices') }}
                  >
                    Create Tax Invoices
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
                  <Table columns={columns} rows={row} />
                </SoftBox>
              </Card>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
