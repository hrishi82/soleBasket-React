import "../Auth.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { useData } from "../../../context/dataContext";
import { loginServices } from "../../../services/services";
import {validateEmail} from "../../../utils/authUtils"

const LoginPage = () => {
  const { token, setToken, user, setUser } = useAuth();
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [authInputError, setAuthInputError] = useState({ email: "", password: "", errorMessage: "" });

  useEffect(() => {
    let id;
    if (token) {
      id = setTimeout(() => {
        navigate('/');
      }, 500);
    }
    return () => clearTimeout(id);
  }, [token]);

  const loginHandler = async (e, loginUser, setLoginUser) => {
    e.preventDefault();
    try {
      let response;
      if (e.target.innerText === "Login as Guest") {
        setLoginUser({
          email: "johndoe@gmail.com",
          password: "johnDoe123",
        });
      
        response = await loginServices('johndoe@gmail.com', 'johnDoe123');
        
      } else {
        response = await loginServices(loginUser.email, loginUser.password);
      }

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            token: response.data.encodedToken,
            user: response.data.foundUser,
          })
        );

        setUser(response.data.foundUser);
        setToken(response.data.encodedToken);
        navigate("/productpage");

       }
    } catch (err) {
      setAuthInputError({...authInputError, errorMessage: "Please provide proper input or credentials"})

    }
  };

  const credentialHandler = (e) =>{

    setAuthInputError({...authInputError, errorMessage: ""})

    if(e.target.name=== "email"){
      setLoginUser({ ...loginUser, email: e.target.value })
      if (!validateEmail(e.target.value)) {
        setAuthInputError({
          ...authInputError,
          email: 'Invalid email format',
        });
      } else {
        setAuthInputError({ ...authInputError, email: '' });
      }
      
      
    }else if(e.target.name=== "password"){
      setLoginUser({ ...loginUser, password: e.target.value })
    }
    
  }

  return (
    <>
      <div className="auth-page-container">
        <div className="auth-content-container">
          <div className="auth-title">
            <h2 className="text-center">Login</h2>
          </div>

          {authInputError.errorMessage !== "" ? (
                <div className='input auth-input-error-cont text-center'>
                  {authInputError.errorMessage}
                </div>
              ) : null}

          <div className="input">
            <label>Email</label>
            <input
              className="input-txt"
              name="email"
              type="email"
              value={loginUser.email}
              onChange={(e) =>
                credentialHandler(e)
              }
            />
          </div>

          {authInputError.email ? (
                <div className='input auth-input-error-cont'>
                  {authInputError.email}
                </div>
              ) : null}

          <div className="input">
            <label>Password</label>
            <input
              className="input-txt"
              type="password"
              name="password"
              value={loginUser.password}
              onChange={(e) =>
                credentialHandler(e)
              }
            />
          </div>

          <div className="input input-flex-cont">
            <div className="input-condition-cont">
              <input type="checkbox" className="input-checkbox" />
              <p className="text spacing-sm">Remember Me</p>
            </div>

            <Link
              to="/loginpage"
              className="auth-form-forget-pass-alignment auth-page-link"
            >
              Forgot your Password?
            </Link>
          </div>

          <div className="auth-form-btn-container">
            <button
              className="btn btn-primary auth-form-btn"
              onClick={(e) => loginHandler(e, loginUser, setLoginUser)}
            >
              Login
            </button>

            <button
              className="btn btn-secondary auth-form-btn"
              onClick={(e) => loginHandler(e, loginUser, setLoginUser)}
            >
              Login as Guest
            </button>
          </div>

          <div className="text-center auth-action-signup-link-cont">
            <Link
              to="/signuppage"
              className="auth-page-link auth-action-signup-link"
            >
              Create new account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { LoginPage };
