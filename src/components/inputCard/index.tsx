import { ChangeEvent, useState } from "react";
import "./index.css";

const InputCard = () => {
  const [input, setInput] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (url: string) => {
    console.log(url);
  };

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
        <button className='cta' onClick={() => onSubmit(input)}>
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

export default InputCard;
