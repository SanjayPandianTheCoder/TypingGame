const main = document.querySelector(".main");
const typingArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");

const words = [
    "A day in the life of programmer",
    "What is JavaScript?",
    "What is React?",
    "What is Programming Language?",
    "What's your name?",
    "Where are you from?",
    "This is just random word",
    "What is Remix.js?",
    "New Technologies",
    "Is programming hard?",
    "Why do you wanna become a programmer?",
    "Which programming language you like the most?",
    "What is Golang? and why do you wanna learn it?",
    "What is CSS",
];

const game = {
    start : 0,
    end : 0,
    user : "",
    rand : ""
};

btn.addEventListener("click",()=>{
  if(btn.textContent === "Start"){
    play();
    typingArea.value = "";
    typingArea.disabled = false;
  }
  else if(btn.textContent === "Done"){
    typingArea.disabled = true;
    main.style.borderColor = "#53cc3a";
    end();
  }
});

function play(){
    console.log("Test 1");
    let randText = words[Math.floor(Math.random() * words.length)];
    game.rand = randText;
    main.textContent = randText;
    btn.textContent = "Done";
    main.style.borderColor = "#c8c8c8";
    let duration = new Date();
    game.start = duration.getTime();
}

function end(){
    console.log("Test 2");
    let duration = new Date();
    game.end = duration.getTime();
    const totalTime = (game.end - game.start)/1000;
    game.user = typingArea.value;
    const correct = results();
    main.innerHTML = `Time: ${totalTime} | Score: ${correct.score} out of ${correct.total}`;
    btn.textContent = "Start";

}

function results(){
    let textOne = game.rand.split(" ");
    let textTwo = game.user.split(" ");
    let score = 0;
    textOne.forEach((word,idx) => {
        if(word === textTwo[idx]){
            score++;
        }
    });
    total = textOne.length;
    return {score, total};
}