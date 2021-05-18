import { Link } from 'react-router-dom';

const links = [
    {
        to: '/react-deploy-style',
        label: 'SignIn'
    },
    {
        to: '/signup',
        label: 'SignUp'
    }
];

export const Navigation = () => (
    <nav>
        <ul>
            { links.map(link => (
                <li key={ link.to}>
                    <Link to={link.to}>{link.label}</Link>
                </li>
            ))}
        </ul>
    </nav>
);