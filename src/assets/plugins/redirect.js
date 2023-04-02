import React from 'react';
import { Route, Redirect} from "react-router-dom";

export default function RedirectWithStatus({ from, to, status }) {
    return (
      <Route
        render={({ staticContext }) => {
          if (staticContext) staticContext.status = status;
          return <Redirect from={from} to={to} />;
        }}
      />
    );
  }