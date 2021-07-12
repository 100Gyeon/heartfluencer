window.onload = function () {
    var popupForm, closeBtn, hide;

    popupForm = document.querySelector('.popup_form');
    closeBtn = popupForm.querySelector('.close_btn');
    hide = document.querySelector('.hide');

    // 팝업을 닫기 위한 버튼 이벤트 리스너
    closeBtn.addEventListener('click', () => {
        hide.style.display = 'none';
    });

}