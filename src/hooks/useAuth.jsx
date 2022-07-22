import { useContext } from "react";
import Authcontext from "../context/Authprovider";

const useAuth = () => {

    return useContext(Authcontext)

}

export default useAuth;