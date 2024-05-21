import { useState } from 'react'

export const useEmailValidation = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);

  function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    setIsEmailValid(emailRegex.test(email));
  }

  return { isEmailValid, validateEmail };
};