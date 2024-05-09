import axios from "axios";
import { toast } from "react-toastify";

export const GET_ALL_TRANSACTION = "GET_ALL_TRANSACTION";
// export const UPDATE_CREDITS = "UPDATE_CREDITS";
// export const  DELETE_CREDITS = "DELETE_CREDITS";
export const  ADD_TRANSACTION = "ADD_TRANSACTION";




const getAllTransaction = (payload) => ({ type: GET_ALL_TRANSACTION, payload: payload.data });
// const updateCredits = (payload) => ({ type: UPDATE_CREDITS, payload: payload.data });
// const deleteCredits = (payload) => ({ type: DELETE_CREDITS, payload: payload.data });
const transactionAdd = (payload) => ({ type: ADD_TRANSACTION, payload: payload.data });



export const getAllTransactionAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/Transaction/v1/getAllTransaction`).then((res) => {
                dispatch(getAllTransaction(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllTransaction(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const AddTransactionAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/Transaction/v1/createTransaction`, payload).then((res) => {
                toast.success('Transaction Add successfully');
                dispatch(transactionAdd(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(transactionAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

// export const AddCreditAction = (payload) => {
//     return async (dispatch) => {
//         try {
//             await axios.post(`${process.env.REACT_APP_BASE_URL}api/Credits/v1/create-credits`, payload).then((res) => {
//                 toast.success('Credits Add successfully');
//                 dispatch(creditAdd(res));
//             }).catch((error) => {
//                 toast.error(error?.response?.data?.message)
//                 dispatch(creditAdd(error?.response))
//             });
//         } catch (error) {
//             console.log("Error::::", error);
//         }
//     }
// }

// export const updateCreditsAction = (creditsId, updatedData) => {
//     return async (dispatch) => {
//         try {
//             await axios.put(`${process.env.REACT_APP_BASE_URL}api/Credits/v1/update-credits/${creditsId}`, updatedData, {
//                 // headers: {
//                 //     'Authorization': localStorage.getItem('token'),
//                 // }
//             }).then((res) => {
//                 toast.success('Credits Updated Successfully');
//                 dispatch(getAllCredits())
//                 dispatch(updateCredits(res));
//             }).catch((error) => {
//                 console.log(error);
//                 toast.error(error?.response?.data?.message)
//                 dispatch(updateCredits(error?.response));
//             });
//         } catch (error) {
//             console.log("Error::::", error);
//         }
//     };
// };


// export const deleteCreditsAction = (creditsId) => {
//     return async (dispatch) => {
//         try {
//             // Update the URL and use axios.put for updating data
//             await axios.delete(`${process.env.REACT_APP_BASE_URL}api/Credits/v1/deleteCredits/${creditsId}`, {
//                 // headers: {
//                 //     'Authorization': localStorage.getItem('token'),
//                 // }
//             }).then((res) => {
//                 toast.success('credits Delete Successfully');
//                 dispatch(getAllCreditsAction())
//                 dispatch(deleteCredits(res));
//             }).catch((error) => {
//                 console.log(error);
//                 toast.error(error?.response?.data?.message)
//                 dispatch(deleteCredits(error?.response));
//             });
//         } catch (error) {
//             console.log("Error::::", error);
//         }
//     };
// };