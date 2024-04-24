import React, { useRef } from 'react'
import { motion, animate } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'

import me from '../assets/me.png';

const Home = () => {

    const projectCount = useRef(null);

    const animationClientCount = (key) => {
        animate(0, 20, {
            duration: 1,
            onUpdate: (v) => projectCount.current.textContent = v.toFixed(),
        });
    }

    const animation = {
        h1: {
            initial: {
                x: '-100%',
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },

        button: {
            initial: {
                y: '-100%',
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
        },
    };

    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1
                        {...animation.h1}
                    >
                        Hi, I am <br /> Jaimin Rana
                    </motion.h1>

                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creator"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara",
                    }} />

                    <div>
                        <a href='mailto: jaiminrana1102@gmail.com'>Hire Me!</a>
                        <a href='#work'>Projects <BsArrowUpRight /></a>
                    </div>

                    <aside>
                        <article>
                            <p>
                                +<motion.span whileInView={() => animationClientCount("project")} ref={projectCount}></motion.span>
                            </p>
                            <span>Projects Done!</span>
                        </article>

                        <article data-special>
                            <p>Contact</p>
                            <span>jaiminrana1102@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="Jaimin" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home;