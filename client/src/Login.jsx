import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {name, email, password})
        .then(result => {
            console.log(result)
            if(result.data==="Success") {
              navigate('/home') 
            } 
            })
        .catch(console.error(err))
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="Email">
                        <strong>Email</strong>
                        </label>
                    <input
                        type="email"
                        className="form-control rounded-0"
                        placeholder="Enter email"
                        name="email"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="Password">
                        <strong>Password</strong>
                        </label>
                    <input
                        type="password"
                        className="form-control rounded-0"
                        placeholder="Enter password"
                        name="password"
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                    </form>
                    <p>Already Have an Account</p>
                    <Link to = "/register" className="btn btn-default border w-100 bg-light rounded-0">
                        Sign Up
                    </Link>
            </div>
        </div>      
    );
  }


  export default Login;