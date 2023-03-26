function scuberGreetingForFeet(feet){
  // Write your code here!
  let result
  if (feet <= 400) {
    return ("This one is on me!");
  }
  else if (feet <= 2000) {
    return ("That will be twenty bucks.");
  }
  else if (feet < 2500) {
    return ("I will gladly take your thirty bucks.");
  }
  else if (feet > 2500) {
    return ("No can do.")
  }
return result
}

function ternaryCheckCity(city){
  // Write your code here!
  let answer 
if (city === "NYC") {
  return ("Ok, sounds good.");
}
else if (city != "NYC") {
  return ("No go.");
}
return answer
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipAnswer
  if (tip === "generous") {
    return ("Thank you so much.");
  }
  else if (tip === "not as generous") {
    return ("Thank you.");
  }
  else if (tip === "thanks for everything") {
    return ("Bye.");
  }
  return tipAnswer
}