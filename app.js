// function imageToggle() {
//     let displayImage = document.getElementById('bwTarot')
//     if (displayImage.src.match('/images/bw_tarot.png')) {
//         displayImage.src = '/images/color_tarot.png'
//     } else {
//         displayImage.src = '/images/bw_tarot.png'
//     }
// }

// function cardFlip() {
//     let shownCard = document.getElementById('bwTarot')
//     if (shownCard.src.match('/images/bw_tarot.png')) {
//         shownCard.src = '/images/bw_frame.png'

//     } else if (shownCard.src.match('/images/bw_frame.png'))
//         shownCard.src = '/images/bw_tarot.png'
// }


const card = document.querySelector(".cardInner");

card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
});