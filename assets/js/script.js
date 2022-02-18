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
const tails = document.getElementById('tails');
const heads = document.getElementById('heads')
const tailsPercent = document.getElementById('tails-percent');
const headsPercent = document.getElementById('heads-percent');
// Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

    flipBtn.addEventListener('click', ()=>{
        let flippedHeads = Math.random() < 0.5

        if(flippedHeads){
            // if it's heads
            pennyImg.src = 'assets/images/penny-heads.jpg';
            message.textContent = "You Flipped Heads!";
            headsRoll++
        }else{
            pennyImg.src = "assets/images/penny-tails.jpg";
            message.textContent = "You Flipped Tails!";
            tailsRoll++
        }
        // Update the scorboard
        heads.textContent = headsRoll;
        tails.textContent = tailsRoll;
    
    // TODO: Calculate the total number of rolls/flips
    let total = tailsRoll + headsRoll;
// Make variables to track the percentages of heads and tails
let percentHeads =0;
let percentTails =0;
 // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)

        if(total >0){
            percentHeads = Math.round((headsRoll / total) * 100);
            percentTails = Math.round((tailsRoll / total) * 100)
        }
        // TODO: Update the display of each table cell
        tailsPercent.textContent = percentTails + '%';
        headsPercent.textContent = percentHeads + '%';
    })   
        


    // Clear Button Click Handler
    const clearBtn = document.getElementById("clear")

    clearBtn.addEventListener('click', ()=> {
 // TODO: Reset global variables to 0
 tailsRoll = 0;
 headsRoll = 0;
 percentHeads = 0;
 percentTails = 0;
// TODO: Update the scoreboard (same logic as in flip button click handler)
heads.textContent = headsRoll;
tails.textContent = tailsRoll;
headsPercent.textContent = percentHeads;
tailsPercent.textContent = percentTails;
message.textContent = "Let's Get Rolling";
    })

})