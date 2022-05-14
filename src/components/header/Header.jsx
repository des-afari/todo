import React from 'react'
import { ReactComponent as Moon } from '../../assets/svg/moon.svg'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className='header__left'>
            <h4>todo.</h4>
        </div>
        <div className='header__right'>
            <Moon />
        </div>
    </header>
  )
}

export default Header