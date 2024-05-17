import { twMerge } from "tailwind-merge";
import PropTypes from 'prop-types';


export const Container = ( {children, className} ) => {
  return (
    <div className={twMerge("mx-auto max-w-[980px] px-6 py-3", className)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
} 