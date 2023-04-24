let sentences = []
function generate() {
  var rules = {
    "start": ["#story"],
    "story": ["Once upon a time there was a #character# who lives in #place#, he was a #ocupation#, #pronoun# #verb# the #object#"],
    "character": ["Dragon", "Avatar", "Lion", "Monkey", "Dog", "Assasin", "Chef", "Police man"],
    "place": ["Lusaka", "Elf land", "Far far far away", "Dream land"],
    "pronoun": ["he", "she"],
    "ocupation": ["Farmer", "Teacher", "Maid", "Doctor", "Footballer", "Chef", "designer"],
    "verb": ["served", "Stole", "Robed", "Washed", "Draged", "Destroyed", "Built", "Arresed", "kicked", "cooked"],
    "object": ["Princes", "King", "Captain", "Money", "Bank", "Lazy guy", "House", "Clothes", "Car", "farmer", "ball", "food"]
  }


  let grammar = tracery.createGrammar(rules); // to create the grammar we just defined. 
  let expansion = grammar.flatten('#start#'); // generate some end resul
  sentences.push(expansion);
  printSentences(expansion);
}

function printSentences(sentences) {
  let textBox = document.getElementById("sentences");
  textBox.innerHTML = "";
  textBox.innerHTML = sentences;

}

$(document).ready(function () {

  generate(); // call it once the page loads
})



