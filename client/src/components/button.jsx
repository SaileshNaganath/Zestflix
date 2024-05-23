import { twMerge } from "tailwind-merge";
import PropTypes from 'prop-types';


export const Button = ( {children, size , className, onClick} ) => {
  const sizeClassNames = {
    small: "text-xs px-3 py-2",
    medium: "text-sm px-8 py-3",
    large: "text-base px-8 py-4",
  };

  return (
    <button
      className={twMerge(
        "text-black rounded-full bg-white hover:text-white hover:bg-slate-600 hover:scale-105 duration-500",
        sizeClassNames[size],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};


Button.propTypes = {
  children: PropTypes.node.isRequired, // Children must be a React node and is required
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Size must be one of these strings
  className: PropTypes.string,
  onClick: PropTypes.func,  // className must be a string
};