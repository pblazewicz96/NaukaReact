import React from "react";
import { Route, Redirect } from "react-router-dom";

const permision = false;

const AdmintPage = () => {
  return (
    <Route
      render={() =>
        permision ? <h3>Hejka Admin</h3> : <Redirect to="/login" />
      }
    />
  );
};

export default AdmintPage;
