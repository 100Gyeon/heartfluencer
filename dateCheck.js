function printTime() {
    var clock = document.getElementById("clock");            // 출력할 장소 선택
    var now = new Date();                                    // 현재시간
    var nowTime = now.getFullYear() + "\n년 " + (now.getMonth() + 1) + "\n월 " + now.getDate() + "\n일";
    clock.innerHTML = nowTime;                               // 현재시간을 출력
}
window.onload = function () {                                // 페이지가 로딩되면 실행
    printTime();
}