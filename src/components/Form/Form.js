import React from 'react';
import styles from './Form.module.css';
import Input from '../Input/Input';

const Form = ({
  formTitle,
  formName,
  algorithmFunc,
  shiftValue,
  setShiftValue,
  messageValue,
  setMessageValue,
  inputType,
  inputId,
  textareaId,
  textMessage,
}) => {
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
  };

  return (
    <div className={styles.FormContainer}>
      <h2 className={styles.Title}>{formTitle}</h2>
      <form name={formName}>
        <Input
          type={inputType}
          id={inputId}
          name={inputId}
          placeholder="Shift by..."
          handleChange={(e) => setShiftValue(e.target.value)}
          value={shiftValue}
        />
        <br />
        <Input
          tag="textarea"
          className={styles.Textarea}
          name={textareaId}
          id={textareaId}
          placeholder="Message to code"
          handleChange={(e) => setMessageValue(e.target.value)}
          value={messageValue}
        />
      </form>
      <div className={styles.TextWrapper} onClick={(e) => copyToClipboard(e)}>
        <p className={styles.TextTitle}>{textMessage} (click text to copy)</p>
        <p className={styles.Text}>{algorithmFunc(messageValue, shiftValue)}</p>
      </div>
    </div>
  );
};

export default Form;
