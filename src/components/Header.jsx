import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    return (
        <nav>
            <NavContent />
            <button>
                <AiOutlineMenu />
            </button>
        </nav>
    )
}

const NavContent = () => (
    <>
        <h2>Jaimin.</h2>
        <div>
            <a href='#home'>Home</a>
            <a href='#work'>work</a>
            <a href='#timeline'>Timeline</a>
            <a href='#services'>Services</a>
            <a href='#contact'>Contact</a>
        </div>
        <a href='mailto: jaiminrana1102@gmail.com'>
            <button>Email</button>
        </a>
    </>
)
export default Header;