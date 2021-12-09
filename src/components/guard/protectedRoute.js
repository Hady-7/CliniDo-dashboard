import React, { Component } from "react";
import { Route, Navigate } from "react-router-dom";
export const ProtectedRoute = ({
  component: Component,
  isAuth: isAuth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} />;
        } else {
          return (
            <Navigate
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
