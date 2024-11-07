import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Floor from "../pages/Floor/Floor";
import Forbidden from "../pages/Forbidden/Forbidden";

const PrivateRoute = () => {
    //FILL HERE 3.6
    const {index} = useParams()
    const floorAccess = useSelector((state: any) => state.floorAccess)
    if (floorAccess[+index!]) {
        return <Floor /> 
    }
    return <Forbidden />
};

export default PrivateRoute