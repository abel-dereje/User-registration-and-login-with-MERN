import { useState } from "react";
import axios from 'axios'


function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => console.log(result))
        .catch(console.error(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Name">
                        <strong>Name</strong>
                    </label>
                    <input
                        type="text"
                        className="form-control rounded-0"
                        placeholder="Enter name"
                        name="name"
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                     />
                    </div>
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
                    <button type="submit" className="btn btn-primary w-100 rounded-0">
                        Sign Up
                    </button>
                    <p className="forgot-password text-right">
                    Already registered <a href="/Login">sign in?</a>
                    </p>
              </form>
            </div>
        </div>      
    );
  }


  export default Signup;