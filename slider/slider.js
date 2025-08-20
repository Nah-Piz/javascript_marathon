const prev = document.querySelector('.left');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const next = document.querySelector('.right');
const bottom = document.querySelector('.bottom');
let n = 1;
const l = images.length;

for (let i=0; i<images.length; i++) {
  const btnDiv = document.createElement('div');
  btnDiv.className = 'btn-div';
  bottom.appendChild(btnDiv);
  selectedBtnDiv()
}
function selectedBtnDiv() {
  images.forEach((img, i) => {
    const btnDiv = document.querySelectorAll('.btn-div');
    if (n===i+1) {
      btnDiv.forEach((b,bi)=>{
        (bi===i) ? b.classList.add('selected') : b.classList.remove('selected')
      });
    }
  })
}
function nextSlide() {
  slider.style.transform = `translateX(-${250*n}px)`;
  n++
}
function getFirstImage() {
  slider.style.transform = `translateX(${0}px)`;
  n = 1
}
next.addEventListener('click', ()=>{
  (n<l) ? nextSlide() : getFirstImage()
  selectedBtnDiv()
})

function prevSlide() {
  slider.style.transform = `translateX(-${250*(n-2)}px)`;
    n--
}
function getLastImage() {
  slider.style.transform = `translateX(-${250*(l-1)}px)`;
    n = l
}
prev.addEventListener('click', ()=>{
  (n>1) ? prevSlide() : getLastImage()
  selectedBtnDiv()
})