import React, { useEffect, useState } from "react";
import { ContextValue } from "./ContextValues";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebas-authentication/firebase.config";

const ContextProvider = ({ children }) => {
  const [allCoffees, setAllCoffees] = useState([]);
  const [users, setAllUsers] = useState([]);
  useEffect(() => {
    fetch(
      "https://coffee-store-server-seven-alpha.vercel.app/coffees"
    )
    .then((res) => res.json())
    .then((data) => setAllCoffees(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://coffee-store-server-seven-alpha.vercel.app/users"
    )
    .then((res) => res.json())
    .then((data) => setAllUsers(data));
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const values = {
    allCoffees,
    setAllCoffees,
    users,
    setAllUsers,
    createUser,
    signInUser,
  };
  return (
    <ContextValue.Provider value={values}>{children}</ContextValue.Provider>
  );
};

export default ContextProvider;
