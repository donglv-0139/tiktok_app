import axios from "axios";

export const loadHashtag = () =>
  axios.get("https://tiktok-bee.herokuapp.com/api/load_hashtag");
