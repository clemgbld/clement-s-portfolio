import React, { useRef, useState } from "react";
import classes from "./Form.module.css";
import {
  AnimatedButton,
  AnimatedInput,
  AnimatedTextArea,
} from "../CustomMotion/CustomMotion";
import useMagic from "../hooks/use-magic";
import useInput from "../hooks/use-input";

import { sendForm } from "emailjs-com";
import { AnimatedDiv } from "../CustomMotion/CustomMotion";
import ValidationContainer from "./Validation/ValidationContainer";
import { AnimatePresence } from "framer-motion";

const Form = () => {
  const [valid, setValid] = useState(false);
  const { ref, animation } = useMagic(
    { opacity: 0, translateY: "20px" },
    {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
    0.8
  );

  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: subject,
    valueIsValid: subjectIsValid,
    hasError: subjectHasError,
    valueInputChangeHandler: subjectInputChangeHandler,
    valueInputBlurHandler: subjectInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: message,
    valueIsValid: messageIsValid,
    hasError: messageHasError,
    valueInputChangeHandler: messageInputChangeHandler,
    valueInputBlurHandler: messageInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
    formIsValid = true;
  }

  const form = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    sendForm(
      "service_p9edk6c",
      "template_ju5qtdg",
      form.current,
      "user_3Pra8voBOEaLCz5ZHRx4b"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setTimeout(() => {
      setValid(true);
    }, 300);
  };

  const renderContent = () => {
    if (valid) {
      return <ValidationContainer />;
    }
    return (
      <AnimatedDiv
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className={classes.container}
      >
        <form ref={form} onSubmit={SubmitHandler}>
          <div className={classes.small}>
            <div ref={ref} className={nameInputClasses}>
              <AnimatedInput
                value={name}
                animate={animation}
                onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}
                type="text"
                id="name"
                placeholder="Name*"
                name="name"
              />
            </div>
            <div ref={ref} className={emailInputClasses}>
              <AnimatedInput
                value={email}
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
                animate={animation}
                type="text"
                id="email"
                placeholder="Email*"
                name="email"
              />
            </div>
          </div>
          <div ref={ref} className={subjectInputClasses}>
            <AnimatedInput
              value={subject}
              onChange={subjectInputChangeHandler}
              onBlur={subjectInputBlurHandler}
              animate={animation}
              type="text"
              id="subject"
              placeholder="Subject*"
              name="subject"
            />
          </div>
          <div ref={ref} className={messageInputClasses}>
            <AnimatedTextArea
              value={message}
              onChange={messageInputChangeHandler}
              onBlur={messageInputBlurHandler}
              animate={animation}
              className={classes.message}
              type="text"
              id="message"
              placeholder="Message*"
              name="message"
            />
          </div>
          <div ref={ref}>
            <AnimatedButton
              disabled={!formIsValid}
              animate={animation}
              className="button"
            >
              Send me a message!
            </AnimatedButton>
          </div>
        </form>
      </AnimatedDiv>
    );
  };

  const nameInputClasses = nameHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]}`;

  const emailInputClasses = emailHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]}`;

  const subjectInputClasses = subjectHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]}`;

  const messageInputClasses = messageHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : `${classes["form-control"]}`;

  return <AnimatePresence>{renderContent()}</AnimatePresence>;
};
export default Form;
