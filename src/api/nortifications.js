import axios from "axios";

export const onGetNorti = (id) =>
  axios.get("https://tiktok-bee.herokuapp.com/api/get_nortifications/" + id);
export const markAsRead = (id) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/mark_read", { id: id });
