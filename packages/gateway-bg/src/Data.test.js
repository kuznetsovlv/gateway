/*eslint-disable no-undef*/
import Data from './Data';

describe('Test memory database', () => {
  it('Try get data from empty database', () => {
    const data = new Data();

    expect(data.getGateways()).toEqual([]);
    expect(data.getDevices()).toEqual([]);
  });
});
