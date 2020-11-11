import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import '../guitars/guitars.css'

const Header = (props) => {

        return(
            <header className='head'>
                <nav>
                    <ul className='header-ul'>
                        <li className='headli'>
                            <Link to='/cart'>Cart</Link>
                        </li>
                        <li className='headli'>
                            <Link to='/'>Guitars</Link>
                        </li>
                        <li className='headli'>
                            <Link to='/about'>About</Link>
                        </li>    
                    </ul>
                </nav>
            </header>
        )
}

export default Header 