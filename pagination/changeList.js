function chooseOptions() {
    var city = document.getElementById("city");
    var idx = city.selectedIndex;
    if (city.options[idx].value == "1") {
        location.href = "page_1.html";
    }
    else if (city.options[idx].value == "2") {
        location.href = "page_2.html";
    }
    else if (city.options[idx].value == "3") {
        location.href = "page_3.html";
    }
    else if (city.options[idx].value == "4") {
        location.href = "page_4.html";
    }
    else if (city.options[idx].value == "5") {
        location.href = "page_5.html";
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

    if (word.includes("리얼파스타") || word.includes("교동짬뽕") 
        || word.includes("카페요일") || word.includes("기와집갈비") || word.includes("고고라멘")) {
        tr1.style.display = "block";
        tr2.style.display = "none";
        tr3.style.display = "none";
        tr4.style.display = "none";
        tr5.style.display = "none";
    }
    else if (word.includes("오래가는 헤어샵") || word.includes("추오정 남원추어탕")
    || word.includes("커피온리") || word.includes("화요일케이크") || word.includes("더치앤빈")) {
        tr1.style.display = "none";
        tr2.style.display = "none";
        tr3.style.display = "block";
        tr4.style.display = "none";
        tr5.style.display = "none";
    }
    else if (word.includes("착한초밥") || word.includes("예만두")
    || word.includes("장금수부대찌개") || word.includes("찬우식당") || word.includes("싸움의고수")) {
        tr1.style.display = "none";
        tr2.style.display = "none";
        tr3.style.display = "none";
        tr4.style.display = "none";
        tr5.style.display = "block";
    }
    pages.style.display = "none";
}