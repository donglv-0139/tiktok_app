import axios from "axios";

export const onGetUser = (id) =>
  axios.get("https://tiktok-bee.herokuapp.com/api/get_user/" + id);
