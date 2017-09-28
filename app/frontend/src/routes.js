import Base from 'App';
import HomePage from 'HomePage';
import LoginPage from 'LoginPage';
import SignUpPage from 'SignUpPage';


const routes = {
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: HomePage
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    }
  ]
};

export default routes;
