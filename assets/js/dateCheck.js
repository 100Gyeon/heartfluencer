function printTime() {
    var clock = document.getElementById("clock");            // 출력할 장소 선택
    var now = new Date();                                    // 현재시간
    var nowTime = now.getFullYear() + " / " + (now.getMonth() + 1) + " / " + now.getDate();
    clock.innerHTML = nowTime;                               // 현재시간을 출력
}
window.onload = function () {                                // 페이지가 로딩되면 실행
    printTime();
}

var today = new Date();
var date = new Date();

function buildCalendar() {
    var doMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    var tbCalendar = document.getElementById("calendar");
    var tbCalendarYM = document.getElementById("tbCalendarYM");
    tbCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";

    var row = null;
    row = tbCalendar.insertRow(); // 테이블에 새로운 열 삽입
    var cnt = 0; // 셀의 개수
    
    for (i = 0; i < doMonth.getDay(); i++) {
        cell = row.insertCell();
        cnt = cnt + 1;
    }

    for (i = 1; i <= lastDate.getDate(); i++) {
        cell = row.insertCell();
        cell.innerHTML = i;
        cnt = cnt + 1;
        if (cnt % 7 == 1) {
            // 일요일은 분홍 글씨로
            cell.innerHTML = "<font color=hotpink>" + i
        }
        if (cnt % 7 == 0) {
            // 토요일은 하늘색 글씨로
            cell.innerHTML = "<font color=royalblue>" + i
            row = calendar.insertRow();
        }
        if (today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth() && i == date.getDate()) {
            // 오늘 배경을 노란색으로
            cell.bgColor = "yellow";
        }
    }
}