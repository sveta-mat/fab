import React, { useState } from "react";
import s from "./Registration.module.css";

import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Entry from "./Entry";
import Welcome from "./Welcome";

const Registration = () => {
  const adminUser = {
    email: "svetamatinyan@mail.ru",
    password: "sveta96",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      setUser({
        email: details.email,
      });
    } else {
      setError("Սխալ գաղտնաբառ");
    }
  };

  const Logout = () => {
    setUser({ email: "" });
  };
  return (
    <div>
     <div className="home1">
        <NavLink to="/" className="homeIcon">
          <FaHome className="icon12" />
        </NavLink>
      </div>
      <div>
        {user.email != "" ? (
          <div className={s.welcome}>
            <Welcome />
            <button className={s.btnwelcome} onClick={Logout}>
              Դուրս Գալ
            </button>
          </div>
        ) : (
          <Entry Login={Login} error={error} />
        )}
      </div>
    </div>
  );
};

export default Registration;
