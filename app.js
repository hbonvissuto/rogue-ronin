const card = document.querySelector(".card");
const body = document.querySelector('body');
const cardFace = document.querySelector('.cardFace')
const twitch = document.getElementById('twitch')
const youtube = document.getElementById('youtube')
const twitter = document.getElementById('twitter')

// Add a click event listener to the card element
card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
});
// Add a click event listener to the twitch element
twitch.addEventListener("click", function (e) {
    window.open("https://www.twitch.tv", "_blank");
    card.classList.remove('is-flipped');
})
// Add a click event listener to the youtube element
youtube.addEventListener("click", function (e) {
    window.open("https://www.youtube.com", "_blank");
    card.classList.remove('is-flipped');
})
// Add a click event listener to the twitter element
twitter.addEventListener("click", function (e) {
    window.open("https://www.twitter.com", "_blank");
    card.classList.remove('is-flipped');
})


// Add a mouseover event listener to the cardFace element
cardFace.addEventListener("mouseover", function (e) {
    body.classList.toggle('bg-black')
});
// Add a mouseout event listener to the cardFace element
cardFace.addEventListener("mouseout", function (e) {
    body.classList.toggle('bg-white')
});

