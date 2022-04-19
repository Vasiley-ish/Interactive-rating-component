"use strict"

let raiting = 0
let ratingButtons = document.getElementsByClassName('rating__button')

for (let index = 0; index < ratingButtons.length; index++) {
    const ratingButton = ratingButtons[index];

    ratingButton.addEventListener('click', function(event) {

        for (let index = 0; index < ratingButtons.length; index++) {
            const ratingButton = ratingButtons[index];
            ratingButton.classList.remove('circle-selected')
        }

        ratingButton.classList.add('circle-selected')

        raiting = ratingButton.innerHTML
    })

}

let submitButton = document.getElementById('submitRating')

submitButton.addEventListener('click', function(event) {
    if (raiting != 0) {
        event.target.parentElement.remove()
        makeThankYouCard(raiting)
    }
})

function makeThankYouCard(rating) {
    let main = document.getElementsByClassName('main')[0]
    let thankYouCard = document.createElement('div')
    thankYouCard.classList.add('card', 'main__card')
    let thankYouCardContent = `
    <img class="card__image" src="./images/illustration-thank-you.svg" alt="Thank you!">
    <p class="text--highlighted rating__card">You selected ${rating} out of 5</p>
    <h1 class="title text--center">Thank you!</h1>
    <p class="text text--center">We appreciate you taking the time to give a rating. If you ever need more support,
      don’t hesitate to get in touch!</p> `

    thankYouCard.innerHTML = thankYouCardContent
    main.append(thankYouCard)
}