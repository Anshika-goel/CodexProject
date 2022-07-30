import { ESAMUDAY_URL } from "./constants";
import axios from "axios";

export const getAllComplianceData = async () => {
    const response = await axios.get(`${ESAMUDAY_URL}`);
    return response.data;
}
