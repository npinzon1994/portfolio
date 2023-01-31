import React, { useRef, useState, useReducer, useContext } from "react";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import Title from "./UI/Title";
import useInput from "../hooks/use-input";
import ThemeContext from "../store/theme-context";
import LoadingSpinner from "./LoadingSpinner";

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

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const isDarkTheme = theme === "dark";

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
    dispatchSending({ type: "SEND_SUCCESSFUL" });
    dispatchSending({ type: "NOT_SENDING" });
    resetName();
    resetEmail();
    resetMessage();
  };

  const { isSending, sendSuccessful } = sendingState;
  const nameClasses = `${classes.input} ${classes.name} ${
    isDarkTheme ? classes["dark-input"] : ""
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
        {nameHasError && (
          <span
            className={`${classes.invalid} ${
              isDarkTheme ? classes["dark-invalid"] : ""
            }`}
          >
            *Name is required
          </span>
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailOnBlur}
          className={`${classes.input} ${
            isDarkTheme ? classes["dark-input"] : ""
          }`}
          ref={emailInputRef}
          value={email}
        />
        {emailHasError && (
          <span
            className={`${classes.invalid} ${
              isDarkTheme ? classes["dark-invalid"] : ""
            }`}
          >
            *Invalid Email
          </span>
        )}
        <textarea
          placeholder="Message"
          name="message"
          rows="10"
          onChange={messageChangeHandler}
          onBlur={validateMessageOnBlur}
          className={`${classes["text-area"]} ${
            isDarkTheme ? classes["dark-text-area"] : ""
          }`}
          ref={messageInputRef}
          value={message}
        />
        {messageHasError && (
          <span
            className={`${classes.invalid} ${
              isDarkTheme ? classes["dark-invalid"] : ""
            }`}
          >
            *Message is required
          </span>
        )}
        {isSending && <LoadingSpinner />}
        {(sendSuccessful) && (
          <p className={`${classes.success} ${isDarkTheme ? classes['dark-success'] : ''}`}>Email sent successfully!</p>
        )}
        {error && <p className={classes.error}>{error}</p>}
        <button
          type="submit"
          className={`${classes["form-button"]} ${
            isDarkTheme ? classes["dark-form-button"] : ""
          }`}
        >
          Let's Chat
        </button>
      </form>
    </div>
  );
};

export default Contact;
