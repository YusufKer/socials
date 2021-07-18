import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation";
import Wall from "./components/Wall";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {AuthProvider} from "./context/authContext";
import {PostProvider} from "./context/postContext";

function App() {
  //logged in state needs to be changed to come from authentication context
  const loggedIn = true;
  return (
    <Router>
      <Navigation/>
      <Switch>
        <AuthProvider>
          <div className="App">
            <Route exact path="/">
              {loggedIn?<PostProvider><Wall/></PostProvider>:<Redirect to="/login"/>}
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </div>
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
