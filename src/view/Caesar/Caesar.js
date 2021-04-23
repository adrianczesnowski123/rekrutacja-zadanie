import React, { useState } from 'react';
import styles from './Caesar.module.css';
import Input from '../../components/Input/Input';
import { algorithmCipher, algorithmDecipher } from '../../utils/utils';

const Caesar = () => {
  const [messageCipher, setMessageCipher] = useState('');
  const [shiftCipher, setShiftCipher] = useState(0);

  const [messageDecipher, setMessageDecipher] = useState('');
  const [shiftDecipher, setShiftDecipher] = useState(0);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.FormContainer}>
        <h2 className={styles.Title}>encode your message with caesar cipher</h2>
        <form name="cipherEncode">
          <Input
            type="number"
            id="shiftEncode"
            name="shiftEncode"
            placeholder="Shift by..."
            handleChange={(e) => setShiftCipher(e.target.value)}
            value={shiftCipher}
          />
          <br />
          <Input
            tag="textarea"
            className={styles.Textarea}
            name="messageEncode"
            id="messageEncode"
            placeholder="Message to code"
            handleChange={(e) => setMessageCipher(e.target.value)}
            value={messageCipher}
          />
        </form>
        <p className={styles.Text}>Zakodowana wiadomość:</p>
        <p className={styles.Text}>
          {algorithmCipher(messageCipher, shiftCipher)}
        </p>
      </div>

      <div className={styles.FormContainer}>
        <h2 className={styles.Title}>decode your message with caesar cipher</h2>
        <form name="cipherDecode">
          <Input
            type="number"
            id="shiftDecode"
            name="shiftDecode"
            placeholder="Shift by..."
            handleChange={(e) => setShiftDecipher(e.target.value)}
            value={shiftDecipher}
          />
          <br />
          <Input
            tag="textarea"
            className={styles.Textarea}
            name="messageDecode"
            id="messageDecode"
            placeholder="Message to decode"
            handleChange={(e) => setMessageDecipher(e.target.value)}
            value={messageDecipher}
          />
        </form>
        <p className={styles.Text}>Odkodowana wiadomość: </p>
        <p className={styles.Text}>
          {algorithmDecipher(messageDecipher, shiftDecipher)}
        </p>
      </div>
    </div>
  );
};

export default Caesar;
