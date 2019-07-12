import React from 'react'

import logo from '../assets/images/logo.jpg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Praxis für Psychotherapie</h1>
        <p>Willkommen in der Praxis Badra - Psychotherapie & Coaching</p>
    </header>
)

export default Header
