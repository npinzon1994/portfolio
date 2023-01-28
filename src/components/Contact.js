import React, { useRef, useState } from "react";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import Title from "./UI/Title";

const Contact = (props) => {
  const [isSending, setIsSending] = useState(false);
  const [sendSuccessful, setSendSuccessful] = useState();
  const [error, setError] = useState();

  const form = useRef();

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      setIsSending(true);
      const result = await emailjs.sendForm(
        "service_nuurigj",
        "template_gpqj79d",
        form.current,
        "JioaKW-iFHKYcmt6F"
      );

      console.log(result.text);
    } catch (error) {
      setIsSending(false);
      setSendSuccessful(false);
      setError(error.text);
    }
    setIsSending(false);
    setSendSuccessful(true);
    event.target.reset();
  };

  return (
    <div className={classes.container}>
      <Title title="Contact" />
      <form onSubmit={submitForm} ref={form} className={classes.form}>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <textarea placeholder="Message" name="message" rows="10" />
        {isSending && <p>Sending Email...</p>}
        {sendSuccessful && !isSending && <p>Email sent successfully!</p>}
        {error && <p>{error}</p>}
        <button type="submit">Let's Chat</button>
      </form>
    </div>
  );
};

export default Contact;
