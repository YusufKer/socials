import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Navigation(){
    return(
        <nav className="navigation">
            <ul>
                <li><Link to="/signup">signup</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/settings">settings</Link></li>
            </ul>
        </nav>
    )
}