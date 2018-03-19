const getBlockNumber = () => Promise.resolve(`0x${new Date().getTime().toString(16)}`);

export default getBlockNumber;
