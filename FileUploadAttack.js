document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // 파일 제한 설정
    const FILE_COUNT_LIMIT = 5;
    const FILE_SIZE_LIMIT = 5242880; // 5MB
    const WHITE_LIST_EXT = ['.jpg', '.jpeg']; // 허용하는 파일 확장자 화이트리스트

    // 파일 입력 필드 및 결과 출력 영역 가져오기
    const files = document.getElementById('fileInput').files;
    const resultDiv = document.getElementById('result');

    // 파일 개수 제한 검사
    if (files.length === 0 || files.length > FILE_COUNT_LIMIT) {
        resultDiv.textContent = '파일 개수 초과';
        return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // 파일 크기 제한 검사
        if (file.size > FILE_SIZE_LIMIT) {
            resultDiv.textContent = '파일사이즈 오류';
            return;
        }

        // 파일 확장자 검사
        const fileExt = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
        if (!WHITE_LIST_EXT.includes(fileExt)) {
            resultDiv.textContent = '파일 타입 오류';
            return;
        }

        formData.append('files', file);
    }

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            resultDiv.textContent = '업로드 성공: ' + result.filename_list.join(', ');
        } else {
            const error = await response.json();
            resultDiv.textContent = '업로드 실패: ' + error.message;
        }
    } catch (error) {
        resultDiv.textContent = '업로드 중 오류 발생: ' + error.message;
    }
});