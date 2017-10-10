import React from 'react';
import Home from 'Home';
import DashboardPage from 'DashboardPage';
import LoginPage from 'LoginPage';
import SignUpPage from 'SignUpPage';
import ProfilePage from 'ProfilePage';
import Logout from 'Logout';
import About from 'About';
import Collegium from 'Collegium';
import Board from 'Board';
import ForAuthors from 'ForAuthors';
import EventsAndNews from 'EventsAndNews';
import IssueContent from 'IssueContent';
import Policy from 'Policy';
import RedactorPage from 'RedactorPage';
import Auth from 'Auth';


const routes = [
  {
    path: '/',
    exact: true,
    render: (props) => (
      Auth.isUserLoggedIn() ? (
        <DashboardPage />
      ) : (
        <Home />
      )
    )
  },

  {
    path: '/login',
    component: LoginPage
  },

  {
    path: '/signup',
    component: SignUpPage
  },

  {
    path: '/profile',
    component: ProfilePage
  },

  {
    path: '/logout',
    component: Logout
  },

  {
    path: '/about',
    component: About
  },

  {
    path: '/collegium',
    component: Collegium
  },

  {
    path: '/board',
    component: Board
  },

  {
    path: '/for-authors',
    component: ForAuthors
  },

  {
    path: '/events',
    component: EventsAndNews
  },

  {
    path: '/issue-content',
    component: IssueContent
  },

  {
    path: '/policy',
    component: Policy
  },

  {
    path: '/redactor',
    component: RedactorPage
  }
];

export default routes;
