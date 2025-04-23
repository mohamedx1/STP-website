import axios from "axios";

const API_URL = "https://api.example.com/users";

export const fetchUsers = () => axios.get(API_URL);
export const getUserById = (id) => axios.get(`${API_URL}/${id}`);
export const createUser = (userData) => axios.post(API_URL, userData);
