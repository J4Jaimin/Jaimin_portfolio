import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div>
                <img src='' alt='Founder' />

                <h2>Jaimin Rana</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
            </div>

            <aside>
                <h2>Social Media</h2>
                <article>
                    <a href='www.linkedin.com/in/jaimin-rana-56a756212' target='_blank'>
                        <AiFillLinkedin />
                    </a>
                    <a href='www.linkedin.com/in/jaimin-rana-56a756212' target='_blank'>
                        <AiFillInstagram />
                    </a>
                    <a href='www.linkedin.com/in/jaimin-rana-56a756212' target='_blank'>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href='#home'><AiOutlineArrowUp /></a>
        </footer>


    )
}

export default Footer;