import React from 'react'
import './Logo.css'
import crud from '../../assets/imgs/crud.png'
import { Link } from 'react-router-dom'

const Logo = () => (
    <aside className="logo">
        <Link to="/" className='logo'>
            <img src={crud} alt="logo" />
        </Link>
    </aside>
)

export default Logo