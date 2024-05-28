document.getElementById('generateTokenBtn').addEventListener('click', function() {
    generateCsrfToken();
});

function generateCsrfToken() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'Csrf');
    xhr.onload = function() {
        document.getElementById('csrfToken').innerText = 'CSRF Token: ' + xhr.responseText;
        document.getElementById('csrf_token').value = xhr.responseText;
    };
    xhr.send();
}
