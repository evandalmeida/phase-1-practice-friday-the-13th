
/* NOTES:
- ternary statement is an if else statement, consie version is a ternary statement
        - question mark is if, : is else, so if first item is TRUE and the seond part will run if FALSE
*/




// Global Constants
const navbar = document.getElementById('movie-list')
let currentMovie 


// Taken from challenge 1 code, to reuse for challenge 3
// Challenge 2: As soon as the page loads, we should see the details of the **first** movie in the dataset.
function populateDetails (movieObject) {
    currentMovie = movieObject
    const detailImg = document.getElementById("detail-image")
    detailImg.src = movieObject.image
    const title = document.getElementById("title")
    title.textContent = movieObject.title 
    const yearRe = document.getElementById("year-released")
    yearRe.textContent = movieObject.release_year
    const desc = document.getElementById("description")
    desc.textContent = movieObject.description
    const wacthed = document.getElementById("watched")
    watched.textContent = movieObject.watched ? "Watched" : "Unwatched"
    const amount = document.getElementById("amount")
    amount.textContent = movieObject.blood_amount
}


// Challenge 1: For each movie returned from `http://localhost:3000/movies` create an image and add it to the `movie-list` nav element.
fetch(`http://localhost:3000/movies/`)
.then(response => response.json())
// .then(data => console.log(data))
.then(movieObjectArray => {
    movieObjectArray.forEach(movieObject => {
        const img = document.createElement('img')
        img.src = movieObject.image
        navbar.append(img)
        /* Challenge 3:
        a. When you click on each movie image in the top nav, you should populate the detail area with the `image`, `title`, `release_year`, `description`, `watched`, and `blood_amount` for the movie that was clicked.
        b. If the value of 'watched' is false, the button should say 'Unwatched'. If the value is true, then the button should say 'Watched'.
        */
        img.addEventListener("click", () => populateDetails(movieObject))
    });
    const firstMovie = movieObjectArray[0]
    populateDetails(firstMovie)
});


/* Challenge 4:
a. When you click on the button in the details it should toggle between `Watched` or `Unwatched` depending on the value of `watched` for the movie currently being displayed.
b. The watched value should stay the same when you click between the different movies._

- added code outside becasue it should only happen once
*/

const theButton = document.getElementById("watched")
theButton.addEventListener("click", () =>{
    currentMovie.watched = !currentMovie.watched //if TRUE make it FALSE and if FALSE make it TRUE
    theButton.textContent = currentMovie.watched ? "Watched" : "Unwatched"
});


// Challenge 5: On the right side there's a form that allows the user to enter a number of blood drops to add to each movie (don't ask why). For each movie, I should be able to add more drops. 
const form = document.querySelector("#blood-form");
form.addEventListener('submit', event => {
    event.preventDefault()
    const amountOfBlood = event.target['blood-amount'].value //grabs values you enter into the form
    // input do not have textContent
    currentMovie.blood_amount += parseInt(amountOfBlood)
    const amountspan = document.getElementById('amount')
    amountspan.textContent =currentMovie.blood_amount
});