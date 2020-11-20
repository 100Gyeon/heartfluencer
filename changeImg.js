var cnt = 1;

function changeImg(obj) {
    if (cnt % 2 == 1) {
        obj.src = "media/full_heart.png";
    } else {
        obj.src = "media/empty_heart.png";
    }
    cnt++;
}