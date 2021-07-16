window.onload = function () {
  const realBtn = document.getElementById("real-btn");
  const customBtn = document.getElementById("custom_btn");
  customBtn.addEventListener("click", function () {
    realBtn.click();
  });
}