import React from "react";
import Home from "Home";
import DashboardPage from "DashboardPage";
import LoginPage from "LoginPage";
import SignUpPage from "SignUpPage";
import ProfilePage from "ProfilePage";
import Logout from "Logout";
//import AboutPage from "AboutPage";
// import Collegium from "Collegium";
// import BoardPage from "BoardPage";
// import ForAuthors from "ForAuthors";
// import EventsAndNews from "EventsAndNews";
// import IssueContent from "IssueContent";
// import Policy from "Policy";
import RedactorPage from "RedactorPage";
import Auth from "Auth";
import staticPagesRoutes from "StaticPagesRoutes";

const routes = [
  {
    path: "/",
    exact: true,
    render: props => (Auth.isUserLoggedIn() ? <DashboardPage /> : <Home />)
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
