const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const usernameRegex = /^[a-zA-Z]+$/;
export const validateEmail = (email: string): string => {
  if (!email) {
    return 'Please enter your email';
  }

  if (!emailRegex.test(email)) {
    return 'Email invalid';
  }
  return '';
};

export const validatePassword = (password: string): string => {
  if (!password) {
    return 'Please provide your password';
  }

  if (password.length < 8) {
    return 'Minimum 8 characters is required';
  }

  return '';
};

export const validateUsername = (username: string): string => {
  if (!username) {
    return 'Please provide your username';
  }
  if (!usernameRegex.test(username)) {
    return 'Username should not contain any digits or any special characters';
  }

  return '';
};
