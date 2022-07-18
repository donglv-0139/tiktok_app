import axios from "axios";

export const getUser = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/signup", data);
