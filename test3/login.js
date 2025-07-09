document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form');
  const userId = document.getElementById('user-id');
  const userPw = document.getElementById('user-password');
  const loginBtn = document.querySelector('.login-btn');

  // 폼 제출 시 기본 동작
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // 실제 로그인 로직은 서버 연동 필요
    alert('로그인 시도: ' + userId.value);
  });

  // 엔터키로 로그인
  userPw.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      loginBtn.focus();
    }
  });

  // 접근성: 첫 진입 시 메인에 포커스
  document.getElementById('login-main').focus();

  // 링크 클릭 시 경고 (실제 연동 필요)
  document.getElementById('find-id').addEventListener('click', function(e) {
    e.preventDefault();
    alert('아이디 찾기 기능은 준비 중입니다.');
  });
  document.getElementById('find-password').addEventListener('click', function(e) {
    e.preventDefault();
    alert('비밀번호 찾기 기능은 준비 중입니다.');
  });
  document.getElementById('sign-up').addEventListener('click', function(e) {
    e.preventDefault();
    alert('회원가입 기능은 준비 중입니다.');
  });
}); 
