import axios from "axios";
import { toast } from "react-toastify";

export const ADD_ASSETS = "ADD_ASSETS";
export const GET_ASSETS = "GET_ASSETS";

const assetsAdd = (payload) => ({ type: ADD_ASSETS, payload: payload.data });
const assetsGet = (payload) => ({ type: GET_ASSETS, payload: payload.data });

// export const assetsAddAction = (payload) => {
//   return async (dispatch) => {
//     console.log(
//       "process.env.REACT_APP_BASE_URL",
//       process.env.REACT_APP_BASE_URL
//     );
//     const requiredFields = ["assets_name", "assets_type"];
//     const emptyFields = requiredFields.filter((field) => !payload[field]);

//     if (emptyFields.length > 0) {
//       // toast.error(`Please fill in the following fields: ${emptyFields.join(', ')}`);
//       toast.error("Please fill in the following fields!!!");
//       return;
//     }

//     try {
//       await axios
//         .post(`REACT_APP_BASE_URLapi/assests/v1/create`, payload)
//         .then((res) => {
//           console.log("-----------------", payload);
//           toast.success("Assets Add successfully");
//           dispatch(assetsAdd(res));
//         })
//         .catch((error) => {
//           if (error.response) {
//             toast.error(error.response.data.message || "An error occurred");
//           } else if (error.request) {
//             toast.error("No response received from the server");
//           } else {
//             toast.error("An error occurred while sending the request");
//           }
//           dispatch(assetsAdd(error?.response));
//         });
//     } catch (error) {
//       console.log("Error::::", error);
//     }
//   };
// };


export const assetsAddAction = (payload) => {
    return async (dispatch) => {
      console.log(
        "process.env.REACT_APP_BASE_URL",
        process.env.REACT_APP_BASE_URL
      );
      const requiredFields = ["assets_name", "assets_type"];
      const emptyFields = requiredFields.filter((field) => !payload[field]);
  
      if (emptyFields.length > 0) {
        toast.error("Please fill in the following fields!!!");
        return;
      }
  
      try {
        const token = localStorage.getItem("token"); 
        // console.log("token------->",token);
        if (!token) {
          toast.error("Token not found in local storage");
          return;
        }
  
        const config = {
          headers: {
            Authorization: token, 
          },
        };
  
        await axios
          .post(`${process.env.REACT_APP_BASE_URL}api/assests/v1/create`, payload, config) 
          .then((res) => {
            // console.log("-----------------", payload);
            toast.success("Assets Add successfully");
            dispatch(assetsAdd(res));
          })
          .catch((error) => {
            if (error.response) {
              toast.error(error.response.data.message || "An error occurred");
            } else if (error.request) {
              toast.error("No response received from the server");
            } else {
              toast.error("An error occurred while sending the request");
            }
            dispatch(assetsAdd(error?.response));
          });
      } catch (error) {
        console.log("Error::::", error);
      }
    };
  };

  
export const assetsGetAction = (payload) => {
  return async (dispatch) => {
    try {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}api/userStock/v1/getAll`)
        .then((res) => {
          dispatch(assetsGet(res));
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
          dispatch(assetsGet(error?.response));
        });
    } catch (error) {
      console.log("Error::::", error);
    }
  };
};
