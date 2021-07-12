function Rating() { };
Rating.prototype.rate = 0;
Rating.prototype.setRate = function (newrate) {
    // 클릭한 별 이전 모두 체크 처리
    this.rate = newrate;
    const items = document.querySelectorAll('.rate_radio');
    items.forEach(function (item, idx) {
        if (idx < newrate) {
            item.checked = true;
        } else {
            item.checked = false;
        }
    });

}
const rating = new Rating();
document.addEventListener('DOMContentLoaded', function () {
    // 별 선택 이벤트 리스너
    document.querySelector('.rating').addEventListener('click', function (e) {
        const elem = e.target;
        if (elem.classList.contains('rate_radio')) {
            rating.setRate(parseInt(elem.value));
        }
    })
});