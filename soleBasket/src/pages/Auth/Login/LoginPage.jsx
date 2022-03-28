import "../Auth.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { useData } from "../../../context/dataContext";
import { GetCartItems, loginServices } from "../../../services/services";

const LoginPage = () => {
  const { token, setToken, user, setUser } = useAuth();
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({ email: "", password: "" });

  useEffect(() => {
    let id;
    if (token) {
      id = setTimeout(() => {
        navigate("/");
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
          email: "adarshbalika@gmail.com",
          password: "adarshbalika",
        });
      
        response = await loginServices('adarshbalika@gmail.com', 'adarshbalika');
        
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

        const cartResponse = await GetCartItems({
          encodedToken: response.data.encodedToken,
        });
        if (cartResponse.status === 200 || cartResponse.status === 201) {
          dispatch({
            type: "SET_CART_LIST",
            payload: cartResponse.data.cart
          });
        }


        setUser(response.data.foundUser);
        setToken(response.data.encodedToken);
        navigate("/productpage");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="auth-page-container">
        <div className="auth-content-container">
          <div className="auth-title">
            <h2 className="text-center">Login</h2>
          </div>

          <div className="input">
            <label>Email</label>
            <input
              className="input-txt"
              type="email"
              value={loginUser.email}
              onChange={(e) =>
                setLoginUser({ ...loginUser, email: e.target.value })
              }
            />
          </div>

          <div className="input">
            <label>Password</label>
            <input
              className="input-txt"
              type="password"
              value={loginUser.password}
              onChange={(e) =>
                setLoginUser({ ...loginUser, password: e.target.value })
              }
            />
          </div>

          <div className="input input-flex-cont">
            <span>
              <input type="checkbox" className="input-checkbox" />
              <span className="text">Remember Me</span>
            </span>

            <a
              href="#"
              className="auth-form-forget-pass-alignment auth-page-link"
            >
              Forget your Password?
            </a>
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
