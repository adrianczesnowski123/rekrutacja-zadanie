import React, { useState } from 'react';
import styles from './Caesar.module.css';
import Form from '../../components/Form/Form';
import { algorithmCipher, algorithmDecipher } from '../../utils/utils';

const Caesar = () => {
  const [messageCipher, setMessageCipher] = useState('');
  const [shiftCipher, setShiftCipher] = useState(0);

  const [messageDecipher, setMessageDecipher] = useState('');
  const [shiftDecipher, setShiftDecipher] = useState(0);

  return (
    <div className={styles.Wrapper}>
      <Form
        formTitle="encode your message with caesar cipher"
        formName="cipherEncode"
        algorithmFunc={() => algorithmCipher(messageCipher, shiftCipher)}
        shiftValue={shiftCipher}
        setShiftValue={setShiftCipher}
        messageValue={messageCipher}
        setMessageValue={setMessageCipher}
        inputType="number"
        inputId="shiftEncode"
        textareaId="messageEncode"
        textMessage="Encoded message:"
      />
      <Form
        formTitle="decode your message with caesar cipher"
        formName="cipherDecode"
        algorithmFunc={() => algorithmDecipher(messageDecipher, shiftDecipher)}
        shiftValue={shiftDecipher}
        setShiftValue={setShiftDecipher}
        messageValue={messageDecipher}
        setMessageValue={setMessageDecipher}
        inputType="number"
        inputId="shiftDecode"
        textareaId="messageDecode"
        textMessage="Decoded message:"
      />
    </div>
  );
};

export default Caesar;
