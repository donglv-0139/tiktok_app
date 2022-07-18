import axios from "axios";

//like video
export const likeVideo = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/like_video", data);
export const checkLikeVideo = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/check_like_video", data);
export const countLikeVideo = (id) =>
  axios.get("https://tiktok-bee.herokuapp.com/api/count_like/" + id);
export const dislikeVideo = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/dislike_video", data);
export const getVideoLike = (id) =>
  axios.get("https://tiktok-bee.herokuapp.com/api/count_video_like/" + id);
export const getAllVideoLike = (id) =>
  axios.get("https://tiktok-bee.herokuapp.com/api/load_all_like_video/" + id);

// like cmt

export const likeCmt = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/like_comment", data);
export const deleteLikeCmt = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/delete_like_cmt", data);
export const deleteLikeRep = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/delete_like_rep", data);
