import axios from "axios";

export const onGetVideoByUser = (id) =>
  axios.get("https://tiktok-bee.herokuapp.com/api/get_video/user/" + id);
export const onGetVideoById = (id) =>
  axios.get("https://tiktok-bee.herokuapp.com/api/get_video/" + id);
export const onGetAllVideo = () =>
  axios.get("https://tiktok-bee.herokuapp.com/api/load_videos");
export const onUpVideo = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/upload_video", data);
