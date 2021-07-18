import {useRef} from "react";
import {useAuth} from "../context/authContext"
import "../App.css";


export default function Signup(){
    const {signup} = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();

    function submitForm(e){
        e.preventDefault();
        signup(emailRef.current.value,passwordRef.current.value);
        emailRef.current.value = '';
        passwordRef.current.value = '';
    }

    return(
        <div className="authentication__outer">
            <form className="authentication" onSubmit={submitForm}>
                <input type="email" name="email" placeholder="email" ref={emailRef}/>
                <input type="password" name="password" placeholder="password" ref={passwordRef}/>
                <button>Signup</button>
            </form>
        </div>
    )
}