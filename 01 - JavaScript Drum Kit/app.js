'use strict';

const keyCodeMap = {
  65: true,
  83: true,
  68: true,
  70: true,
  71: true,
  72: true,
  74: true,
  75: true,
  76: true,
};

const handleKeySelection = (keyCode) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const drum = document.querySelector(`.key[data-key="${keyCode}"]`);
  drum.classList.remove('playing');
  audio.currentTime = 0;
  audio.play();
  drum.classList.add('playing');
};

var removeTransition = function (e) {
  if(e.propertyName !== 'transform'){
    return;
  }
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', (e)=>{
  const keyCode = e.keyCode;
  if(keyCodeMap[keyCode]){
    handleKeySelection(keyCode);
  } else {
    return;
  }
});
