function changeList() {
    var city = document.getElementById("city");
    var idx = city.selectedIndex;
    if (city.options[idx].value == "1") {
        location.href = "home.html";
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