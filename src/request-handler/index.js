const handleRequest = (method) => new Promise((resolve, reject) => {
  if (method.eth_blockNumber) {
    resolve('0x1234');
    return;
  }

  if (method.eth_sendTransaction) {
    resolve('0x1234567890123456789012345678901234567890123456789012345678901234');
    return;
  }

  reject(new Error(`Unknown method: ${Object.keys(method).join(', ')}`));
});

export default handleRequest;
