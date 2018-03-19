const HEX = 16;

const getBlockNumber = () => Promise.resolve(`0x${new Date().getTime().toString(HEX)}`);

export default getBlockNumber;
