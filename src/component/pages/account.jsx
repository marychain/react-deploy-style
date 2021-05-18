import '../css/account.css'
import { Store } from '../../App';
import { useContext } from 'react';
import { SignIn } from './SignIn';
import { useHistory } from 'react-router';
export const AccountPage = () => { 

    const {state: {
        isAuthenticated,
        user
    }, actions: {
        logoutUser
    }} = useContext(Store);

    const history = useHistory();

    const handleClick = () => {
        try {
            logoutUser();
            history.push('/react-deploy-style');
        } catch (error) {
            alert ('SMT goes wrong. You can not be logged out. Try again.')
        }
        
    }

    if (isAuthenticated) {
        return (
            <div className='user'>
                <p className='user__hello'>Hello user {user.name} {user.surname}!!</p>
                <button className='user__logout' onClick={handleClick}>Log Out</button>
            </div>
        );
    }

    return <SignIn />
}
