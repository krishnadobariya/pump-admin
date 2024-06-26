import axios from "axios";
import { toast } from "react-toastify";

export const REGISTER_ADMIN = "REGISTER_ADMIN";
export const LOGIN_ADMIN = "LOGIN_ADMIN";

const registerAdmin = (payload) => ({ type: REGISTER_ADMIN, payload: payload.data });
const loginAdmin = (payload) => ({ type: LOGIN_ADMIN, payload: payload.data })

export const registerAdminAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/v1/registration`, payload).then((res) => {
                toast.success('Admin Register Successfully!!');
                localStorage.setItem('adminId', res?.data?.data?._id);
                localStorage.setItem('token', res?.data?.data?.token);
                window.location.href = "/"
                dispatch(registerAdmin(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(registerAdmin(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const loginAdminAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/v1/loginNormalUser`, payload).then((res) => {
                toast.success('Admin Login Successfully!!');
                localStorage.setItem('adminId', res?.data?.data?._id);
                localStorage.setItem('token', res?.data?.data?.token);
                window.location.href = "/"
                dispatch(loginAdmin(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(loginAdmin(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}
