import axios from "axios";
const URL_CUSTOMER_TYPE = "http://localhost:8080/customerType"
export const getAllCustomerType = async () => {
    try {
        let res = await axios.get(URL_CUSTOMER_TYPE);
        return res.data;
    } catch (e) {

    }
}

export const getCustomerTypeById= async (id) => {
    try {
        let res = await axios.get(URL_CUSTOMER_TYPE+`/${id}`);
        return res.data;
    } catch (e) {

    }
}