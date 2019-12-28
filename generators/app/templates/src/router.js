import Home from './views/Home';
import About from './views/About';

export default [
  {
    path: '/about',
    key: 'about',
    component: About,
  },
  {
    path: '/',
    key: 'home',
    component: Home,
  },
];
