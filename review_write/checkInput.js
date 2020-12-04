function check(obj) {
    if(obj.value == "") {
        alert("리뷰 설명 칸이 작성되지 않았습니다.\n설명을 작성해 주세요.");
        obj.focus();
    }
}