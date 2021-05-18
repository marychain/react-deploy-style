import { SignIn } from '../component/pages/SignIn';
import { SignUp } from '../component/pages/SignUp';
import { AccountPage } from '../component/pages/account';
import { NotAllowPage } from '../component/pages/restricted';

export const appRoutes = [
    {
        path: '/react-deploy-style',
        exact: true,
        component: SignIn
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/account',
        component: AccountPage,
        secured: true
    },
    {
        path: '/restricted',
        component: NotAllowPage
    }
];