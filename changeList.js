function chooseOptions() {
    var city = document.getElementById("city");
    var idx = city.selectedIndex;
    if (city.options[idx].value == "1") {
        location.href = "pagination/page_1.html";
    }
    else if (city.options[idx].value == "2") {
        location.href = "pagination/page_2.html";
    }
    else if (city.options[idx].value == "3") {
        location.href = "pagination/page_3.html";
    }
    else if (city.options[idx].value == "4") {
        location.href = "pagination/page_4.html";
    }
    else if (city.options[idx].value == "5") {
        location.href = "pagination/page_5.html";
    }
}

function searchText() {
    var word = document.getElementById("word").value;
    var tr1 = document.querySelector(".tr1");
    var tr2 = document.querySelector(".tr2");
    var tr3 = document.querySelector(".tr3");
    var tr4 = document.querySelector(".tr4");
    var tr5 = document.querySelector(".tr5");
    var pages = document.querySelector(".pagination");

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