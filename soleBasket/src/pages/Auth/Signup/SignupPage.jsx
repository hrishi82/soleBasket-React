import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { useData } from "../../../context/dataContext";
import {validateEmail, validatePassword} from "../../../utils/authUtils"

export const SignupPage = () => {

    const [signupForm, setSignupForm] = useState({firstName: '',
    lastName: '', email: "", password: ""})
    const [authInputError, setAuthInputError] = useState({ email: "", password: "", errorMessage: "" });


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
    }, [token]);

    function formHandler(e){
        e.preventDefault()

        const {firstName, lastName, email, password} = signupForm
        try{
          if (email && password && firstName && lastName !== '') {
            (async () => {
              signupUser(firstName, lastName, email, password);
            })();
          }else{
            setAuthInputError({...authInputError, errorMessage: "Please provide proper input"})
          }
        }catch(err){
          console.log(err)
        }
    }

    const credentialHandler = (e) =>{

      setAuthInputError({...authInputError, errorMessage: ""})

      if(e.target.name=== "email"){
        setSignupForm({ ...signupForm, email: e.target.value })
        if (!validateEmail(e.target.value)) {
          setAuthInputError({
            ...authInputError,
            email: 'Invalid email format',
          });
        } else {
          setAuthInputError({ ...authInputError, email: '' });
        }
        
        
      }else if(e.target.name=== "password"){
        
        setSignupForm({ ...signupForm, password: e.target.value })
        if (!validatePassword(e.target.value)) {
          setAuthInputError({
            ...authInputError,
            password:
              'Password should be in 8 to 20 chars and should have one digit',
          });
        } else {
          setAuthInputError({ ...authInputError, password: '' });
        }
      }else if(e.target.name=== "firstname"){
        setSignupForm({...signupForm, firstName: e.target.value})
      }else if(e.target.name=== "lastname"){
        setSignupForm({...signupForm, lastName: e.target.value})
      }
      
    }
  

  return (
    <div className="auth-page-container">
      <div className="auth-content-container">
        <div className="auth-title">
          <h2 className="text-center">Signup</h2>
        </div>

        {authInputError.errorMessage !== "" ? (
                <div className='input auth-input-error-cont text-center'>
                  {authInputError.errorMessage}
                </div>
              ) : null}

        <div className="input">
          <label>First Name</label>
          <input className="input-txt" type="name" name="firstname" value={signupForm.firstName} onChange={(e)=>credentialHandler(e)} />
        </div>  

        <div className="input">
          <label>Last Name</label>
          <input className="input-txt" type="name" name="lastname" value={signupForm.lastName} onChange={(e)=>credentialHandler(e)} />
        </div>  

        <div className="input">
          <label>Email</label>
          <input className="input-txt" type="email" name="email" value={signupForm.email} onChange={(e)=>credentialHandler(e)}/>
        </div>
        {authInputError.email ? (
                <div className='input auth-input-error-cont'>
                  {authInputError.email}
                </div>
              ) : null}

        <div className="input">
          <label>Password</label>
          <input className="input-txt" type="password"  name="password" value={signupForm.password} onChange={(e)=>credentialHandler(e)}/>
        </div>
        {authInputError.password ? (
                <div className='input auth-input-error-cont'>
                  {authInputError.password}
                </div>
              ) : null}

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
