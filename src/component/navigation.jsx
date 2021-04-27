import { Link } from 'react-router-dom';

const links = [
    {
        to: '/',
        label: 'SignIn'
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