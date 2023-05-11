import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
  return (
    <ClipLoader color="#EF5350"  speedMultiplier = "0.5" size ={window.innerWidth > 650 ? "500px" : "250px"} />
  )
}

export default LoadingSpinner
