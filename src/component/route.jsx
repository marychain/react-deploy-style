import { Route as ReactRoute, Redirect } from 'react-router-dom';
import { Store } from '../App';
import { useContext } from 'react';

export const Route = ({ component: Component, secured, ...props}) => {
    const { state: {
        isAuthenticated
    } } = useContext(Store);

    return (
        <ReactRoute render={(props) => {
            if (secured && !isAuthenticated) {
                return (
                    <Redirect to={{
                        pathname: '/restricted',
                        state: {from: window.location.pathname}
                    }} />
                )
            }

            return <Component {...props}/>
        }} {...props}/>
    );
}