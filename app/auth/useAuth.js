import { useContext} from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import jwtDecode from 'jwt-decode';

export default useAuth = () => { 
    const {user, setUser} =  useContext(AuthContext);

    const logIn = (authtoken) => { 
        const user = jwtDecode(authtoken);
        setUser(user);
        authStorage.storeToken(authtoken);
    }
    const logOut = () => { 
        setUser(null);
        authStorage.removeToken();
    }
    return {user, logIn, logOut};
}