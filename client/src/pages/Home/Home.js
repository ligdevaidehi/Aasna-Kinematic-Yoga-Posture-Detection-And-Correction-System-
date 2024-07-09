import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>Automated Yoga Trainer</h1>
                <Link to='/about'>
                    <button 
                        className="button" id='btn'
                        
                    >
                        About
                    </button>
                </Link>
            </div>

            
            <div className="home-main">
                <div className="btn-section">
                    <Link to='/start'>
                        <button
                            className="button-sec"
                        >Start</button>
                    </Link>
                    <Link to='/tutorials'>
                        <button
                            className="button-sec"
                        >Help</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
