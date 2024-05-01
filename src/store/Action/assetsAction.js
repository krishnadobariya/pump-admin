import axios from "axios";
import { toast } from "react-toastify";

export const ADD_ASSETS = "ADD_ASSETS";
export const GET_ASSETS = "GET_ASSETS";
export const UPDATE_ASSETS = "UPDATE_ASSETS";
export const DELETE_ASSETS = "DELETE_ASSETS";

const assetsAdd = (payload) => ({ type: ADD_ASSETS, payload: payload.data });
const assetsGet = (payload) => ({ type: GET_ASSETS, payload: payload.data });
const updateAssets = (payload) => ({ type: GET_ASSETS, payload: payload.data });
const deleteAssets = (payload) => ({ type: DELETE_ASSETS, payload: payload.data });

export const assetsAddAction = (payload) => {
  return async (dispatch) => {
    const requiredFields = ["assets_name", "assets_type"];
    const emptyFields = requiredFields.filter((field) => !payload[field]);

    if (emptyFields.length > 0) {
      toast.error("Please fill in the following fields!!!");
      return;
    }
    try {
      const token = localStorage.getItem("token");
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
        .post(
          `${process.env.REACT_APP_BASE_URL}api/assests/v1/create`,
          payload,
          config
        )
        .then((res) => {
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

export const assetsGetAction = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      console.log("token------->", token);
      if (!token) {
        toast.error("Token not found in local storage");
        return;
      }
      const config = {
        headers: {
          Authorization: token,
        },
      };

      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/assests/v1/getAll`,
        config
      );
      dispatch(assetsGet(res));
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response?.data?.message || "An error occurred");
      dispatch(assetsGet(error?.response));
    }
  };
};

export const updateAssetsAction = (assetId, updatedData) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Not Authenticate");
        return;
      }

      const config = {
        headers: {
          Authorization: token,
        },
      };
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}api/assests/v1/update/${assetId}`,
        updatedData,
        config
      );
      toast.success("Assets Updated Successfully");
      dispatch(assetsGetAction());
      dispatch(updateAssets(res.data));
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response?.data?.message);
      dispatch(updateAssets(error?.response?.data));
    }
  };
};



export const deleteAssetsAction = (assetId) => {
  return async (dispatch) => {
      try {
          await axios.delete(`${process.env.REACT_APP_BASE_URL}api/assests/v1/delete/${assetId}`, {
              headers: {
                  'Authorization': localStorage.getItem('token'),
              }
          }).then((res) => {
              toast.success('Assets Delete Successfully');
              dispatch(assetsGetAction())
              dispatch(deleteAssets(res));
          }).catch((error) => {
              console.log(error);
              toast.error(error?.response?.data?.message)
              dispatch(deleteAssets(error?.response));
          });
      } catch (error) {
          console.log("Error::::", error);
      }
  };
};