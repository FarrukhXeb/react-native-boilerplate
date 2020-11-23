import crypto from 'crypto-js';
import Config from 'react-native-config';
export default (data: string | object) => {
  if (data === null || data === undefined) {
    throw new Error('Data not found for decryption');
  }
  return crypto.AES.decrypt(JSON.stringify(data), Config.SECRET).toString(
    crypto.enc.Utf8,
  );
};
