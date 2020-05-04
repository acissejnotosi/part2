import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => {
    return response.data;
  });
};

const createNumber = nameObject => {
  const request = axios.post(baseUrl, nameObject);
  return request.then((response) => {
    return response.data;
  });
};

export default {
  getAll,
  createNumber,
};
