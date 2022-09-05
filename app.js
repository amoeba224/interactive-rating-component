const rating = document.getElementById("rating");
const numbers = Array.from(document.getElementsByClassName("number"));
const score = document.querySelector(".score");
const submitBtn = document.getElementById("submit");
const thankyou = document.getElementById("thankyou");
const notice = document.querySelector(".notice");

const HIDDEN_CLASSNAME = "hidden";
let clicked = false;
let num = "";

function clickNumber(event) {
    event.preventDefault();
    if(clicked) {
        numbers.forEach((number) => {
            number.style.backgroundColor = "hsl(213, 19%, 18%)";
            number.style.color = "hsl(217, 12%, 63%)";
        })
    } else {
        clicked = true;
        num = event.target.innerText
    }
    event.target.style.backgroundColor = "hsl(217, 12%, 63%)";
    event.target.style.color = "hsl(0, 0%, 100%)";
}


function handleSubmit(event) {
    event.preventDefault();
    if(clicked) {
        rating.classList.add(HIDDEN_CLASSNAME);
        thankyou.style.display = "flex";
        notice.innerText = `You selected ${num} out of 5`;
    }
}

numbers.forEach((number) => number.addEventListener("click",clickNumber));
submitBtn.addEventListener("click", handleSubmit);
