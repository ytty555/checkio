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

function romanNumerals(number) {
  let numStr = number.toString();
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

  toRomeNum(numStr, "units");
}

romanNumerals(3);
