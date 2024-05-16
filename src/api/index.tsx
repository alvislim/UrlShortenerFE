import axios from "axios";

const postUrl = async (url: string) => {
  return axios
    .post("http://localhost:5173/post", { origUrl: url })
    .then((res) => {
      return res.status;
    })
    .catch((error) => {
      return error.response.status;
    });
};

export { postUrl };
