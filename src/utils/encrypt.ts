import crypto from 'crypto-js';
import Config from 'react-native-config';
export default (data: string | object) => {
  if (data === null || data === undefined) {
    throw new Error('Data not found for encryption');
  }
  return crypto.AES.encrypt(JSON.stringify(data), Config.SECRET);
};
