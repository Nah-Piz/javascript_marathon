let playersData = JSON.parse(localStorage.getItem('storedata')) || [];

const inputElem = document.querySelectorAll('.sign-up-input');
const selectClass = document.querySelector('#player-class');
const allNotFilled = document.querySelector('.all-not-filled');
const playerDetail = document.querySelectorAll('.noww')

inputElem.forEach(elem => {
  elem.addEventListener('change', ()=>{
    const elemID = event.target.id;
    const value = event.target.value;
    if (elemID === 'player-first-name') {
      person.firstName = value;
    } else if (elemID === 'player-second-name') {
      person.SecondName = value
    } else if (elemID === 'player-name') {
      person.playerName = value
    } else if (elemID === 'player-password') {
      person.password = value
    }
  })
});
selectClass.addEventListener('change', ()=>{
  person.playerClass = event.target.value;
})

function handleSignEvents() {
  const man = [...inputElem];
  const allIsFilled = man.some((el) => el.value === '')
  if (allIsFilled) {
    allNotFilled.style.display = 'block';
  } else {
    createPlayerPage(person,'Welcome');
    playersData.push(person);
    localStorage.setItem('storedata', JSON.stringify(playersData))
  }
}



//// Login page

const loginInputElem = document.querySelectorAll('.login-inputs');
let playerLoginInput = {}
loginInputElem.forEach(ipt => {
  ipt.addEventListener('change', ()=>{
    const value = event.target.value;
    const iptID = event.target.id;
    if (iptID === "player-password-input") {
      playerLoginInput.password = value;
    } else if (iptID === "player-name-input") {
      playerLoginInput.playerName = value;
    }
  })
})

function handleLoginEvents() {
  const user = playersData.filter(dat => (dat.playerName === playerLoginInput.playerName && dat.password === playerLoginInput.password))
  if (user.length > 0 && user.length < 2) {
    person = user[0]
    createPlayerPage(person,'Welcome');
    genBtnContext.innerText = 'Play Now';
    document.querySelector('.header-content h3').innerText = `${person.playerName} Profile`
    return true
  } else {
    document.querySelector('.login-failed').style.display = 'block'
  }
}