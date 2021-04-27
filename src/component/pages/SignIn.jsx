import icon from '../assets/img/padlock.png';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { Store } from '../../App';
import React, { useState } from "react";

export const SignIn = () => {
    const [ firstName ] = useState(localStorage.getItem('firstName'));
    const [ lastName ] = useState(localStorage.getItem('lastName'));
    const [ email ] = useState(localStorage.getItem('email'));
    const [ password ] = useState(localStorage.getItem('password'));
    const [ rememberMe, setRememberMe ] = useState(false);


    const {actions: {
        loginUser
    }} = useContext(Store);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {};

        for (const {type, name, value} of event.target) {
            if (type === 'email') {
                user[name] = value
            }
        }

        for (const {type, name, value} of event.target) {
            if (type === 'password') {
                user[name] = value
            }

        }
        user.name = firstName;
        user.surname = lastName;

        try {
            if (user.email === email && user.password === password) {
                // alert('Error, you can not login. Please, fill in the form fields and try again.');
                // history.push('/');
                loginUser(user);
                history.push('/account');
            } 
            else {
            alert('Error, you can not login. Please, fill in the form fields and try again.');
                history.push('/');
            }
        } catch (error) {
            alert('Error, you can not login, Try again.')
        }


    };

        return (
            <div className='signin'> 
                <form className='signin form' onSubmit={handleSubmit}>
                    <img 
                    className='form__img'
                    alt='#'
                    src={ icon }
                    />
                    <h3 className='form__h3'>Sign In</h3>
                    <div className='form__items'>
                        <div className='form__items__login__field'>
                            <label htmlFor='user-surname'></label>
                            <input type='email'  name='email' className='form__item__input' placeholder='Email Address*' />
                        </div>
                        <div className='form__items__login__field'>
                            <label htmlFor='user-surname'></label>
                            <input type='password'  name='password' className='form__item__input' placeholder='Password*' />
                        </div>
                        
                        <div className='form__items__checkbox'>
                            <input type='checkbox' name='rememberMe' checked={ rememberMe } onChange={ () => setRememberMe(!rememberMe) } className='form__item__checkbox' />
                            <label className='form__label__checkbox' htmlFor='customCheck1'>Remember me</label>
                        </div>
                    </div>                  
                    <button type='submit' className='form__btn'>Sign In</button>
                    <div className='form__items__forgot'>
                        <p className='form__item__forgot'>
                            Forgot  <a className='form__item__a' href="/">password?</a>
                        </p>
                        <p className='form__item__forgot'>
                            Don`t have an account? <a className='form__item__a' href='/signup'> Sign up</a>
                        </p>
                    </div>
                </form>
            </div>    
        )
}