import React, { useState } from 'react'
import toast from 'react-hot-toast';
import vg from '../assets/vg.png';
import { motion } from 'framer-motion';


const Contact = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [msg, setMsg] = useState("");

    const [inputs, setInputs] = useState({ name: "", email: "", msg: "" });

    const animations = {
        form: {
            initial: {
                x: -100,
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },

        button: {
            initial: {
                y: -100,
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.5,
            }
        },
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputs.name, inputs.email, inputs.msg);
        toast.success("Message sent!");
    }

    const changeHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    console.log(inputs);

    return (
        <div id="contact">
            <section>
                <motion.form onSubmit={submitHandler} {...animations.form}>
                    <h2>Contact Me</h2>

                    <input type='text' name="name" value={inputs.name} onChange={changeHandler} placeholder='Your Name..' required />
                    <input type='email' name="email" value={inputs.email} onChange={changeHandler} placeholder='Your Email..' required />
                    <input type='text' name="msg" value={inputs.msg} onChange={changeHandler} placeholder='Your Message..' required />

                    <motion.button type='submit' {...animations.button}>Send</motion.button>
                </motion.form>
            </section>

            <aside>
                <img src={vg} alt='contact' />
            </aside>
        </div>
    )
}

export default Contact;