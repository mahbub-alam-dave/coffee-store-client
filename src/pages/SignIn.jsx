import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import ContextProvider from "../context/ContextProvider";
import { ContextValue } from "../context/ContextValues";
import Swal from "sweetalert2";

const SignIn = () => {
  const navigate = useNavigate()
  const { signInUser } = useContext(ContextValue);

  const handleSignInUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());
    signInUser(email, password)
      .then((result) => {
        // logged in successfully
        // update user last sign in time to database
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime
        };
        fetch('https://coffee-store-server-seven-alpha.vercel.app/users', {
          method: "PATCH",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(signInInfo)
        })
        .then(res => res.json)
        .then(data => {
          console.log('data after updating to db', data)
        })

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/users')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-md mx-auto mt-12 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In now!</h1>
        <form onSubmit={handleSignInUser} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign In</button>
          <p>
            Don't have an account ? Please,{" "}
            <Link to={"/sign-up"} className="text-blue-400">
              sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
