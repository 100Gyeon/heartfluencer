window.onload = function () {
    const popupForm = document.querySelector('.popup-form');
    const closeBtn = popupForm.querySelector('.close-btn');
    const hide = document.querySelector('.hide');

    // 팝업을 닫기 위한 버튼 이벤트 리스너
    closeBtn.addEventListener('click', () => {
        hide.style.display = 'none';
    });
}