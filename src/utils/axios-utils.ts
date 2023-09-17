import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:5000" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${options.token}`;

  return client(options);
};
