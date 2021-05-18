import React, { Component } from 'react';
import icon from '../assets/img/padlock.png';
import { Link } from 'react-router-dom';

export class SignUp extends Component {

        state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        onChangeHandler = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            this.setState({[name]: value});
        }

        onBtnClickHandler = (e) => {
            const { firstName, lastName, email, password } = this.state;
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            alert('You have successfully registered. Go SignIn');
            e.stopPropagation();
        };

    render() {
        return (
            <div className='signup'> 
                <form className='signup form'>
                    <img 
                    className='form__img'
                    alt='#'
                    src={ icon }
                    />
                    <h3 className='form__header'>Sign Up</h3>
                    <div className='form__items'>
                        <div className='form__items__name'>
                            <input type='text' className='form__item__name__input' name='firstName' onChange={this.onChangeHandler} value={this.state.firstName} placeholder='First Name*' />
                            <input type='text' className='form__item__name__input' name='lastName' onChange={this.onChangeHandler} value={this.state.lastName} placeholder='Last Name*' />
                        </div>
                        <input type='email' className='form__item__input'  name='email' onChange={this.onChangeHandler} value={this.state.email} placeholder='Email Address*' />
                        <input type='password' className='form__item__input'  name='password' onChange={this.onChangeHandler} value={this.state.password} placeholder='Password*' />
                        <div className='form__items__checkbox'>
                            <input type='checkbox' className='form__item__checkbox' id='customCheck1' />
                            <label className='form__label__checkbox' htmlFor='customCheck1'>I want to receive inspiration, marketing promotions and updates via email.</label>
                        </div>
                    </div>
                    <Link onClick={this.onBtnClickHandler} className='form__btn__link form__item__a' to='/react-deploy-style'>SignUp</Link>
                    <p className='form__item__forgot'>
                        Already registered? <Link className='form__item__link' to='/react-deploy-style'>SignIn</Link>
                    </p>
                </form>
                <div className='panel panel-default'>
                </div>
            </div>    
        )
    }
}