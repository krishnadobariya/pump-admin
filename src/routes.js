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

/** 
  All of the routes for the Pmate are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Pmate layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";


// Pmate icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";

import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import { Co2 } from "@mui/icons-material";
import { Badge } from "@mui/material";
// import CreateTaxInvoice from "layouts/CreateTaxInvoice";
// import Performa from "layouts/perfoma";
// import CreatePerformaInvoice from "layouts/CreatePerformaInvoice";
// import InvoiceView from "layouts/Invoiceview";
import AddManager from "layouts/AddManager";
import EditManagerModal from "layouts/EditManager";
import Pump from "layouts/Pump";
import AddPump from "layouts/AddPump";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Category from "layouts/Category";
import AddCategory from "layouts/AddCategory";
import Nozzles from "layouts/Nozzles";
import Stock from "layouts/Stock";
import AddNozzles from "layouts/AddNozzles";
import AddStock from "layouts/AddStock";
import Assets from "layouts/Assets";
import AddAssets from "layouts/AddAssets";
import Attendance from "layouts/Attendance";
import Manager from "layouts/Manager";
import Users from "layouts/Users";
import Expenses from "layouts/Expenses";
import AddExpense from "layouts/AddExpenses";
import Bank from "layouts/Bank";
import CashFlow from "layouts/CashFLow";
import AddCashFlow from "layouts/AddCashflow";
import Credits from "layouts/Credits";
import AddCredits from "layouts/AddCredits";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Manager List",
    key: "manager",
    route: "/manager",
    icon: <Office size="12px" />,
    component: <Manager />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "User",
    key: "user",
    route: "/user",
    icon: <CustomerSupport size="12px" />,
    component: <Users />,
    noCollapse: true,
  },



  {
    type: "collapse",
    name: "Pump",
    key: "pump",
    route: "/pump",
    icon: <CustomerSupport size="12px" />,
    component: <Pump />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Category",
    key: "category",
    route: "/category",
    icon: <CustomerSupport size="12px" />,
    component: <Category />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Nozzles",
    key: "nozzles",
    route: "/nozzles",
    icon: <SpaceShip size="12px" />,
    component: <Nozzles />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Stock",
    key: "stock",
    route: "/stock",
    icon: <SpaceShip size="12px" />,
    component: <Stock />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Assets",
    key: "assets",
    route: "/assets",
    icon: <CreditCard size="12px" />,
    component: <Assets />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Attendance",
    key: "attendance",
    route: "/attendance",
    icon: <Cube size="12px" />,
    component: <Attendance />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Expenses",
    key: "expenses",
    route: "/expenses",
    icon: <Document size="12px" />,
    component: <Expenses />,
    noCollapse: true,
  },


  {
    type: "collapse",
    name: "Bank",
    key: "bank",
    route: "/bank",
    icon: <Document size="12px" />,
    component: <Bank />,
    noCollapse: true,
  },


  {
    type: "collapse",
    name: "CashFlow",
    key: "cashFlow",
    route: "/cashFlow",
    icon: <Document size="12px" />,
    component: <CashFlow />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Credits",
    key: "credits",
    route: "/credits",
    icon: <Document size="12px" />,
    component: <Credits />,
    noCollapse: true,
  },
  
  // { type: "title", title: "Account Pages", key: "account-pages" },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   route: "/profile",
  //   icon: <CustomerSupport size="12px" />,
  //   component: <Profile />,
  //   noCollapse: true,
  // },

  {
    name: "Create Manager",
    key: "manager",
    route: "/addManager",
    component: <AddManager />,
    noCollapse: true,
  },
  {
    name: "Create Pump",
    key: "addpump",
    route: "/addpump",
    component: <AddPump />,
    noCollapse: true,
  },
  {
    name: "Create Category",
    key: "addcategry",
    route: "/addcategory",
    component: <AddCategory />,
    noCollapse: true,
  },

  {
    name: "Create Nozzles",
    key: "addNozzles",
    route: "/addnozzles",
    component: <AddNozzles />,
    noCollapse: true,
  },
  {
    name: "Edit Manager",
    key: "manager2",
    route: "/editManager",
    component: <EditManagerModal />,
    noCollapse: true,
  },
  {
    name: "Create Stock",
    key: "addStock",
    route: "/addStock",
    component: <AddStock />,
    noCollapse: true,
  },

  {
    name: "Create Assets",
    key: "addassets",
    route: "/addassets",
    component: <AddAssets />,
    noCollapse: true,
  },


  {
    name: "Create Expense",
    key: "addExpense",
    route: "/addExpense",
    component: <AddExpense />,
    noCollapse: true,
  },

  {
    name: "Create CashFlow",
    key: "addCashFlow",
    route: "/addCashFlow",
    component: <AddCashFlow />,
    noCollapse: true,
  },
  {
    name: "Create Credits",
    key: "addCredits",
    route: "/addCredits",
    component: <AddCredits />,
    noCollapse: true,
  },


  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   route: "/authentication/sign-in",
  //   icon: <Document size="12px" />,
  //   component: <SignIn />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "/authentication/sign-up",
  //   icon: <SpaceShip size="12px" />,
  //   component: <SignUp />,
  //   noCollapse: true,
  // },
];

export default routes;



