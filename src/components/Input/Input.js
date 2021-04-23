import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ tag: Tag, name, type, value, handleChange, placeholder }) => {
  //placeholder for input:number
  const inputNumberValue = value === 0 ? '' : value;

  return (
    <>
      {Tag === 'textarea' ? (
        <textarea
          className={styles.Textarea}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          type={type}
        />
      ) : (
        <input
          className={styles.Input}
          name={name}
          id={name}
          placeholder={placeholder}
          value={type === 'number' ? inputNumberValue : value}
          onChange={handleChange}
          type={type}
        />
      )}
    </>
  );
};

export default Input;
