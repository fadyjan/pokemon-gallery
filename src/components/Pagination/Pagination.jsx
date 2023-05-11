import PropTypes from "prop-types";
import module from "./Pagination.module.css";
const Pagination = (props) => {
  return (
    <div id={module.ButtonWrapper}>
      <button
        onClick={props.goToPreviousPage}
        disabled={props.previousPageUrl === null ? true : false}
      >
        Previous
      </button>
      <button id = {module.NextBTn} onClick={props.goToNextPage}>NEXT</button>
    </div>
  );
};

Pagination.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired,
  previousPageUrl: PropTypes.any,
};

export default Pagination;
