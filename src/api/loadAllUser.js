import axios from "axios";

export const onLoadAll = () =>
  axios.get("https://tiktok-bee.herokuapp.com/api/load_users");
