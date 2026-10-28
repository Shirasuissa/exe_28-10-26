const randomNumber = Math.floor(Math.random()*100)+1
console.log(randomNumber);

const form = document.getElementById("guessForm")
const guessInput = document.getElementById("guessInput")
const result = document.getElementById("result")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const guess = Number(guessInput.value)
    
    if (guess < 1 || guess > 100) {
    result.textContent = "Enter a number between 1 and 100";
    }

    else if (guess > randomNumber) {
        result.textContent = "Too high!"
        result.style.color = "red"
    }
    else if (guess < randomNumber) {
       result.textContent ="Too low!" 
       result.style.color = "orange"
    }
    else {
        result.textContent="Correct!"
        result.style.color = "green"
    }

    guessInput.value = "";
    guessInput.focus();
})

