// Stored XSS 방어 구현
function escapeHTML(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// XSS 방어 구현 사용자 입력 필터링 적용 구현
const inputs = document.querySelectorAll('input[type=text], input[type=email], input[type=password], textarea');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        this.value = escapeHTML(this.value);
    });
});
