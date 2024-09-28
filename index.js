var x =Math.floor(Math.random()*100+1);
  var attempts=0;

const start=()=>{
    let number=parseFloat(document.querySelector("#number").value);
    let answer="";
if(number==""){
    document.querySelector("#result").innerHTML="please enter the number";
    return;

}
if(number>100 || number<1){
    document.querySelector("#result").innerHTML="please enter the number with in the range";
    return;

}

  
    attempts++;
    if(number>x){
        answer="your guess is too high";
    }
    else if(number<x){
          answer= "your guess is too low";
    }
    else if (number===x){
        answer=`Congratulations! You won! It took you ${attempts} attempts.`;
     
        x = Math.floor(Math.random() * 100 + 1);
        attempts = 0;
    }

    document.querySelector("#result").textContent=`Result:${answer}`;
  
};