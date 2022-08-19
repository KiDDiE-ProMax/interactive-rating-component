const container = document.querySelector(".container");
const summitBtn = document.querySelector(".summit");
const ratingNums = document.querySelectorAll(".ratingNums");
const ratingPage = document.querySelector(".ratingPage");
const thankyouPage = document.querySelector(".thankyouPage");
const rating = document.querySelector(".rating");

let ratingNum;
let israted = false;
let prevRating;
for (let i = 0; i < ratingNums.length; i++) {
  ratingNums[i].addEventListener("click", () => {
    if (israted == true) {
      prevRating.style =
        "background-color: hsla(216, 12%, 54%, 0.138); color: hsl(216, 12%, 54%);";
    }
    ratingNum = ratingNums[i].id;
    ratingNums[i].style = "background-color: hsl(25, 97%, 53%); color: white;";
    prevRating = ratingNums[i];
    israted = true;
  });
}

summitBtn.addEventListener("click", () => {
  if (israted == false) {
    toastAlert("Please rate before summiting!");
    return;
  }
  ratingPage.style.display = "none";
  thankyouPage.style.display = "flex";
  rating.textContent = `You selected ${ratingNum} out of 5`;
});

const toastAlert = (inputText) => {
  const noti = document.createElement("div");
  noti.textContent = `${inputText}`;
  noti.classList.add("noti");
  container.append(noti);
  noti.style.top = `-${noti.offsetHeight}px`; // ***notice using 'bottom'***
  setTimeout(() => {
    noti.style.top = 0;
  }, 100);
  setTimeout(() => {
    noti.style.top = `-${noti.offsetHeight}px`;
  }, 1500);
};
