import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';
import TopicChoice from '../pages/topicChoice';
import HomePage from '../pages/home';
import IRoute from '../interfaces/route';
import CategoryChoice from '../pages/categoryChoice';
import UserProfile from '../pages/userProfile';
import AboutPage from '../pages/about';

const routes: IRoute[] = [
  { path: '/', name: 'Home Page', component: HomePage, exact: true },
  { path: '/log-in', name: 'Login Page', component: LoginPage, exact: true },
  { path: '/sign-up', name: 'Signup Page', component: SignupPage, exact: true },
  { path: '/topic-choice', name: 'Topic Choice Page', component: TopicChoice, exact: true },
  {
    path: '/category-choice',
    name: 'Category Choice Page',
    component: CategoryChoice,
    exact: true,
  },
  { path: '/user-profile', name: 'User Profile Page', component: UserProfile, exact: true },
  { path: '/about', name: 'About Page', component: AboutPage, exact: true },
  { path: '/about/:number', name: 'About Page', component: AboutPage, exact: true },
];

export default routes;
