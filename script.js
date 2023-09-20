// Default size = 16px
makeSketch(16);

// Create x rows, fill with x numbers
function makeSketch(size){
    for (let i = 0; i < size; i++){
        const boxesContainer = document.createElement('div');
        boxesContainer.setAttribute('class', 'sketch-boxes-container');
        document.querySelector('.sketch-container').appendChild(boxesContainer);
    
        for (let i = 0; i < size; i++){
            const boxes = document.createElement('div');
            boxes.setAttribute('class', 'sketch-boxes');
            // Make each box size fill the 500px space
            let boxSize = 350 / size + 'px';
            boxes.style.width = boxSize;
            boxes.style.height = boxSize;
            boxesContainer.appendChild(boxes);
        }
    }
}

// Get size from slider
const sketchSize = document.querySelector('.slider');
sketchSize.addEventListener('input', function(event){
    const sketchContainer = document.querySelector('.sketch-container');
    const containerDivs = sketchContainer.querySelectorAll('div');
    containerDivs.forEach(containerDivs => containerDivs.remove());
    makeSketch(event.target.value);
})

// Draw on boxes