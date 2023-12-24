import axios from "axios";
const URL_FACILITY = "http://localhost:8080/facilities";

export const getAll = async () => {
    try {
        let res = await axios.get(URL_FACILITY);
        return res.data;
    } catch (e){
        console.log("Error!")
    }
}


export const getAllFacility = async (name) => {
    try {
        let res = await axios.get(URL_FACILITY+`?name_like=${name}`);
        return res.data;
    } catch (e){
        console.log("Error!")
    }
}

export const createFacility = async (values) => {
    try {
        let res = await axios.post(URL_FACILITY, values);
        return res.status;
    } catch (e){
        alert("Error!")
    }
}

export const getFacilityById = async (id) => {
    try {
        let res = await axios.get(URL_FACILITY+`/${id}`);
        return res.data;
    } catch (e){
        alert("Error!")
    }
}

export const updateFacility = async (values) => {
    try {
        let res = await axios.patch(URL_FACILITY+`/${values.id}`, values);
        return res.status;
    } catch (e){
        alert("Error!")
    }
}

export const deleteFacility = async (id) => {
    try {
        let res = await axios.delete(URL_FACILITY+`/${id}`);
        return res.status;
    } catch (e){
        alert("Error!")
    }
}