import axios from "axios";
const URL_ACCOMPANIED_SERVICE = "http://localhost:8080/accompaniedServices"
export const getAllAccompaniedService = async () => {
    try {
        let res = await axios.get(URL_ACCOMPANIED_SERVICE);
        return res.data;
    } catch (e) {
        alert("Error");
    }
}