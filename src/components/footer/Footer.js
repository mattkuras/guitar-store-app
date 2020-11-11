import React, { Component } from 'react'
import './footer.css'

const Footer = (props) => {
   
        return(
            <footer>
                        <div className='footer-col'>
                            <h2>Guitar Store</h2>
                                <ul className='foot-list'>
                                    <li>342-555-5656</li>
                                    <li>Moscorw, Russia</li> 
                                    <li>123, park ave</li> 
                                </ul>
                            </div>
                            <div className='footer-col'>
                            <h2>Stuff</h2>
                                <ul className='foot-list'>
                                    <li>GuitarStore.inc</li>
                                    <li>Contact</li> 
                                    <li>FAQ's</li> 
                                </ul>
                            </div>
                            <div className='footer-col'>
                            <h2>Follow Us</h2>
                                <ul className='foot-list'>
                                    <li>Twitter</li>
                                    <li>Facebook</li> 
                                    <li>Instagram</li> 
                                </ul>
                            </div>
            </footer>
         )
    }


export default Footer