import crypto from 'crypto';

const HASH_LENGTH_BYTES = 32;

const sendTransaction = () => Promise.resolve(`0x${crypto.randomBytes(HASH_LENGTH_BYTES).toString('hex')}`);

export default sendTransaction;
