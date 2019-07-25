function timeConverter(dayTime) {
  let arrTimeStr = dayTime.match(/\d\d/g);
  let h = Number(arrTimeStr[0]);
  let m = Number(arrTimeStr[1]);
  let prefixArr = ['a.m.', 'p.m.'];
  let currPrefix = "";
  
  currPrefix = h < 12 ? prefixArr[0] : prefixArr[1];
  if (h == 0) {
    h = 12;
  } else {
    h = h > 12 ? h - 12 : h;
  }


  m = m < 10 ? '0' + m : m;

  let res = String(h) + ':' + String(m) + ' ' + currPrefix;

  return res;
}

timeConverter('11:15');