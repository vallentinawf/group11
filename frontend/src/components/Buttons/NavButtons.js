import { Link } from 'react-router-dom';

const NavButton = ({ path, text, handleClick, bg, rounded }) => {
  // const classNameItems =
  //   'border-none bg-transparent font-primary  text-black bg-orange h-[50px]' +
  //   { bg } +
  //   ' ' +
  //   { rounded };
  // console.log(bg);

  return (
    <Link to={path}>
      <button
        className="border-none bg-transparent font-primary  text-black bg-orange h-[50px]"
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
