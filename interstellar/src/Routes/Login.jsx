import { Link, Navigate } from "react-router-dom";
import Home from "./Home";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Auth, loginUser } = useContext(AuthContext);

  const userData = {
    email,
    password
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://reqres.in/api/login", userData)
      .then((res) => {
        alert("Login Successfully...")
        loginUser(res.data.token)
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Home />
      {Auth.token ? <Navigate to={"/dashboard"}></Navigate> : (
          <form className="login-form" onSubmit={handleSubmit} data-testid="login-form">
            <div className="d-flex flex-column text-start">
              <label className="mb-1">Email</label>
              <input
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="email-input"
                  type="email"
                  placeholder="email" />
            </div>
            <div>
              <label >Password</label>
              <input
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="password-input"
                  type="password"
                  placeholder="password"
                />
            </div>
            <div>
              <input data-testid="form-submit" type="submit" value="SUBMIT" />
            </div>
            <div>
            <Link to="/dashboard" style={{textDecoration:"none"}}>Go Back</Link>
          </div>
          </form>
      )}

    </>
  );
}
export default Login;