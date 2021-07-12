function chooseOptions() {
  const city = document.getElementById("city");
  const idx = city.selectedIndex;
  if (city.options[idx].value == "1") {
    location.href = "../../pages/pagination/page_1.html";
  }
  else if (city.options[idx].value == "2") {
    location.href = "../../pages/pagination/page_2.html";
  }
  else if (city.options[idx].value == "3") {
    location.href = "../../pages/pagination/page_3.html";
  }
  else if (city.options[idx].value == "4") {
    location.href = "../../pages/pagination/page_4.html";
  }
  else if (city.options[idx].value == "5") {
    location.href = "../../pages/pagination/page_5.html";
  }
}

function searchText() {
  const word = document.getElementById("word").value;
  const tr1 = document.querySelector(".tr1");
  const tr2 = document.querySelector(".tr2");
  const tr3 = document.querySelector(".tr3");
  const tr4 = document.querySelector(".tr4");
  const tr5 = document.querySelector(".tr5");
  const pages = document.querySelector(".pagination");

  if (word.includes("리얼파스타")) {
    tr1.style.display = "block";
    tr2.style.display = "none";
    tr3.style.display = "none";
    tr4.style.display = "none";
    tr5.style.display = "none";
  }
  else if (word.includes("오래가는 헤어샵")) {
    tr1.style.display = "none";
    tr2.style.display = "none";
    tr3.style.display = "block";
    tr4.style.display = "none";
    tr5.style.display = "none";
  }
  else if (word.includes("착한초밥")) {
    tr1.style.display = "none";
    tr2.style.display = "none";
    tr3.style.display = "none";
    tr4.style.display = "none";
    tr5.style.display = "block";
  }
  pages.style.display = "none";
}