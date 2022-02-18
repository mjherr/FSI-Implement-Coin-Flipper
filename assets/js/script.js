// TODO: Declare any global variables we need
let headsRoll = 0;
let tailsRoll = 0;

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    //Get required elements
const flipBtn = document.querySelector('#flip');
const pennyImg = document.getElementById('penny-image');
const message = document.getElementById('message');


    flipBtn.addEventListener('click', ()=>{
        let flippedHeads = Math.random() < 0.5

        if(flippedHeads){
            // if it's heads
            pennyImg.src = 'assets/images/penny-heads.jpg';
            message.textContent = "You Flipped Heads!";
        }else{
            pennyImg.src = "assets/images/penny-tails.jpg";
            message.textContent = "You Flipped Tails!";
        }
    })
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})