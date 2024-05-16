import { ChangeEvent, useState } from "react";
import axios from "axios";
import "./index.css";

const UrlCardInput = () => {
  const [input, setInput] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (url: string) => {
    console.log(url);
    axios
      .post("http://localhost:5173/post", { origUrl: url })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const disable = input.length === 0;

  return (
    <div className='card-container'>
      <p className='title'>Paste the URL to be shortened</p>
      <div className='input-wrapper'>
        <input
          type='text'
          value={input}
          onChange={(e) => onChange(e)}
          className='input'
          placeholder='Enter the link here'
        />
        <button
          className='cta'
          onClick={() => onSubmit(input)}
          disabled={disable}>
          Shorten URL
        </button>
      </div>
      <p className='desc'>
        ShortURL is a free tool to shorten URLs and generate short links
        <br />
        Shortener allows to create a shortened link making it easy to share
      </p>
    </div>
  );
};

export default UrlCardInput;
