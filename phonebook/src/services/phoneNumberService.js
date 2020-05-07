import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

const createNumber = async nameObject => {
  const request = axios.post(baseUrl, nameObject);
  const response = await request;
  return response.data;
};

const deleteNumber = async id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  const response = await request;
  return response.data;
};

export default {
  getAll,
  createNumber,
  deleteNumber
};
