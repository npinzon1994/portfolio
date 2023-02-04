import React, {
  useRef,
  useState,
  useReducer,
  useContext,
  useEffect,
} from "react";
import classes from "../Contact/Contact.module.css";
import emailClasses from "../Contact/EmailStatus.module.css";
import emailjs from "@emailjs/browser";
import Title from "../UI/Title";
import useInput from "../../hooks/use-input";
import ThemeContext from "../../store/theme-context";
import EmailStatus from "../Contact/EmailStatus";
import loadingSpinner from "../../assets/loading-spinner.gif";
import ErrorMessage from "../Contact/ErrorMessage";
import emailSendReducer from "./email-send-reducer";

//form validation functions
const isNotEmpty = (value) => value !== "";
const isValidEmail = (value) =>
  value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const Contact = (props) => {
  const { reducer, defaultState } = emailSendReducer;
  const [sendingState, dispatchSending] = useReducer(reducer, defaultState);
  const [statusMsgVisible, setStatusMsgVisible] = useState(false);
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
    setError(null);

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

      if (result.status !== "200") {
        throw new Error("Could not successfully send email.");
      }

      dispatchSending({ type: "SEND_SUCCESSFUL" });
      dispatchSending({ type: "NOT_SENDING" });
      setStatusMsgVisible(false);
      
    } catch (error) {
      setError(error.text);
      dispatchSending({ type: "NOT_SENDING" });
      dispatchSending({ type: "SEND_UNSUCCESSFUL" });
      setStatusMsgVisible(false);
    }
    
    resetName();
    resetEmail();
    resetMessage();
  };

  useEffect(() => {
    setStatusMsgVisible(true);
  }, []);

  const { isSending, sendSuccessful } = sendingState;
  const nameClasses = `${classes.input} ${classes.name} ${
    isDarkTheme ? classes["dark-input"] : ""
  }`;

  //determining which status message should be shown
  let emailStatus;
  if (isSending) {
    emailStatus = (
      <EmailStatus
        status="Sending..."
        className={emailClasses.sending}
        img={{
          src: loadingSpinner,
          alt: "Loading Spinner",
          className: emailClasses["loading-spinner"],
        }}
      />
    );
  } else if (!statusMsgVisible && !error) {
    emailStatus = (
      <EmailStatus
        status="Email sent successfully!"
        className={`${classes.success} ${
          isDarkTheme ? classes["dark-success"] : ""
        }`}
        img={{ className: emailClasses["loading-spinner-hidden"] }}
      />
    );
  } else if (!statusMsgVisible && error) {
    emailStatus = (
      <EmailStatus
        status={error}
        className={`${classes.error} ${
          isDarkTheme ? classes["dark-error"] : ""
        }`}
        img={{ className: emailClasses["loading-spinner-hidden"] }}
      />
    );
  }

  return (
    <div className={classes.container}>
      <Title title="Contact" style={{'margin-left': 20}}/>
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
        {nameHasError && <ErrorMessage message="*Name is required" />}
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
        {emailHasError && <ErrorMessage message="*Invalid Email" />}
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
        {messageHasError && <ErrorMessage message="*Message is required" />}
        {emailStatus}
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
