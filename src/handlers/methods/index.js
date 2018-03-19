import eth from './eth';

const methods = {
  eth_blockNumber: eth.blockNumber,
  eth_sendTransaction: eth.sendTransaction
};

export default methods;
