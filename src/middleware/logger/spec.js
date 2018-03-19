import { describe, expect, it, spy, stub } from '../../spec.helpers';

import loggerMiddleware from '.';

describe('middleware/logger', () => {
  const request = { jsonrpc: {} };
  const response = {};
  const logger = { info: stub() };
  const next = stub();

  it('should call #info() on its logger', () => {
    const logger = { info: spy() };
    loggerMiddleware({ logger })(request, response, next);
    expect(logger.info).to.have.been.calledOnce;
  });

  it('should call next()', () => {
    const next = spy();
    loggerMiddleware({ logger })(request, response, next);
    expect(next).to.have.been.calledOnce;
  });
});
