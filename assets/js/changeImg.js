let cnt1 = 1;
let cnt2 = 1;
let cnt3 = 1;

function changeImg1(obj) {
  if (cnt1 % 2 == 1) {
    obj.src = "../assets/images/full_heart.png";
  } else {
    obj.src = "../assets/images/empty_heart.png";
  }
  cnt1++;
}

function changeImg2(obj) {
  if (cnt2 % 2 == 1) {
    obj.src = "../assets/images/full_heart.png";
  } else {
    obj.src = "../assets/images/empty_heart.png";
  }
  cnt2++;
}

function changeImg3(obj) {
  if (cnt3 % 2 == 1) {
    obj.src = "../assets/images/full_heart.png";
  } else {
    obj.src = "../assets/images/empty_heart.png";
  }
  cnt3++;
}