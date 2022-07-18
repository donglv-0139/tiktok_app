import axios from "axios";

export const onUpdate = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/update_user", data);
