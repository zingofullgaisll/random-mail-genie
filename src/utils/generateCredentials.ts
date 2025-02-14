
const generateRandomString = (length: number): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from(
    { length }, 
    () => chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('');
};

export const generateGmailAccount = (): string => {
  const username = generateRandomString(12);
  return `${username}@gmail.com`;
};

export const generatePassword = (): string => {
  const specialChars = '!@#$%^&*';
  const numbers = generateRandomString(2);
  const letters = generateRandomString(6);
  const special = specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  return `${letters}${numbers}${special}`;
};
