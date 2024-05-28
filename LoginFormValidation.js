// 로그인 유효성 검사 구현
form.onsubmit = e => {
    e.preventDefault();

    const email = form['email'].value.trim();
    const password = form['password'].value.trim();

    const emailPattern = /^(?=.{7,50})([\da-zA-Z_.]{4,})@([\da-z\-]{2,}\.)?([\da-z\-]{2,})\.([a-z]{2,10})(\.[a-z]{2})?$/;
    const passwordPattern = /^[\da-zA-Z`~!@#$%^&*()\-=+[\]{}\\|;:'",<.>/?]{8,50}$/;

    if (email === '') {
        form['email'].focus();
        return false;
    }
    if (!emailPattern.test(email)) {
        form['email'].focusAndSelect();
        return false;
    }
    if (password === '') {
        form['password'].focus();
        return false;
    }
    if (!passwordPattern.test(password)) {
        form['password'].focusAndSelect();
        return false;
    }
};
