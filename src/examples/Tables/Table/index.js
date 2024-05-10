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

import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

// Pmate components
import SoftBox from "components/SoftBox";
import SoftAvatar from "components/SoftAvatar";
import SoftTypography from "components/SoftTypography";

// Pmate base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import SoftButton from "components/SoftButton";
import { useSoftUIController } from "context";
import { useNavigate } from "react-router-dom";
import { MdAutoDelete } from "react-icons/md";
import { FaDownload, FaEdit } from "react-icons/fa";


function Table({ columns, rows, mangerById, setManagerById, handleOpenDown,handleOpen, handleOpenDel }) {
  const { light } = colors;
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;
  const navigate = useNavigate();

  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;
  const renderColumns = columns.map(({ name, align, width }, key) => {
    let pl;
    let pr;

    if (key === 0) {
      pl = 3;
      pr = 3;
    } else if (key === columns.length - 1) {
      pl = 3;
      pr = 3;
    } else {
      pl = 1;
      pr = 1;
    }

    return (
      <SoftBox
        key={name}
        component="th"
        width={width || "auto"}
        pt={1.5}
        pb={1.25}
        pl={align === "left" ? pl : 3}
        pr={align === "right" ? pr : 3}
        textAlign={align}
        fontSize={size.xxs}
        fontWeight={fontWeightBold}
        color="secondary"
        opacity={0.7}
        borderBottom={`${borderWidth[1]} solid ${light.main}`}
      >
        {name.toUpperCase()}
      </SoftBox>
    );
  });

  console.log("rowsrowsrowsrows", rows);
  const renderRows = rows.map((row, key) => {
    const rowKey = `row-${key}`;

    const tableRow = columns.map(({ name, align, backname, width }) => {
      let template;
      console.log("row[backname]", row[backname]);
      template = (<>



        {backname == "ViewButton" &&

          <SoftBox
            key={uuidv4()}
            component="td"
            p={1}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null}
          >
            <SoftButton
              component="a"
              variant="gradient"
              color={sidenavColor}
              sx={{ margin: "1px" }}
              onClick={() => {
                handleOpen(); setManagerById({
                  "fullName": row?.fullName,
                  "countryCode": row?.countryCode,
                  "country": row?.country,
                  "completeAddress": row?.completeAddress,
                  "pinCode": row?.pinCode,
                  "state": row?.state,
                  "email": row?.email,
                  "_id": row?._id,
                  "city": row?.city,
                  "gender": row?.gender,
                  "country": row?.country,
                  "address": row?.address
                })
              }}

            >
              <FaEdit />


              {/* <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> */}
            </SoftButton>    </SoftBox>}



        {backname == "EditButton" &&

          <SoftBox
            key={uuidv4()}
            component="td"
            p={1}
            width={width}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null}
          >
            <SoftButton
              component="a"
              variant="gradient"
              color={sidenavColor}
              sx={{ margin: "1px" }}
              onClick={() => {
                handleOpen(); setManagerById(row)
              }}

            >
              <FaEdit />


              {/* <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> */}
            </SoftButton>    </SoftBox>}

        {backname == "EditButtonCat" &&

          <SoftBox
            key={uuidv4()}
            component="td"
            p={1}
            width={width}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null}
          >
            <SoftButton
              component="a"
              variant="gradient"
              color={"success"}
              sx={{ margin: "1px" }}
              onClick={() => {
                handleOpen(); setManagerById(row)
              }}

            >
              <FaEdit />


              {/* <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> */}
            </SoftButton>    </SoftBox>}

            {backname == "DownloadButton" &&

          <SoftBox
            key={uuidv4()}
            component="td"
            p={1}
            width={width}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null}
          >
            <SoftButton
              component="a"
              variant="gradient"
              color={"success"}
              sx={{ margin: "1px" }}
              onClick={() => {
                handleOpenDown(); setManagerById(row)
              }}

            >
              <FaDownload />


              {/* <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> */}
            </SoftButton>    </SoftBox>}
        {backname == "delBtn" &&

          <SoftBox
            key={uuidv4()}
            component="td"
            p={1}
            width={width}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null}
          >
            <SoftButton
              component="a"
              variant="gradient"
              color={"error"}
              sx={{ margin: "1px" }}
              onClick={() => {
                handleOpenDel(); setManagerById(row)
              }}
            >
              <MdAutoDelete />

              {/* <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> */}
            </SoftButton>    </SoftBox>}

        {backname == "EditButtonNoz" &&

          <SoftBox
            key={uuidv4()}
            component="td"
            p={1}
            width={width}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null}
          >
            <SoftButton
              component="a"
              variant="gradient"
              color={sidenavColor}
              sx={{ margin: "1px" }}
              onClick={() => {
                handleOpen(); setManagerById(row)
              }}

            >
              <FaEdit />


              {/* <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> */}
            </SoftButton>    </SoftBox>}


        {(backname != "ViewButton" && backname != "EditButtonNoz" && backname != "delBtn" && backname != "EditButtonCat" && backname != "EditButton" && backname !="DownloadButton") &&
          <SoftBox
            key={uuidv4()}
            component="td"
            p={1}
            width={width}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null}
          >
            <SoftTypography
              variant="button"
              fontWeight="regular"
              color="secondary"
              textAlign={align}
              sx={{ display: "inline-block", width: "max-content" }}
            >
              {row[backname]}
            </SoftTypography>
          </SoftBox>
        }
      </>

      );

      return template;
    });

    return <TableRow key={rowKey}>{tableRow}</TableRow>;
  });

  return useMemo(
    () => (
      <TableContainer>
        <MuiTable>
          <SoftBox component="thead">
            <TableRow>{renderColumns}</TableRow>
          </SoftBox>
          <TableBody>{renderRows}</TableBody>
        </MuiTable>
      </TableContainer>
    ),
    [columns, rows]
  );
}

// Setting default values for the props of Table
Table.defaultProps = {
  columns: [],
  rows: [{}],
};

// Typechecking props for the Table
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  onEditClick: PropTypes.func,
};

export default Table;
