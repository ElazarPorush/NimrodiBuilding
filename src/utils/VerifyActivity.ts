import { useParams } from "react-router-dom";
import roles from "../data/roles.json";
import { useSelector } from "react-redux";

const useIsVerified = () => {
  const {index} = useParams()
  const currRole = useSelector((state: any) => state.role)
  if (roles.findIndex(currRole) >= +index){
    return true
  }
  return false
};

export default useIsVerified;
