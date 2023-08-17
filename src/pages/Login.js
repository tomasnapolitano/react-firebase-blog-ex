import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../App";


const Login = () => {

    let navigate = useNavigate();
    const { isAuth, setIsAuth } = useContext(authContext);

    const handleSignIn = () =>{
        signInWithPopup(auth,provider).then((result)=> {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        })
    }
  return (
        <div>
            {!isAuth ? 
            <div>
                <p>Sign In with Google to Continue</p>
                <button className="" onClick={handleSignIn}>Sign In</button>
            </div>
            :
            <div>
                <p>Account already logged in.</p>
            </div>
            }
        </div>
    )
    
}

export default Login