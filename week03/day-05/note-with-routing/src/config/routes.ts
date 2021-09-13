import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';


const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/about',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },
    {
        path: '/about/:number',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },
]

export default routes;