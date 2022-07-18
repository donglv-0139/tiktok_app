import axios from "axios";

export const get_users = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/search_users", data);
export const get_videos = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/search_videos", data);
