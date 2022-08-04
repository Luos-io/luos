import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from 'pages/typeform/form.module.scss';

const { NEXT_PUBLIC_EMAILJS_SERVICE_ID } = process.env;
const { NEXT_PUBLIC_EMAILJS_TEMPLATE_ID } = process.env;
const { NEXT_PUBLIC_EMAILJS_USER_ID } = process.env;

const ContactUs = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [sending, isSending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    isSending(true);
    e.preventDefault();

    if (
      NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      NEXT_PUBLIC_EMAILJS_USER_ID
    ) {
      emailjs
        .sendForm(
          NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          e.currentTarget,
          NEXT_PUBLIC_EMAILJS_USER_ID,
        )
        .then(
          () => {
            isSending(false);
            setIsSuccess(true);
          },
          // @typescript-eslint/no-explicit-any
          (error: any) => {
            isSending(false);
            setIsError(true);
            setError(error.text);
          },
        );
    } else {
      console.warn('Missing EmailJS environment variable');
    }
  };

  return (
    <form onSubmit={sendEmail}>
      {isSuccess ? (
        <Alert severity="success" className={styles.successMessage}>
          Your message has been send !
        </Alert>
      ) : null}
      {isError ? (
        <Alert severity="error" className={styles.successMessage}>
          {error}
        </Alert>
      ) : null}
      <TextField
        id="from_name"
        name="from_name"
        placeholder="How should we call you? Fullname, nickname, pseudo, alias..."
        className={`${styles.input} ${styles.textInput}`}
        label="Name"
        variant="outlined"
      />
      <TextField
        id="reply_to"
        name="reply_to"
        placeholder="So we can answer you..."
        className={`${styles.input} ${styles.textInput}`}
        label="Email"
        variant="outlined"
      />
      <TextField
        id="message"
        name="message"
        label="Project/product description"
        placeholder="How could we help?"
        className={styles.input}
        multiline
        variant="outlined"
        rows={7}
      />
      <Button type="submit" className={styles.send} variant="contained">
        {sending ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress size={24} />
          </Box>
        ) : (
          'Send'
        )}
      </Button>
    </form>
  );
};

export default ContactUs;
