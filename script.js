let showFirstNum = document.getElementById("firstNum");
let showSecondNum = document.getElementById("secondNum");
let showSign = document.getElementById("showSign");
let showEqual = document.getElementById("equal");
let showResultNum = document.getElementById("resultNum");
let Result = document.getElementById("result");
let reset = document.getElementById("reset");
let del = document.getElementById("del");
let Num = document.getElementsByClassName("num");
let Sign = document.getElementsByClassName("sign");
let firstNum = "";
let secondNum = "";
let selectedSign = "";
let plus = document.getElementById("plus");

let getFirstNum = (e) => {
  firstNum += e.target.innerHTML;
  showFirstNum.innerHTML = firstNum;

  let setSign = (e) => {
    let getSecondNum = (e) => {
      secondNum += e.target.innerHTML;
      showSecondNum.innerHTML = secondNum;

      for (i = 0; i < Sign.length; i++) {
        Sign[i].removeEventListener("click", setSign);
      }

      if (secondNum.length === 1) {
        del.removeEventListener("click", deletSign);
        let deletSecondNum = () => {
          secondNum = secondNum.slice(0, -1);
          showSecondNum.innerHTML = secondNum;
          if (secondNum.length == "") {
            console.log("length of second num is tohi");
            del.removeEventListener("click", deletSecondNum);
            del.addEventListener("click", deletSign);
          }
        };
        del.addEventListener("click", deletSecondNum);

        let ResetSecondNum = () => {
          firstNum = "";
          secondNum = "";
          selectedSign = "";
          showFirstNum.innerHTML = "";
          showSecondNum.innerHTML = "";
          showSign.innerHTML = "";
          // showEqual.innerHTML = '';
          // showResultNum.innerHTML = '';

          for (i = 0; i < Num.length; i++) {
            Num[i].removeEventListener("click", getSecondNum);
          }
          Result.removeEventListener("click", showResult);

          for (i = 0; i < Num.length; i++) {
            Num[i].addEventListener("click", getFirstNum);
          }
          del.removeEventListener("click", deletSecondNum);
          reset.removeEventListener("click", ResetSecondNum);
        };
        reset.removeEventListener("click", ResetSign);
        reset.addEventListener("click", ResetSecondNum);

        let showResult = () => {
          // showEqual.innerHTML = '=';
          switch (selectedSign) {
            case "+":
              firstNum = (
                parseFloat(firstNum) + parseFloat(secondNum)
              ).toString();
              break;
            case "-":
              firstNum = (
                parseFloat(firstNum) - parseFloat(secondNum)
              ).toString();
              break;
            case "/":
              firstNum = (
                parseFloat(firstNum) / parseFloat(secondNum)
              ).toString();
              break;
            case "x":
              firstNum = (
                parseFloat(firstNum) * parseFloat(secondNum)
              ).toString();
              break;
          }
          //       for (i=0; i<Sign.length; i++) {
          //   Sign[i].removeEventListener('click', setSign)
          // }
          secondNum = "";
          showSecondNum.innerHTML = secondNum;
          showFirstNum.innerHTML = firstNum;
          selectedSign = "";
          showSign.innerHTML = "";
          for (i = 0; i < 4; i++) {
            Sign[i].addEventListener("click", setSign);
          }
          for (i = 0; i < Num.length; i++) {
            Num[i].removeEventListener("click", getSecondNum);
          }
          for (i = 0; i < Num.length; i++) {
            Num[i].removeEventListener("click", getFirstNum);
          }
          Result.removeEventListener("click", showResult);
          del.removeEventListener("click", deletSecondNum);
          del.addEventListener("click", deletFirstNum);
          reset.removeEventListener("click", ResetSecondNum);
          reset.addEventListener("click", ResetFirstNum);
        };
        Result.addEventListener("click", showResult);
      }
    };
    for (i = 0; i < Num.length; i++) {
      Num[i].removeEventListener("click", getFirstNum);
    }
    if (selectedSign === "") {
      for (i = 0; i < Num.length; i++) {
        Num[i].addEventListener("click", getSecondNum);
      }
    }

    selectedSign = e.target.innerHTML;
    showSign.innerHTML = selectedSign;

    let deletSign = () => {
      selectedSign = selectedSign.slice(0, -1);
      showSign.innerHTML = "";

      for (i = 0; i < Sign.length; i++) {
        Sign[i].addEventListener("click", setSign);
      }
      for (i = 0; i < Num.length; i++) {
        Num[i].removeEventListener("click", getSecondNum);
      }
      for (i = 0; i < Num.length; i++) {
        Num[i].addEventListener("click", getFirstNum);
      }

      del.removeEventListener("click", deletSign);
      del.addEventListener("click", deletFirstNum);
    };
    del.removeEventListener("click", deletFirstNum);
    del.addEventListener("click", deletSign);

    let ResetSign = () => {
      firstNum = "";
      // secondNum = '';
      selectedSign = "";
      showFirstNum.innerHTML = "";
      // showSecondNum.innerHTML = '';
      showSign.innerHTML = "";
      // showEqual.innerHTML = '';
      // showResultNum.innerHTML = '';

      for (i = 0; i < Num.length; i++) {
        Num[i].removeEventListener("click", getSecondNum);
      }
      for (i = 0; i < Sign.length; i++) {
        Sign[i].removeEventListener("click", setSign);
      }
      for (i = 0; i < Num.length; i++) {
        Num[i].addEventListener("click", getFirstNum);
      }
      del.removeEventListener("click", deletSign);
      reset.removeEventListener("click", ResetSign);
    };
    reset.removeEventListener("click", ResetFirstNum);
    reset.addEventListener("click", ResetSign);

    for (i = 0; i < Sign.length; i++) {
      Sign[i].removeEventListener("click", setSign);
    }
  };
  if (firstNum.length === 1) {
    for (i = 0; i < Sign.length; i++) {
      Sign[i].addEventListener("click", setSign);
    }
  }

  let delet = () => {
    if (secondNum.length) {
      secondNum = secondNum.slice(0, -1);
      showSecondNum.innerHTML = secondNum;
      console.log(secondNum);
    } else {
      if (selectedSign.length) {
        selectedSign = selectedSign.slice(0, -1);
        showSign.innerHTML = "";
        for (i = 0; i < Sign.length; i++) {
          Sign[i].addEventListener("click", setSign);
        }
      } else {
        if (firstNum.length) {
          firstNum = firstNum.slice(0, -1);
          showFirstNum.innerHTML = firstNum;
        }
      }
    }
  };

  let deletFirstNum = () => {
    firstNum = firstNum.slice(0, -1);
    showFirstNum.innerHTML = firstNum;
    if (firstNum.length == "") {
      del.removeEventListener("click", deletFirstNum);
    }
  };
  if (firstNum.length === 1) {
    del.addEventListener("click", deletFirstNum);
  }

  let ResetFirstNum = () => {
    firstNum = "";
    // secondNum = '';
    // selectedSign = '';
    showFirstNum.innerHTML = "";
    // showSecondNum.innerHTML = '';
    // showSign.innerHTML = '';
    // showEqual.innerHTML = '';
    // showResultNum.innerHTML = '';

    del.removeEventListener("click", deletFirstNum);
    for (i = 0; i < Sign.length; i++) {
      Sign[i].removeEventListener("click", setSign);
    }
    reset.removeEventListener("click", ResetFirstNum);
    if (firstNum.length == "") {
      for (i = 0; i < Num.length; i++) {
        Num[i].addEventListener("click", getFirstNum);
      }
    }
  };
  if (firstNum.length === 1) {
    reset.addEventListener("click", ResetFirstNum);
  }
};

for (i = 0; i < Num.length; i++) {
  Num[i].addEventListener("click", getFirstNum);
}

