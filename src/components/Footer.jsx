import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

import imgSrc from '../assets/founder.jpg';

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={imgSrc} alt='Founder' />

                <h2>Jaimin Rana</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
            </div>

            <aside>
                <h2>Social Media</h2>
                <article>
                    <a href='https://www.linkedin.com/in/jaimin-rana-56a756212/' target='blank'>
                        <AiFillLinkedin />
                    </a>
                    <a href='https://www.instagram.com/_the_jaimin_1102___/' target='blank'>
                        <AiFillInstagram />
                    </a>
                    <a href='https://github.com/J4Jaimin' target='blank'>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href='#home'><AiOutlineArrowUp /></a>
        </footer>


    )
}

export default Footer;