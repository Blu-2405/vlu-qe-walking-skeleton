const { checkLogin } = require('./login');

test('Đăng nhập đúng với admin/123', () => {
  expect(checkLogin('admin', '123')).toBe(true);
});

test('Đăng nhập sai với user khác', () => {
  expect(checkLogin('user', '123')).toBe(false);
});

test('Đăng nhập sai với mật khẩu khác', () => {
  expect(checkLogin('admin', '456')).toBe(false);
});
