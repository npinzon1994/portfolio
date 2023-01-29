import React, { useRef, useState, useReducer } from "react";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import Title from "./UI/Title";
import useInput from "../hooks/use-input";

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

const isNotEmpty = (value) => value !== "";
const isValidEmail = (value) =>
  value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const Contact = (props) => {
  const [sendingState, dispatchSending] = useReducer(sendReducer, defaultState);
  const [error, setError] = useState();

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

  const nameClasses = `${classes.input} ${nameHasError ? classes.invalid : ""}`;
  const emailClasses = `${classes.input} ${
    emailHasError ? classes.invalid : ""
  }`;
  const messageClasses = `${classes["text-area"]} ${
    messageHasError ? classes.invalid : ""
  }`;

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
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailOnBlur}
          className={emailClasses}
          ref={emailInputRef}
          value={email}
        />
        <textarea
          placeholder="Message"
          name="message"
          rows="10"
          onChange={messageChangeHandler}
          onBlur={validateMessageOnBlur}
          className={messageClasses}
          ref={messageInputRef}
          value={message}
        />
        {isSending && <p>Sending Email...</p>}
        {sendSuccessful && !isSending && <p>Email sent successfully!</p>}
        {error && <p>{error}</p>}
        <button type="submit">Let's Chat</button>
      </form>
    </div>
  );
};

export default Contact;
