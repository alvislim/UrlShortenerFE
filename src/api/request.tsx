import axios from "axios";

interface PostUrl {
  message: string;
  payload: {
    long: string;
    short: string;
  };
  success: boolean;
  code: number;
}

const postUrl = async (url: string): Promise<PostUrl> => {
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
