import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <>
            <nav>
                <NavContent setMenuOpen={setMenuOpen} />
            </nav>

            <button className='navBtn' onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu />
            </button>
        </>
    )
}

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
            <NavContent setMenuOpen={setMenuOpen} />
        </div>
    )
}

const NavContent = ({ setMenuOpen }) => (
    <>
        <h2>Jaimin.</h2>
        <div>
            <a onClick={() => setMenuOpen(false)} href='#home'>Home</a>
            <a onClick={() => setMenuOpen(false)} href='#work'>work</a>
            <a onClick={() => setMenuOpen(false)} href='#timeline'>Timeline</a>
            <a onClick={() => setMenuOpen(false)} href='#services'>Services</a>
            <a onClick={() => setMenuOpen(false)} href='#contact'>Contact</a>
        </div>
        <a href='mailto: jaiminrana1102@gmail.com'>
            <button>Email</button>
        </a>
    </>
)
export default Header;