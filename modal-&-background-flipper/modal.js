const modalBtn = document.querySelector('.modal-btn');
const exit = document.querySelector('.exit');
const modalContainer = document.querySelector('.modal-container');
const currentBGC = document.querySelector('.current-bgc');
const updateBGCbtn = document.querySelector('.upadate-bgc-btn');
const BGChexCode = document.querySelector('.bgc-hex-code');
let active = false;


modalBtn.addEventListener('click', modalBtnFunction)
function modalBtnFunction() {
  console.log('btn', active)
  if (!active) {
    console.log('btn executed', active)
    active = true;
    let r = Math.floor(Math.random()*2);
    (r===0) ? modalContainer.classList.add('active1') : modalContainer.classList.add('active2');
  }
}
exit.addEventListener('click', exitFunction)
function exitFunction() {
  active = false;
  let r = Math.floor(Math.random()*2);
  (r===0) ? modalContainer.classList.add('fades-in') : modalContainer.classList.add('fades-in1');
}

modalContainer.addEventListener('animationend', ()=>{
  if (event.animationName === 'fade-in') {
    modalContainer.classList.remove('active1');
    modalContainer.classList.remove('active2');
    modalContainer.classList.remove('fades-in');
  } else if (event.animationName === 'slide-up') {
    modalContainer.classList.remove('active1');
    modalContainer.classList.remove('active2');
    modalContainer.classList.remove('fades-in1');
  }
})

function generateHexFig() {
  let hexFig = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  const rn = Math.floor(Math.random()*hexFig.length);
  let fig = hexFig.filter((h, i) => {
    if (i === rn) return h
  })
  return fig
}
function generateHexCode() {
  let hexCode = '';
  for (let r = 0; r<6; r++) {
    hexCode += generateHexFig()
  } 
  return hexCode
}

updateBGCbtn.addEventListener('click', ()=>{
  const currentHex = `#${generateHexCode()}`
  document.body.style.backgroundColor = currentHex;
  currentBGC.style.backgroundColor = currentHex;
  BGChexCode.innerText = currentHex;
  BGChexCode.style.color = currentHex
})
window.addEventListener('click', ()=>{
  if (event.target === document.body && event.target !== modalContainer) {
    console.log('exit', active)
    if (event.target !== modalBtn && active === true) {
      exitFunction()
      console.log('exit executed', active)
    }
  }
})