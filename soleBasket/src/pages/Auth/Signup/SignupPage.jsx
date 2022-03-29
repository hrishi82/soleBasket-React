import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { useData } from "../../../context/dataContext";

export const SignupPage = () => {

    const [signupForm, setSignupForm] = useState({name: "", email: "", password: ""})

    const {dispatch} = useData()
    const { token, signupUser } = useAuth();
    const navigate = useNavigate();

    

    useEffect(() => {
        let id;
        if (token) {
          id = setTimeout(() => {
            navigate('/');
          }, 500);
        }
        return () => clearTimeout(id);
      });


    function formHandler(e){
        e.preventDefault()

        const {name, email, password} = signupForm
        if (email && password && name !== '') {
            (async () => {
              signupUser(email, password, name);
            })();
        }
    }
    

  return (
    <div className="auth-page-container">
      <div className="auth-content-container">
        <div className="auth-title">
          <h2 className="text-center">Signup</h2>
        </div>

        <div className="input">
          <label>Name</label>
          <input className="input-txt" type="name" value={signupForm.name} onChange={(e)=>setSignupForm({...signupForm, name: e.target.value})} />
        </div>  

        <div className="input">
          <label>Email</label>
          <input className="input-txt" type="email" value={signupForm.email} onChange={(e)=>setSignupForm({...signupForm, email: e.target.value})}/>
        </div>

        <div className="input">
          <label>Password</label>
          <input className="input-txt" type="password" value={signupForm.password} onChange={(e)=>setSignupForm({...signupForm, password: e.target.value})}/>
        </div>

        <div className="input input-flex-cont">
          <div className="input-condition-cont">
            <input type="checkbox" className="input-checkbox" />
            <p className="text spacing-sm">
              I accept all the Terms & Conditions
            </p>
          </div>
        </div>

        <div className="auth-form-btn-container">
          <button className="btn btn-primary" onClick={(e)=>formHandler(e)}>Create New Account</button>
        </div>

        <div className="text-center auth-action-signup-link-cont">
          <Link
            className="auth-page-link auth-action-signup-link"
            to="/loginpage"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};
