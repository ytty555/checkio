
function romanNumerals(number) {
  const romNum = {
    units: {
      one: "I",
      five: "V",
      ten: "X"
    },
    tens: {
      one: "X",
      five: "L",
      ten: "C"
    },
    hundreds: {
      one: "C",
      five: "D",
      ten: "M"
    },
    thousands: {
      one: "M",
      five: "",
      ten: ""
    }
  };
  let numStr = number.toString();
  let razr1 = "";
  let razr2 = "";
  let razr3 = "";
  let razr4 = "";
  function toRomeNum(numStr, units) {
    let nOne = romNum[units].one;
    let nFive = romNum[units].five;
    let nTen = romNum[units].ten;

    let result = "";

    if (numStr == "1") {
      result = nOne;
    } else if (numStr === "2") {
      result = nOne + nOne;
    } else if (numStr === "3") {
      result = nOne + nOne + nOne;
    } else if (numStr === "4") {
      result = nOne + nFive;
    } else if (numStr === "5") {
      result = nFive;
    } else if (numStr === "6") {
      result = nFive + nOne;
    } else if (numStr === "7") {
      result = nFive + nOne + nOne;
    } else if (numStr === "8") {
      result = nFive + nOne + nOne + nOne;
    } else if (numStr === "9") {
      result = nOne + nTen;
    }
    console.log(result);
    return result;
  }

  if (numStr.length === 1) {
    numStr = "000" + numStr;
  } else if (numStr.length === 2) {
    numStr = "00" + numStr;
  } else if (numStr.length === 3) {
    numStr = "0" + numStr;
  }

  let numArr = numStr.split("");
  
  if (numArr[0] !== 0) {
    razr1 = toRomeNum(numArr[0], "thousands");
  } else {
    razr1 = "";
  }
  
  if (numArr[1] !== 0) {
    razr2 = toRomeNum(numArr[1], "hundreds");
  } else {
    razr2 = "";
  }
  
  if (numArr[2] !== 0) {
    razr3 = toRomeNum(numArr[2], "tens");
  } else {
    razr3 = "";
  }
  
  if (numArr[3] !== 0) {
    razr4 = toRomeNum(numArr[3], "units");
  } else {
    razr4 = "";
  }
  let res = razr1 + razr2 + razr3 + razr4;
  console.log(res);
  return res;

}

romanNumerals(3);
