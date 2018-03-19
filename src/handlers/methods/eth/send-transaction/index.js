import crypto from 'crypto';

const sendTransaction = () => Promise.resolve(`0x${crypto.randomBytes(32).toString('hex')}`);

export default sendTransaction;
