// 개발자 도구 차단 구현 1
function disableConsole() {
    document.onkeydown = function (event) {
        event = event || window.event;
        if (event.keyCode === 123) {
            return false;
        }
        else if ((event.ctrlKey && event.shiftKey && event.keyCode === 73) || (event.ctrlKey && event.shiftKey && event.keyCode === 105)) {
            return false;
        }
    };

    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
}
disableConsole();

// 개발자 도구 차단 구현 2
function checkDevToolsAndCloseWindow() {
    const isOpen = /./;
    isOpen.toString = function() {
        window.open('', '_self', '');
        window.close();
        return "개발자 도구를 사용하여 접속하셨습니다. 보안 상의 이유로 페이지를 닫습니다.";
    };
    console.log('%c', isOpen);
}
checkDevToolsAndCloseWindow();
