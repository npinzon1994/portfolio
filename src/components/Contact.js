import React, { useRef } from "react";
import classes from './Contact.module.css';
import emailjs from "@emailjs/browser";
import Title from "./UI/Title";

const Contact = (props) => {
  const form = useRef();

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_nuurigj",
        "template_gpqj79d",
        form.current,
        "JioaKW-iFHKYcmt6F"
      );
      console.log(result.text);
    } catch (error) {
      console.log(error.text);
    }
    event.target.reset();
  };

  return (
    <div className={classes.container}>
      <Title title="Contact" />
      <form onSubmit={submitForm} ref={form} className={classes.form}>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <textarea placeholder="Message" name="message" rows="10"/>
        <button type="submit">Let's Chat</button>
      </form>
    </div>
  );
};

export default Contact;
