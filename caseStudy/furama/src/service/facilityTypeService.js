import axios from "axios";
const URL_FACILITY_TYPE = "http://localhost:8080/facilityType"
export const getAllFacilityType = async () => {
    try {
        let res = await axios.get(URL_FACILITY_TYPE);
        return res.data;
    } catch (e) {
        alert("Error");
    }
}