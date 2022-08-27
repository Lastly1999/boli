import React from "react"
import { BrowserRouter as Router, Switch as Routes, Route } from "react-router-dom"
import history from "history"
import AuthRoute from "./AuthRoute";
import Login from "../views/Login"

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <AuthRoute></AuthRoute>
        <Route path="login" component={Login}></Route>
      </Routes>
    </Router >
  )
};

export default AppRouter;
