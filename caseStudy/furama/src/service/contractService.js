import axios from "axios";
const URL_CONTRACT = "http://localhost:8080/contracts";
export const getAllContract = async () => {
    try {
        const res = await axios.get(URL_CONTRACT);
        return res.data;
    } catch (e) {
        console.log("Error");
    }
}

export const create = async (contract) => {
    try {
        const res = await axios.post(URL_CONTRACT, contract);
        return res.status;
    }catch (e) {
        console.log("Error")
    }
}