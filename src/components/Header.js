import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Willkommen in meiner Praxis</h1>
        <p>Psychologische Psychotherapie, Beratung & Coaching</p>
    </header>
)

export default Header
