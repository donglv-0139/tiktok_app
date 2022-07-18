import axios from "axios";

export const onLogin = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/login", data);
// https://tiktok-bee.herokuapp.com/
