import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../logo.svg';
import './header.css';


const Header = (props) => {

    return(
        <header className="header">
            <Link to='/'>
                <img
                    src={logoImg}
                    alt="Logo Space X"
                    className="logo"
                />
            </Link>
            <nav className="main-nav nav">
            <ul className="list">
                {props.rockets.map((item, i) => (
                    <li key={i} className="item">
                        <Link to="/rocket" 
                        onClick={() => {
                            props.changeRocket(item);
                        }} 
                        className="item-link">{item}</Link>
                    </li>
                ))}
                
            </ul>
            </nav>
            <nav className="secondary-nav">
            <ul className="list">
                <li className="item">
                    <NavLink exact to="/" className="item-link" activeClassName='active'>Home</NavLink>
                </li>
                <li className="item">
                    <NavLink exact to="/calendar" className="item-link" activeClassName='active'>Calendar</NavLink>
                </li>
            </ul>
            </nav>
        </header>
    )
};

export default Header;
