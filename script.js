function createDivs(size){
    // create x rows, fill with x numbers
    for (let i = 0; i < size; i++){
        const boxesContainer = document.createElement('div');
        boxesContainer.setAttribute('class', 'sketch-boxes-container');
        document.querySelector('.sketch-container').appendChild(boxesContainer);
    
        for (let i = 0; i < size; i++){
            const boxes = document.createElement('div');
            boxes.setAttribute('class', 'sketch-boxes');
            boxesContainer.appendChild(boxes);
        }
    }
}


