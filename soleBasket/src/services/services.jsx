import axios from "axios"

export const GetData = async () => axios.get("/api/products");
