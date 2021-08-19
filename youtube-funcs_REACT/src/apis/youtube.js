import axios from "axios";

const KEY = `AIzaSyAS62kZo0zHh1cn05zB1cb0xgqyNyBtE7k`;

export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3`,
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
