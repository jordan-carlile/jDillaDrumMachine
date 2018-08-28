function playSound(e){
    // console.log(`playSound called on this: ${this}`);

    // add cases for div border clicked and div area clicked
    keyCode = e.keyCode || e.target.dataset.key || e.target.parentElement.dataset.key

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)
    if(!audio) return;  // if null return
    audio.currentTime= 0; // rewind to start
    audio.play();

    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove('playing')
}

// listener events
window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll(".key");
// each key div should have a transition end listener
keys.forEach(key => key.addEventListener('transitionend',removeTransition));       
// add event listener to each individual key
keys.forEach(key => key.addEventListener('click',playSound));