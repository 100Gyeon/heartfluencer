var menuArray = document.getElementsByName("chk_menu");
var found = null;
function check() {
    for (var i = 0; i < menuArray.length; i++) {
        if (menuArray[i].checked == true)
            found = menuArray[i].value;
    }
    if (found == null) {
        alert("메뉴 하나를 선택해 주세요.");
    }
    else {
        alert(found + "에 투표가 완료되었습니다.\n확인을 누르면 페이지가 새로 고침 됩니다.");
        location.href = location.href;
    }
}