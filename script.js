// Default size = 16px
makeSketch(16);

function makeSketch(size){
    // Create x rows, fill with x numbers
    for (let i = 0; i < size; i++){
        const boxesContainer = document.createElement('div');
        boxesContainer.setAttribute('class', 'sketch-boxes-container');
        document.querySelector('.sketch-container').appendChild(boxesContainer);
    
        for (let i = 0; i < size; i++){
            const boxes = document.createElement('div');
            boxes.setAttribute('class', 'sketch-boxes');
            // Make each box size fill the 500px space
            let boxSize = 500 / size + 'px';
            boxes.style.width = boxSize;
            boxes.style.height = boxSize;
            boxesContainer.appendChild(boxes);
        }
    }
}


