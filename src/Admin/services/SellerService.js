import axios from "axios";
import AuthHeader from "./AuthHeader";

const API_URL = '/sellers'
const getAllPendingSellers = () => {
    return axios.get(`${API_URL}/`, { headers: AuthHeader() })
}

const getSellerById = (id) =>{
    return axios.get(`${API_URL}/${id}`, { headers: AuthHeader() })
}

const updateSellerById = (id) =>{    
    return axios.put(`${API_URL}/${id}`,{ headers: AuthHeader() })
}


const SellerService = {
    getAllPendingSellers,
    getSellerById,
    updateSellerById,
}
export default SellerService