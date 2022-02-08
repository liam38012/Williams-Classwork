import React from 'react'
import './header.css'
import bg from '../Images/getty.jpg'
import {Link} from 'react-router-dom'


const Header = () => {

    return(

        <div>

            <div className='header'>

                <div className='backgroundimage'>
                <img src={bg}/>
                </div>

                <div className='NaV'>
                 <Link to='/' className='NaVs'> HOME</Link>
                 <Link to='/about' className='NaVs'> ABOUT</Link>
                 <Link to='/contact' className='NaVs'> CONTACT</Link>
                </div>
                
            </div>

        </div>
    )
}

export default Header