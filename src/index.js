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

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import 'style.css'

// CodersBay Context Provider
import { SoftUIControllerProvider } from "context";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "store";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(rootReducer, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SoftUIControllerProvider>
        <ToastContainer />
        <App />
      </SoftUIControllerProvider>
    </BrowserRouter>
  </Provider>
);
