import Base from 'App';
import HomePage from 'HomePage';
import DashboardPage from 'DashboardPage';
import LoginPage from 'LoginPage';
import SignUpPage from 'SignUpPage';
import Auth from 'Auth';


const routes = {
  component: Base,
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserLoggedIn()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
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
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.logoutUser();

        // change the current URL to /
        replace('/');
      }
    }
  ]
};

export default routes;
