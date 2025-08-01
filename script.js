const btn = document.getElementById("jokebtn");

const joke = document.getElementById("joke"); 

btn.addEventListener('click', getJoke);

async function getJoke() {
    const url = "https://icanhazdadjoke.com/";

    try {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json(); 

        joke.innerHTML = data.joke; 

    } catch (error) {
        joke.innerHTML = `<p>Joke not found!</p>`; 
    }
}
