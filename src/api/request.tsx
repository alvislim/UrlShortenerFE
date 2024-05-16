import axios from "axios";

const postUrl = async (url: string) => {
  return axios
    .post("http://localhost:5173/post", { origUrl: url })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export { postUrl };
