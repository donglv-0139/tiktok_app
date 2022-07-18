import axios from "axios";

export const onFollow = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/follow", data);
export const onCheckFollow = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/check_follow", data);
export const onUnfollow = (data) =>
  axios.post("https://tiktok-bee.herokuapp.com/api/unfollow", data);
export const onCountFollow = (id) =>
  axios.get("https://tiktok-bee.herokuapp.com/api/count_follow/" + id);
export const onFollowingUser = (id) =>
  axios.get("https://tiktok-bee.herokuapp.com/api/following_user/" + id);
export const onFollowingUserList = (id) =>
  axios.get("https://tiktok-bee.herokuapp.com/api/following_user_list/" + id);
