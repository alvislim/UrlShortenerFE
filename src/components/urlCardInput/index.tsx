import { ChangeEvent, useState } from "react";
import "./index.css";
import { postUrl } from "@/api/request";
import { useUrlStore } from "@/store/url";
import MainCta from "@/components/mainCta";
import Input from "@/components/input";

const UrlCardInput = () => {
  const [input, setInput] = useState<string>("");
  const [onCopy, setOnCopy] = useState<number>(Infinity);
  const [error, setError] = useState<{
    error: boolean;
    code?: number;
    msg?: string;
  }>({
    error: false,
  });

  const { urlArr, setUrlArr } = useUrlStore();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = async (url: string) => {
    const res = await postUrl(url);
    if (res.success) {
      const shortUrl = res.payload.short;

      setError({ error: false });
      const currArr = urlArr;

      if (!currArr.includes(shortUrl)) {
        currArr.push(shortUrl);
        setUrlArr(currArr);
      }
    } else {
      setError({ error: true, code: res.code, msg: res.message });
    }
  };

  const copyToClipBoard = async (string: string, index: number) => {
    try {
      await navigator.clipboard.writeText(string);
      setOnCopy(index);
    } catch (err) {
      throw err;
    }
  };

  const disable = input.length === 0;

  return (
    <div className='card-container'>
      <p className='title'>Paste the URL to be shortened</p>
      <div className='input-wrapper'>
        <Input onChange={(e) => onChange(e)} value={input} />
        <MainCta
          disabled={disable}
          onClick={async () => await onSubmit(input)}
          text='Shorten URL'
        />
      </div>
      {error.error ? <p className='error-msg'>{error.msg}</p> : null}
      <p className='desc'>
        ShortURL is a free tool to shorten URLs and generate short links
        <br />
        Shortener allows to create a shortened link making it easy to share
      </p>
      {urlArr
        ? urlArr.map((_, index, arr) => {
            const reversedIndex = arr.length - 1 - index;
            const currEle = arr[arr.length - 1 - index];
            return (
              <div
                className='short-url-wrapper'
                key={`${currEle}_${reversedIndex}`}>
                <Input value={currEle} disabled={true} />
                <MainCta
                  disabled={false}
                  text='Copy URL'
                  onClick={async () =>
                    await copyToClipBoard(currEle, reversedIndex)
                  }
                />
                {onCopy === reversedIndex ? (
                  <span key={reversedIndex} className='on-copied-prompt'>
                    Copied!
                  </span>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default UrlCardInput;
