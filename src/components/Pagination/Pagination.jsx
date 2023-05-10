import PropTypes from "prop-types";

const Pagination = (props) => {
  return (
    <>
      <button onClick={props.goToNextPage}>NEXT</button>
      <button
        onClick={props.goToPreviousPage}
        disabled={props.previousPageUrl === null ? true : false}
      >
        Previous
      </button>
    </>
  );
};

Pagination.propTypes = {
    goToNextPage: PropTypes.func.isRequired,
    goToPreviousPage: PropTypes.func.isRequired,
    previousPageUrl : PropTypes.any,
};

export default Pagination;
