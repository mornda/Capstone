// HTTPS 강제 적용 구현
function getCurrentUrl() {
    return window.location.href;
}
function redirectToHttps() {
    var currentUrl = getCurrentUrl();

    if (currentUrl.indexOf("https://") == -1) {
        var httpsUrl = currentUrl.replace("http://", "https://");
        window.location.href = httpsUrl;
    }
}
window.onload = function() {
    redirectToHttps();
};
