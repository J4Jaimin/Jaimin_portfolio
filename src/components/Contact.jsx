import React, { useState } from 'react'
import toast from 'react-hot-toast';
import vg from '../assets/vg.png';
import { motion } from 'framer-motion';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase';

const Contact = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [msg, setMsg] = useState("");

    const [inputs, setInputs] = useState({ name: "", email: "", msg: "" });
    const [disableBtn, setDisableBtn] = useState(false);

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

    const submitHandler = async (e) => {
        e.preventDefault();

        setDisableBtn(true);

        try {
            await addDoc(collection(db, "contacts"), {
                name: inputs.name,
                email: inputs.email,
                msg: inputs.msg,
            });

            toast.success("Message sent!");
            setInputs({ name: "", email: "", msg: "" });
            setDisableBtn(false);
        }
        catch (error) {
            toast.error("Error while submitting contact form.");
            setDisableBtn(false);
        }
    }

    const changeHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    return (
        <div id="contact">
            <section>
                <motion.form onSubmit={submitHandler} {...animations.form}>
                    <h2>Contact Me</h2>

                    <input type='text' name="name" value={inputs.name} onChange={changeHandler} placeholder='Your Name..' required />
                    <input type='email' name="email" value={inputs.email} onChange={changeHandler} placeholder='Your Email..' required />
                    <input type='text' name="msg" value={inputs.msg} onChange={changeHandler} placeholder='Your Message..' required />

                    <motion.button className={disableBtn ? "disableBtn" : ""} disabled={disableBtn} type='submit' {...animations.button}>Send</motion.button>
                </motion.form>
            </section>

            <aside>
                <img src={vg} alt='contact' />
            </aside>
        </div>
    )
}

export default Contact;