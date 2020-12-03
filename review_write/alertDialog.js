function completeDialog() {
    if (confirm("리뷰를 작성해 주셔서 감사합니다.\n홈에서 더 많은 매장을 구경하세요.") == true) {
        location.href='/home.html';
    } else {
        return;
    }
}
function cancelDialog() {
    if (confirm("작성을 취소하시겠습니까?\n이 페이지를 벗어나면 작성된 내용은 저장되지 않습니다.") == true) {
        history.back();
    } else {
        return;
    }
}