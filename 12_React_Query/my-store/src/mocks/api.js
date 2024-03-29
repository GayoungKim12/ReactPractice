import axios from "axios";

export const getUser = () => {
  return axios.get("/user").then((res) => res.data);
};

export const updateNickname = (nickname) => {
  return axios.put(`/update-nickname?nickname=${nickname}`);
};

export const getPosts = () => {
  return axios.get("/posts").then((res) => res.data);
}
