import { ChangeEvent } from "react";
import "./index.css";

type Props = {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeHolder?: string;
  customClass?: string;
  error?: boolean;
  errorMsg?: string;
};

const Input = (props: Props) => {
  const { value, onChange, disabled, placeHolder, customClass } = props;
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      className={`input ${customClass ? customClass : ""}`}
      disabled={disabled ?? disabled}
      placeholder={placeHolder ?? placeHolder}
    />
  );
};

export default Input;
