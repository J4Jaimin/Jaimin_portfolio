import React, { useState } from 'react'
import toast from 'react-hot-toast';
import vg from '../assets/vg.png';


const Contact = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [msg, setMsg] = useState("");

    const [inputs, setInputs] = useState({ name: "", email: "", msg: "" });

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
                <form onSubmit={submitHandler}>
                    <h2>Contact Me</h2>

                    <input type='text' name="name" value={inputs.name} onChange={changeHandler} placeholder='Your Name..' required />
                    <input type='email' name="email" value={inputs.email} onChange={changeHandler} placeholder='Your Email..' required />
                    <input type='text' name="msg" value={inputs.msg} onChange={changeHandler} placeholder='Your Message..' required />

                    <button type='submit'>Send</button>
                </form>
            </section>

            <aside>
                <img src={vg} alt='contact' />
            </aside>
        </div>
    )
}

export default Contact;