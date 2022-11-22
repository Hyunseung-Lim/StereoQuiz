import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = (props) => {
    return(
        <>
            <nav className='navbar'>
                <div className='navbarContainer'>
                    <div className='title'> 
                        Stereo Quiz
                    </div>
                    <div className='navbarInfo'>
                        <Link to="/quiz" className='navBtn'>
                            <span>Random Quiz</span>
                        </Link>                           
                        <Link to="/target" className='navBtn'>
                            <span>Quiz by Target</span>
                        </Link>                           
                        <Link to="/type" className='navBtn'>
                            <span>Quiz by Type</span>
                        </Link>                                      
                    </div>
                </div>
            </nav>
        </>
    )
}