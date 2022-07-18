import axios from "axios";

export const saveComment = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/comments", data);
export const loadComment = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/load_comments", data);
export const saveReply = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/replies", data);
export const loadReply = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/load_replies", data);
