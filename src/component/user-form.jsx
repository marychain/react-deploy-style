// import { Store } from '../App';
// import { useContext } from 'react';
// import { SignIn } from './pages/SignIn';

// const UserForm = () => {
//     const {state: {
//         isAuthenticated,
//         user
//     }, actions: {
//         logoutUser
//     }} = useContext(Store);

//     const handleClick = () => {
//         logoutUser();
//     }

//     if (isAuthenticated) {
//         return (
//             <div className='user'>
//                 <p>{user.name}</p>
//                 <p>{user.surname}</p>
//                 <button onClick={handleClick}>Log Out</button>
//             </div>
//         );
//     }

//     return <SignIn />
// }
// export default UserForm;