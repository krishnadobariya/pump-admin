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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// CodersBay components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// CodersBay base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { AdminViewAction } from "store/Action/adminAction";

function ProfileInfoCard({ onClick, social, action }) {

  const dispatch = useDispatch()
  const admin = useSelector(state => state.admin)
  const { socialMediaColors } = colors;
  const { size } = typography;

  // useEffect(() => {
  //   dispatch(AdminViewAction())
  // }, [])

  console.log("admin", admin);
  // Convert this form `objectKey` of the object key in to this `object key`


  // // Render the card info items
  // const renderItems = labels.map((label, key) => (
  //   <SoftBox key={label} display="flex" py={1} pr={2}>
  //     <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
  //       {label}: &nbsp;
  //     </SoftTypography>
  //     <SoftTypography variant="button" fontWeight="regular" color="text">
  //       &nbsp;{values[key]}
  //     </SoftTypography>
  //   </SoftBox>
  // ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <SoftBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </SoftBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          profile information
        </SoftTypography>
        <div onClick={onClick}>
          <SoftTypography component={Link} to={action.route} variant="body2" color="secondary">
            <Tooltip title={action.tooltip} placement="top">
              <Icon>edit</Icon>
            </Tooltip>
          </SoftTypography>
        </div>

      </SoftBox>
      <SoftBox p={2}>
        <SoftBox>
          <SoftBox display="flex" py={1} pr={2}>
            <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
              Company Name: &nbsp;
            </SoftTypography>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;{admin?.viewAdmin?.data?.companyName}
            </SoftTypography>
          </SoftBox>
          <SoftBox display="flex" py={1} pr={2}>
            <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
              Company Address: &nbsp;
            </SoftTypography>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;{admin?.viewAdmin?.data?.address}
            </SoftTypography>
          </SoftBox>
          <SoftBox display="flex" py={1} pr={2}>
            <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
              Email: &nbsp;
            </SoftTypography>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;{admin?.viewAdmin?.data?.email}
            </SoftTypography>
          </SoftBox>
          <SoftBox display="flex" py={1} pr={2}>
            <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
              Contact Number: &nbsp;
            </SoftTypography>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;{admin?.viewAdmin?.data?.mobile}
            </SoftTypography>
          </SoftBox>
       
          <SoftBox display="flex" py={1} pr={2}>
            <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
              social: &nbsp;
            </SoftTypography>
            {renderSocial}
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  onClick: PropTypes.func,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileInfoCard;
