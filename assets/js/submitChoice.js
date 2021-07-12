function menuChoice() {
  const menu = document.getElementById("menu_list");
  const idx = menu.selectedIndex;
  return menu.options[idx].value;
}

function orangeBtnClick() {
  const check = menuChoice();
  if (check == "") {
    alert("선택된 메뉴가 없습니다.");
  }
  else {
    alert(check + " 선택 완료");
  }
}

function dateChoice() {
  const currDate = document.getElementById("current_date");
  return currDate.value;
}

function pinkBtnClick() {
  const check1 = menuChoice();
  const check2 = dateChoice();
  if (check1 == "" || check2 == "") {
    alert("선택되지 않은 항목이 있습니다. 확인해 주세요.");
  }
  else {
    alert(check1 + " 메뉴가 성공적으로 접수되었습니다.\n" + check2 + "에 방문해 주세요!");
    location.href = "home.html";
  }
}