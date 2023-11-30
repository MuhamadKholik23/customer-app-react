import axios from "axios";

const BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: `${BASE_URL}/customers`,
});

export const getAllCustomers = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

export const getCustomerById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer by ID:", error);
    throw error;
  }
};

export const createCustomer = async (data) => {
  try {
    const response = await api.post("/", data);
    return response.data;
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};

export const updateCustomer = async (id, data) => {
  try {
    const response = await api.put(`/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating customer:", error);
    throw error;
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw error;
  }
};
