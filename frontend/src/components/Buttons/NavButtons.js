import { Link } from 'react-router-dom';

const NavButton = ({ path, text, handleClick }) => {
  return (
    <Link
      to={path}
      className="border-none bg-transparent font-primary  text-black"
      onClick={(e) => {
        handleClick();
      }}
    >
      {text}
    </Link>
  );
};
export default NavButton;
