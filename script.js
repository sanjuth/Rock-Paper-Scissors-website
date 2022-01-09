let SCORE=0;

const dic={
    "paper":"images/Paper.png",
    "scissor":"images/Scissors.png",
    "rock":"images/Rock.png"
};
const userPick=(uchoice) =>{
    console.log(uchoice);
    let game=document.querySelector(".game");
    game.style.display="none";

    let result=document.querySelector(".result");
    result.style.display="flex";

    document.getElementById("userpic").src=dic[uchoice];
    let pc=pcPick();
    judge( uchoice , pc);


}

const pcPick=() =>{
    let choice=["paper","rock","scissor"]
    let pcchoice=choice[Math.floor(Math.random() * 3)];
    console.log(pcchoice);
    document.getElementById("sanjupic").src=dic[pcchoice];
    return pcchoice;
}

const judge=(uchoice,cpHand)=>{
    if (uchoice == "paper" && cpHand == "scissor") {
        setDecision("YOU LOSE!");
      }
      if (uchoice == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (uchoice == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
      }
      if (uchoice == "rock" && cpHand == "scissor") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (uchoice == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
      }
      if (uchoice == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
      }
      if (uchoice == "scissor" && cpHand == "scissor") {
        setDecision("It's a tie!");
      }
      if (uchoice == "scissor" && cpHand == "rock") {
        setDecision("YOU LOSE!");
      }
      if (uchoice == "scissor" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
};

const setDecision=(txt)=>{
    document.querySelector(".middle h1").innerText = txt;
}

const setScore=(sc)=>{
    SCORE=sc;
    document.querySelector(".score h1").innerText=SCORE;
}

const restartGame = () => {
    let game=document.querySelector(".game");
    game.style.display="flex";

    let result=document.querySelector(".result");
    result.style.display="none";
  }