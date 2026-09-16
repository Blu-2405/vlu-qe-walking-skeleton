// Hàm kiểm tra đăng nhập (logic thuần)
function checkLogin(user, pass) {
  return user === 'admin' && pass === '123';
}

// Nếu chạy trong trình duyệt thì mới gắn sự kiện DOM
if (typeof document !== 'undefined') {
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (checkLogin(user, pass)) {
      alert('Đăng nhập thành công!');
    } else {
      alert('Sai thông tin đăng nhập!');
    }
  });
}

// Export để dùng trong Unit Test
module.exports = { checkLogin };
