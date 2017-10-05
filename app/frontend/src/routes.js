import React from 'react';
import HomePage from 'HomePage';
import DashboardPage from 'DashboardPage';
import LoginPage from 'LoginPage';
import SignUpPage from 'SignUpPage';
import ProfilePage from 'ProfilePage';
import Logout from 'Logout';
import About from 'About';
import IssueContent from 'IssueContent';
import ForAuthors from 'ForAuthors';
import Policy from 'Policy';
import EditorialOffice from 'EditorialOffice';
import Auth from 'Auth';


const routes = [
  {
    path: '/',
    exact: true,
    render: (props) => (
      Auth.isUserLoggedIn() ? (
        <DashboardPage />
      ) : (
        <HomePage />
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
    path: '/issue-content',
    component: IssueContent
  },

  {
    path: '/for-authors',
    component: ForAuthors
  },

  {
    path: '/policy',
    component: Policy
  },

  {
    path: '/editorial-office',
    component: EditorialOffice
  },
];

export default routes;
