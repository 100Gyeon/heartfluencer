function showAuth() {
  // 결식아동 인증할 때 필요한 함수
  const auth = document.getElementById("card");
  const style = window.getComputedStyle(auth);
  const value = style.getPropertyValue("visibility");
  if (value == "hidden") {
    auth.style.visibility = "visible";
    auth.style.display = "block";
  }
  else {
    auth.style.visibility = "hidden";
    auth.style.display = "none";
  }
}