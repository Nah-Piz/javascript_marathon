const classElem = document.querySelector('.class');
const wordNumberElem = document.querySelector('.word-number');
const audioElem = document.querySelector('audio');
const speltInputElem = document.querySelector('.zigizaga');
const playerSpelling = document.querySelector('.player-spelling');
const correctSpelling = document.querySelector('.correct-spelling');
const spellingResults = document.querySelector('.spelling-result');
const ResultsContainer = document.querySelector('.player-result-container');
let wordNumber = 0;
let promotion = false;
let personNow;

function classSelector(c) {
  if (c === '1'){
    return p1;
  } else if (c === '2') {
    return p2
  } else if (c === '3') {
    return p3
  } else if (c === '4') {
    return p4
  } else if (c === '5') {
    return p5
  } else if (c === '2') {
    return p6
  } else if (c === '7') {
    return p7
  }
}

function setUpGame(player) {
  let num = player.gameNumber;
  const words = classSelector(player.playerClass);
  classElem.innerText = `P.${player.playerClass}`;
  wordNumberElem.innerText = num+1;
  let word;
  for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (index === num) {
      word = element;
    }
  }
  audioElem.src = word.audio;
}

function handleSpellingInputEvents(player) {
  const value = speltInputElem.value.toLowerCase();
  const unfilledElem = document.querySelector('.unfilled');
  console.log(value)
  if (value !== '') {
    unfilledElem.style.display = 'none';
    notEmptyAnswer(player,value)
    genBtnContext.innerText = 'Next Word';
  } else {
    unfilledElem.style.display = 'block';
    unfilledElem.classList.add('login-failed');
  }
  speltInputElem.value = '';
}

function notEmptyAnswer(player,value) {
  let num = player.gameNumber;
  let isSpellingCorrect;
  const words = classSelector(player.playerClass);
  for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (index === num) {
      correctSpelling.innerText = element.spelling;
      if (element.spelling === value) {
        isSpellingCorrect = true;
        player.wins++
      } else {
        isSpellingCorrect = false;
        player.loses++
      }
    }
  }
  ResultsContainer.style.display = 'block';
  playerSpelling.innerText = value;
  if (isSpellingCorrect) {
    spellingResults.innerText = 'YaYi!!! Correct Spelling...';
    spellingResults.style.color = '#4bac22'
  } else {
    spellingResults.innerText = 'Not YaYi!!! Wrong Spelling';
    spellingResults.style.color = 'red'
  }
  player.played.push(isSpellingCorrect);
  if (num === words.length-1) {
    handlePromotionalEvents(player)
    promotion = true;
  } else {
    promotion = false;
    player.gameNumber++;
  }
  const updatePlayersData = playersData.filter(f => (f.playerName !== player.playerName && f.password !== player.password));
  check(playersData)
  updatePlayersData.push(player);
  playersData = updatePlayersData;
  localStorage.setItem('storedata', JSON.stringify(playersData))
  check(playersData)
  console.log(player)
}

function handlePromotionalEvents(player) {
  const wins = player.played.filter(f => f===true);
  let promotionText;
  if (wins.length >= 5) {
    let classNum = Number(player.playerClass);
    classNum++
    player.playerClass = `${classNum}`;
    promotionText = `Promoted To P.${classNum}`;
  } else {
    promotionText = 'Not Promo';
  }
  player.played = [];
  player.gameNumber = 0;
  createPlayerPage(player,promotionText);
}