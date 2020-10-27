const { join } = require('path');
const { getFileSize } = require('..');

describe('getFileSize', () => {
  it('cdn file', async () => {
    // from view-source:https://open.weixin.qq.com/?lang=en
    const input = 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico';
    const actual = await getFileSize(input);
    const expected = 827;

    expect(actual).toEqual(expected);
  });

  it('local file', async () => {
    // from view-source:https://open.weixin.qq.com/?lang=en
    const input = join(__dirname, '../assets/NTI4MWU5.ico');
    const actual = await getFileSize(input);
    const expected = 827;

    expect(actual).toEqual(expected);
  });
});
