import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Load from "../../components/Load";

export default function PrivateRoute({ children }) {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Load />;
  }

  if (user) {
    return children;
  }
  return (
    <>
      <Navigate state={location.pathname} to={"/login"} />
    </>
  );
}
