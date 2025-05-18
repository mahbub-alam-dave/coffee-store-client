import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { ContextValue } from "../context/ContextValues";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate()
  const { createUser } = useContext(ContextValue);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { password, ...profileData } = Object.fromEntries(
      formData.entries()
    );
    // const name = formData.get("name")
    // const email = formData.get("email")
    // const password = formData.get("password")
    const {email} = profileData
    console.log(profileData, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result);
        // save user Profile Data  to MongoDB
        const userProfile = {
        ...profileData, 
        creationTime: result.user?.metadata?.creationTime,
        lastSignInTime: result.user?.metadata?.creationTime,
        }
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user profile data from db", data);
            if (data.insertedId) {

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account has created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/users')
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-md mx-auto mt-12 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Photo </label>
          <input
            type="text"
            name="Photo Url"
            className="input"
            placeholder="Photo Url"
          />
          <label className="label">Website</label>
          <input
            type="text"
            name="website"
            className="input"
            placeholder="Website"
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
          <button className="btn btn-neutral mt-4">Sign Up</button>
          <p>
            already signed up ? Please,{" "}
            <Link to={"/sign-in"} className="text-blue-400">
              login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
