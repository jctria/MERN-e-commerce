// Function to randomize the product cards in recommended and same brand card carousels 
function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex !== 0) {
  
        // Pick a random element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        // Swap with the current element
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export default shuffleArray; 
