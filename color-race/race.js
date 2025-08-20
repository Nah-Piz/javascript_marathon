const top1 = document.querySelector('.color-top-1')
const top2 = document.querySelector('.color-top-2')
const left1 = document.querySelector('.color-left-1')
const left2 = document.querySelector('.color-left-2')
const right1 = document.querySelector('.color-right-1')
const right2 = document.querySelector('.color-right-2')
const bottom1 = document.querySelector('.color-bottom-1')
const bottom2 = document.querySelector('.color-bottom-2')

console.log(top1)
console.log(top2)
console.log(left1)
console.log(left2)
console.log(right1)
console.log(right2)
console.log(bottom1)
console.log(bottom2)

const timer = () => 
  new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 12);
    console.log(time)
    setTimeout(() => {
      resolve(time)
    }, 2000);
  })

timer().then((response)=>{
  console.log(response);
  colorSet1(response);
});
timer().then((response)=>{
  console.log(response);
  colorSet2(response);
})

let period = 0;
function colorSet1(params) {
  period = params/4;
  top1.classList.add('slides-right');
  top1.style.animationDuration = `${period}s`;
}

let period1 = 0;
function colorSet2(params) {
  period1 = params/4;
  top2.classList.add('slides-right');
  top2.style.animationDuration = `${period1}s`;
}

window.addEventListener('animationend', ()=>{
  if (event.animationName === 'slide-right') {
    right1.classList.add('slides-down');
    right1.style.animationDuration = `${period}s`;

    right2.classList.add('slides-down');
    right2.style.animationDuration = `${period1}s`;
  }
  if (event.animationName === 'slide-down') {
    bottom1.classList.add('slides-left');
    bottom1.style.animationDuration = `${period}s`;
    
    bottom2.classList.add('slides-left');
    bottom2.style.animationDuration = `${period1}s`;
  }
  if (event.animationName === 'slide-left') {
    left1.classList.add('slides-up');
    left1.style.animationDuration = `${period}s`;
    
    left2.classList.add('slides-up');
    left2.style.animationDuration = `${period1}s`;
  }
  if (event.animationName === 'slide-up') {
    setTimeout(() => {
      if (period<period1) {
        alert('red color wins')
      } else {
        alert('blue color wins')
      }
    }, 5000);
  }
})