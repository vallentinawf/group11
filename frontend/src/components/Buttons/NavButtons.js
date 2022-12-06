import { Link } from 'react-router-dom';

const NavButton = ({ path, text, handleClick }) => {
  return (
    <Link to={path}>
      <button
        className="border-none bg-transparent font-primary  text-black"
        onClick={(e) => {
          handleClick();
        }}
      >
        {text}
      </button>
    </Link>
  );
};

export default NavButton;
