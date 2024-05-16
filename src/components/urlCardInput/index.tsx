import { ChangeEvent, useState } from "react";
import "./index.css";
import { postUrl } from "@/api/request";
import { useUrlStore } from "@/store/url";

const UrlCardInput = () => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const { urlArr, setUrlArr } = useUrlStore();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = async (url: string) => {
    const res = await postUrl(url);
    if (res.success) {
      const shortUrl = res.payload.short;

      setError(false);
      const currArr = urlArr;

      if (!currArr.includes(shortUrl)) {
        currArr.push(shortUrl);
        setUrlArr(currArr);
      }
    } else {
      setInput("");
      setError(true);
    }
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
      {urlArr
        ? urlArr.map((url, index) => {
            return <p key={`${url}_${index}`}>{url}</p>;
          })
        : null}
    </div>
  );
};

export default UrlCardInput;
