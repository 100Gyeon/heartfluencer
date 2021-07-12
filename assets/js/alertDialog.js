function completeDialog() {
  let obj = document.getElementById("explain");

  let found1 = null;
  let found2 = null;
  let found3 = null;
  let found4 = null;
  const taste = document.getElementsByName("taste");
  const amount = document.getElementsByName("amount");
  const service = document.getElementsByName("service");
  const diversity = document.getElementsByName("diversity");

  // taste
  for (let i = 0; i < taste.length; i++) {
    if (taste[i].checked == true)
      found1 = taste[i];
  }
  if (found1 == null)
    alert("맛 평가가 선택되지 않았습니다.");

  // amount
  for (let i = 0; i < amount.length; i++) {
    if (amount[i].checked == true)
      found2 = amount[i];
  }
  if (found2 == null)
    alert("양 평가가 선택되지 않았습니다.");

  // service
  for (let i = 0; i < service.length; i++) {
    if (service[i].checked == true)
      found3 = service[i];
  }
  if (found3 == null)
    alert("서비스 평가가 선택되지 않았습니다.");

  // diversity
  for (let i = 0; i < diversity.length; i++) {
    if (diversity[i].checked == true)
      found4 = diversity[i];
  }
  if (found4 == null)
    alert("다양성 평가가 선택되지 않았습니다.");

  // explain
  if (obj.value == "") {
    alert("리뷰 설명 칸이 작성되지 않았습니다.\n설명을 작성해 주세요.");
    obj.focus();
  }
  else {
    if (confirm("리뷰를 작성해 주셔서 감사합니다.\n홈에서 더 많은 매장을 구경하세요.") == true) {
      location.href = './home.html';
    } else {
      return;
    }
  }
}
function cancelDialog() {
  if (confirm("작성을 취소하시겠습니까?\n이 페이지를 벗어나면 작성된 내용은 저장되지 않습니다.") == true) {
    history.back();
  } else {
    return;
  }
}