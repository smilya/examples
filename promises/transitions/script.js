'use strict'

let spider = document.querySelector('.spider');

function moveX(x, duration=1) {
  spider.style.left = spider.getBoundingClientRect().left + x + 'px';
  spider.style.transitionDuration = duration + 's';
  return new Promise((resolve) => {
    setListener(resolve, duration);
  })
}

function moveY(y, duration=1) {
  spider.style.top = spider.getBoundingClientRect().top + y + 'px';
  spider.style.transitionDuration = duration + 's';
  return new Promise((resolve) => {
    setListener(resolve, duration);
  })
}

function move(x, y, duration=1) {
  spider.style.transitionDuration = duration + 's';
  spider.style.left = spider.getBoundingClientRect().left + x + 'px';
  spider.style.top = spider.getBoundingClientRect().top + y + 'px';
  
  let events = 0;
  return new Promise((resolve) => {
    spider.addEventListener('transitionend', function onTrans() {
      if (events != 1) {
        events += 1;
        return
      }
      else {
        spider.removeEventListener('transitionend', onTrans);
        resolve(duration);
      }
    })
  })
}

function rotate(duration=1) {
  return rotate180(duration).then((duration) => clear(duration));

  function rotate180(duration=1) {
    spider.style.transform = !spider.style.transform ? 'rotate(180deg)' : 'rotate(360deg)';
    spider.style.transitionDuration = duration + 's';

    return new Promise ( (r) => {
      setListener(r, duration);    
    }) 
  }

  function clear(duration) {
    return new Promise((resolve) => {
      if (spider.style.transform == 'rotate(360deg)') { 
        spider.style.transitionDuration = '0s';
        spider.style.transform = '';
      }; 
      setTimeout(() => resolve(duration), 0);
    })
  }
}

function setListener(resolve, duration) {
  spider.addEventListener('transitionend', function onTrans() {
    spider.removeEventListener('transitionend', onTrans);
    resolve(duration);
  })
}

moveX(100, 0.5)     .then((time) => {console.log(time); return time })
  .then(time => move(300, 100, time))     .then((time) => {console.log(time); return time })
  .then(time => rotate(time))     .then((time) => {console.log(time); return time })
  .then(time => moveY(200, time))     .then((time) => {console.log(time); return time })
  .then(time => rotate(time))     .then((time) => {console.log(time); return time })
  .then(time => move(100, -50, time))     .then((time) => {console.log(time); return time })
  .then(time => rotate(time))     .then((time) => {console.log(time); return time })