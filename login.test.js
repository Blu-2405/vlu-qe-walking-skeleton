const { checkLogin } = require('./login');

describe('Kiểm tra hàm checkLogin', () => {
  test('Đúng khi user=admin và pass=123', () => {
    expect(checkLogin('admin', '123')).toBe(true);
  });

  test('Sai khi user khác', () => {
    expect(checkLogin('user', '123')).toBe(false);
  });

  test('Sai khi pass khác', () => {
    expect(checkLogin('admin', '456')).toBe(false);
  });
});
