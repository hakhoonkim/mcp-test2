// 접근성: 엔터로 로그인 시 폼 유효성 검사

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const id = document.getElementById('userId');
  const pw = document.getElementById('userPw');

  form.addEventListener('submit', function(e) {
    if (!id.value.trim()) {
      alert('아이디를 입력하세요.');
      id.focus();
      e.preventDefault();
      return false;
    }
    if (!pw.value.trim()) {
      alert('비밀번호를 입력하세요.');
      pw.focus();
      e.preventDefault();
      return false;
    }
    // 실제 로그인 처리 로직은 서버 연동 필요
  });
}); 