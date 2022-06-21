import "./PlayfulText.css";

const PlayfulText = ({ children, className }) => (
  <p className={`playful ${className}`}>{children}</p>
);

export default PlayfulText;
