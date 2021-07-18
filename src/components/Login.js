import {useRef} from "react";
import {useAuth} from "../context/authContext"
import "../App.css";


export default function Login(){
    const {login} = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();

    function submitForm(e){
        e.preventDefault();
        login(emailRef.current.value,passwordRef.current.value);
        emailRef.current.value = '';
        passwordRef.current.value = '';
    }

    return(
        <div className="authentication__outer">
            <form className="authentication" onSubmit={submitForm}>
                <input type="email" name="email" placeholder="email" ref={emailRef}/>
                <input type="password" name="password" placeholder="password" ref={passwordRef}/>
                <button>Login</button>
            </form>
        </div>
    )
}