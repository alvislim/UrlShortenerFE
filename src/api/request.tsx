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
  console.log(import.meta.env);
  const envUrl = import.meta.env.DEV
    ? import.meta.env.VITE_LOCAL_URL
    : import.meta.env.VITE_PROD_URL;
  return axios
    .post(`${envUrl}post`, { origUrl: url })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export { postUrl };
