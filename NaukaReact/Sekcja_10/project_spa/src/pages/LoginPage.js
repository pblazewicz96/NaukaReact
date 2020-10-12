import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">
        Podaj login
        <input type="text" />
      </label>
      <label htmlFor="">
        Podaj haslo
        <input type="password" />
      </label>
    </div>
  );
};

export default LoginPage;
