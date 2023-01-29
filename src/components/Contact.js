import React, { useRef, useState, useReducer } from "react";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import Title from "./UI/Title";
import useInput from "../hooks/use-input";

//useReducer data
const defaultState = { isSending: false, sendSuccessful: null };
const sendReducer = (state, action) => {
  switch (action.type) {
    case "SENDING":
      return { isSending: true, sendSuccessful: state.sendSuccessful };
    case "NOT_SENDING":
      return { isSending: false, sendSuccessful: state.sendSuccessful };
    case "SEND_SUCCESSFUL":
      return { isSending: state.isSending, sendSuccessful: true };
    case "SEND_UNSUCCESSFUL":
      return { isSending: state.isSending, sendSuccessful: false };
    default:
      return defaultState;
  }
};

//form validation functions
const isNotEmpty = (value) => value !== "";
const isValidEmail = (value) =>
  value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const Contact = (props) => {
  const [sendingState, dispatchSending] = useReducer(sendReducer, defaultState);
  const [error, setError] = useState();

  //useInput(s)
  const {
    enteredValue: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    validateOnBlurHandler: validateNameOnBlur,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    enteredValue: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    validateOnBlurHandler: validateEmailOnBlur,
    reset: resetEmail,
  } = useInput(isNotEmpty && isValidEmail);

  const {
    enteredValue: message,
    valueIsValid: messageIsValid,
    hasError: messageHasError,
    inputChangeHandler: messageChangeHandler,
    validateOnBlurHandler: validateMessageOnBlur,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  //refs
  const form = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const formIsValid = nameIsValid && emailIsValid && messageIsValid;

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      if (!formIsValid) {
        if (!nameIsValid) {
          nameInputRef.current.focus();
        } else if (!emailIsValid) {
          emailInputRef.current.focus();
        } else if (!messageIsValid) {
          messageInputRef.current.focus();
        }
        return;
      }

      dispatchSending({ type: "SENDING" });
      const result = await emailjs.sendForm(
        "service_nuurigj",
        "template_gpqj79d",
        form.current,
        "JioaKW-iFHKYcmt6F"
      );

      console.log(result.text);
    } catch (error) {
      dispatchSending({ type: "NOT_SENDING" });
      dispatchSending({ type: "SEND_UNSUCCESSFUL" });
      setError(error.text);
    }
    dispatchSending({ type: "NOT_SENDING" });
    dispatchSending({ type: "SEND_SUCCESSFUL" });
    resetName();
    resetEmail();
    resetMessage();
  };

  const { isSending, sendSuccessful } = sendingState;
  const nameClasses = `${classes.input} ${classes.name}`;

  return (
    <div className={classes.container}>
      <Title title="Contact" />
      <form onSubmit={submitForm} ref={form} className={classes.form}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={nameChangeHandler}
          onBlur={validateNameOnBlur}
          className={nameClasses}
          ref={nameInputRef}
          value={name}
        />
        {nameHasError && <span className={classes.invalid}>*Name is required</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailOnBlur}
          className={classes.input}
          ref={emailInputRef}
          value={email}
        />
        {emailHasError && <span className={classes.invalid}>*Invalid Email</span>}
        <textarea
          placeholder="Message"
          name="message"
          rows="10"
          onChange={messageChangeHandler}
          onBlur={validateMessageOnBlur}
          className={classes['text-area']}
          ref={messageInputRef}
          value={message}
        />
        {messageHasError && <span className={classes.invalid}>*Don't forget to type your message!</span>}
        {isSending && <p>Sending Email...</p>}
        {sendSuccessful && !error && <p className={classes.success}>Email sent successfully!</p>}
        {error && <p className={classes.error}>{error}</p>}
        <button type="submit">Let's Chat</button>
      </form>
    </div>
  );
};

export default Contact;
