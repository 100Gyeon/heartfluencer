function alertDialog() {
    if (confirm("작성을 취소하시겠습니까?\n이 페이지를 벗어나면 작성된 내용은 저장되지 않습니다.") == true) {
        history.back();
    } else {
        return;
    }
}