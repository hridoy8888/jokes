document.getElementById("get-data").addEventListener('click', loadJokes);
let jokeDisplay = document.getElementById('jokeDisplay');
function loadJokes(e) {
    // let catagory = document.getElementById("catagory").value;

    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://icanhazdadjoke.com/`, true);
    // xhr.open('GET', `https://dad-jokes.p.rapidapi.com/random/joke`, true);
    
    xhr.setRequestHeader("Accept", "application/json");

    xhr.responseType = 'text';

    xhr.onload = function() {
        if (this.status === 200){
            let data = JSON.parse(this.responseText);
            let jokes = data.joke;
            jokeDisplay.innerHTML = jokes;
            console.log(jokes);
        }
    }
    xhr.send();
}

