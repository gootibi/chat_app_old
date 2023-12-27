import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import '../styles/Auth.css'

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = (props) => {
    const { setIsAuth } = props;
    const singInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (error) {
            console.error(error);
        }
    };

    return <div className="auth">
        <p> Sign in With Google To Continue </p>
        <button type="button" onClick={singInWithGoogle}> Sign In With Google</button>
    </div>
};