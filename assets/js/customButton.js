window.onload = function () {
  const realBtn = document.getElementById("real_btn");
  const customBtn = document.getElementById("custom_btn");
  customBtn.addEventListener("click", function () {
    realBtn.click();
  });
}