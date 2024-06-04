// 로그인 유효성 검사 구현
form.onsubmit = function(e) {
        e.preventDefault();

        var email = form['email'].value.trim();
        var password = form['pw'].value.trim();
        var name = form['name'].value.trim();

        var emailPattern = /^(?=.{7,50})([\da-zA-Z_.]{4,})@([\da-z\-]{2,}\.)?([\da-z\-]{2,})\.([a-z]{2,10})(\.[a-z]{2})?$/;
        var passwordPattern = /^[\da-zA-Z`~!@#$%^&*()\-=+[\]{}\\|;:'",<.>/?]{8,50}$/;

        var emailErrorMsg = document.getElementById('emailErrorMsg');
        var pwErrorMsg = document.getElementById('pwErrorMsg');
        var nameErrorMsg = document.getElementById('nameErrorMsg');

        emailErrorMsg.innerHTML = '';
        pwErrorMsg.innerHTML = '';
        nameErrorMsg.innerHTML = '';

        if (email === '') {
            emailErrorMsg.innerHTML = '이메일을 입력하세요.';
            form['email'].focus();
            return false;
        }
        if (!emailPattern.test(email)) {
            emailErrorMsg.innerHTML = '올바른 이메일 형식이 아닙니다.';
            form['email'].focus();
            form['email'].select();
            return false;
        }
        if (password === '') {
            pwErrorMsg.innerHTML = '비밀번호를 입력하세요.';
            form['pw'].focus();
            return false;
        }
        if (!passwordPattern.test(password)) {
            pwErrorMsg.innerHTML = '비밀번호 형식이 올바르지 않습니다.';
            form['pw'].focus();
            form['pw'].select();
            return false;
        }
        if (name === '') {
            nameErrorMsg.innerHTML = '이름을 입력하세요.';
            form['name'].focus();
            return false;
        }

        form.submit();
