import About from './about/about';
import Settings from './settings/settings';
import Option1 from './option1/option1';
import Option2 from './option2/option2';
import Option3 from './option3/option3';

const routes = [
    {path: '/' ,  component: About},
    {path: '/about' ,  component: About},
    {path: '/settings',component: Settings},
    {path: '/option1',component: Option1},
    {path: '/option2',component: Option2},
    {path: '/option3',component: Option3},
];

export default routes;