makeSketch(16);

const sketchSize = document.querySelector('.slider');
const sketchContainer = document.querySelector('.sketch-container');
const clearbtn = document.querySelector('.clearbtn');
const raibowbtn = document.querySelector('.raibowbtn');
let penColor = '#555555';

// Create x rows, fill with x numbers
function makeSketch(size){
    for (let i = 0; i < size; i++){
        const boxesContainer = document.createElement('div');
        boxesContainer.setAttribute('class', 'sketch-boxes-container');
        document.querySelector('.sketch-container').appendChild(boxesContainer);
    
        for (let i = 0; i < size; i++){
            const boxes = document.createElement('div');
            boxes.setAttribute('class', 'sketch-boxes');
            // Make each box size fill the 300px space
            let boxSize = 300 / size + 'px';
            boxes.style.width = boxSize;
            boxes.style.height = boxSize;
            boxesContainer.appendChild(boxes);
        }
    }
}

// Get size from slider
sketchSize.addEventListener('input', function(event){
    const containerDivs = sketchContainer.querySelectorAll('div');
    containerDivs.forEach(containerDivs => containerDivs.remove());
    makeSketch(event.target.value);
    
    // Draw on boxes (repeat here because it doesn't work if it is just outside)
    document.querySelectorAll('.sketch-boxes').forEach(drawNow);
})

// Draw on boxes
document.querySelectorAll('.sketch-boxes').forEach(drawNow);
let isDown = false;
function drawNow(i){
    i.addEventListener('mousedown', function() {
        isDown = true;
    })
    i.addEventListener('mouseup', function() {
        isDown = false;
    })
    i.addEventListener('mousemove', drawHere)
    function drawHere(e){
        if(isDown){
            e.target.style.backgroundColor = penColor;
        }
    }
    sketchContainer.addEventListener('mouseleave', function(){
        isDown = false;
    })
}

// Clear button
clearbtn.addEventListener('click', clearAll);
function clearAll(){
    const containerDivs = sketchContainer.querySelectorAll('div');
    containerDivs.forEach(containerDivs => containerDivs.style.backgroundColor = 'white');
};