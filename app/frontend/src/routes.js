import React from "react";
import HomePage from "HomePage";
import DashboardPage from "DashboardPage";
import LoginPage from "LoginPage";
import SignUpPage from "SignUpPage";
import ProfilePage from "ProfilePage";
import Logout from "Logout";
import RedactorPage from "RedactorPage";
import Auth from "Auth";
import staticPagesRoutes from "StaticPagesRoutes";

const routes = [
  {
    path: "/",
    exact: true,
    render: props => (Auth.isUserLoggedIn() ? <DashboardPage /> : <HomePage />)
  },

  {
    path: "/login",
    component: LoginPage
  },

  {
    path: "/signup",
    component: SignUpPage
  },

  {
    path: "/profile",
    component: ProfilePage
  },

  {
    path: "/logout",
    component: Logout
  },

  {
    path: "/redactor",
    component: RedactorPage
  },

  ...staticPagesRoutes
];

export default routes;
