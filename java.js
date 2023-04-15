/*const strText1 ="......";
const strText2 = "Newbiee";
const strText3 = "......";
const strText4 = "20066";

const text1 = document.querySelector(".text1");   
const text2 = document.querySelector(".text2");   
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");

function typing() {
  let i = 0;
  const intervalText1 = setInterval(() => {
      text1.innerHTML += strText1[i];
      i++;
      if (i === strText1.length) {
          clearInterval(intervalText1);
          text1.innerHTML = "";
          let i = 0;
          const intervalText2 = setInterval(() => {
              text2.innerHTML += strText2[i];
              i++;
              if (i === strText2.length) {
                  clearInterval(intervalText2);
                  text2.innerHTML = "";
                  let i = 0;
                  const intervalText3 = setInterval(() => {
                      text3.innerHTML += strText3[i];
                      i++;
                      if (i === strText3.length) {
                          clearInterval(intervalText3);
                          text3.innerHTML = "";
                          let i = 0;
                          const intervalText4 = setInterval(() => {
                              text4.innerHTML += strText4[i];
                              i++;
                              if (i === strText4.length) {
                                  clearInterval(intervalText4);
                                  text4.innerHTML = "";
                              }
                          }, 250);
                      }
                  }, 250);
              }
          }, 250);
      }
  }, 250);
}

typing();



let counter = 0;

const add = setInterval(() => {
    counter++;
    console.log(counter);
    if (counter % 35 === 0) {
        typing();
    }
}, 300);*/
