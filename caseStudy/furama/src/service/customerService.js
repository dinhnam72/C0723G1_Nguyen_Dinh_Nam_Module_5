import axios from "axios";
const ULR_CUSTOMER = "http://localhost:8080/customers";

export const getAll = async () =>{
    try {
        const res = await axios.get(ULR_CUSTOMER);
        return res.data;
    } catch (e){
        alert("Error!")
    }
}

export const getAllCustomer = async (page, name, customerTypeName) =>{
    try {
        const res = await axios.get(ULR_CUSTOMER+`?_page=${page}&name_like=${name}&customerType.name_like=${customerTypeName}`);
        return res;
    } catch (e){
        alert("Error!")
    }
}

export const createCustomer = async (values) => {
    try {
        const res = await axios.post(ULR_CUSTOMER, values);
        return res.status;
    } catch (e) {
        alert("Error!")
    }
}

export const getCustomerById = async (id) => {
    try {
        const res = await axios.get(`${ULR_CUSTOMER}/${id}`);
        return res.data;
    } catch (e) {
        alert("Error!")
    }
};

export const updateCustomer = async (values) => {
    try {
        const res = await axios.patch(`${ULR_CUSTOMER}/${values.id}`, values);
        return res.status;
    } catch (e) {
        alert("Error!")
    }
};

export const deleteCustomer = async (id) => {
    try {
        const res = await axios.delete(`${ULR_CUSTOMER}/${id}`);
        return res.status;
    } catch (e) {
        alert("Error!")
    }
}