import "./index.css";

type Props = {
  disabled?: boolean;
  onClick: () => Promise<void>;
  text: string;
  customClass?: string;
};
const MainCta = (props: Props) => {
  const { disabled, onClick, text, customClass } = props;

  return (
    <button
      className={`cta ${customClass ? customClass : ""}`}
      onClick={onClick}
      disabled={disabled ?? disabled}>
      {text}
    </button>
  );
};

export default MainCta;
