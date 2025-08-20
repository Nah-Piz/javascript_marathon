const output = document.querySelectorAll('span');
const input = document.querySelectorAll('input');
const button = document.querySelector('#button1');
const pause = document.querySelector('#button2');
const stop = document.querySelector('#button3');
let hhour = 0;
let minSet = 0;
let secSet = 0;
let totalSeconds = 0;
let isCounting;
let countDown;
let targrtTime = 0;


input.forEach(ipt => {
  ipt.addEventListener('keyup', ()=>{
    checkCountDown(inputFunc, event)
  })
})
function inputFunc() {
  if (event.target.id === 'hours') {
    inputUserTime(event)
    hourSet = event.target.value;
  } else if (event.target.id === 'min') {
    inputUserTime(event)
  } else if (event.target.id === 'sec') {
    inputUserTime(event)
  }}
function inputUserTime(e) {
  t = Number(e.target.value);
  output.forEach(opt => {
    if (e.target.id === opt.id) {
      opt.innerText = t;
    }
  })
  if (e.target.id === 'min') {
    minSet = t
  } else if (e.target.id === 'sec') {
    secSet = t
  } if (e.target.id === 'hours') {
    hhour = t
  }
}
let timeInertval;
button.addEventListener('click', ()=>{
  checkCountDown(startFunc)
})
function checkCountDown(func,a) {
  if (isCounting) {
    alert('YaYi Wait for countdown to finish')
  } else {
    func(a)
  }
}
function startFunc() {
  input.forEach(it => it.value = 0)
  handleCountingTime()
  intervalSetter()
  pause.style.display = 'inline';
  stop.style.display = 'inline';
  isCounting = true;
}
pause.addEventListener('click', ()=>{
  if (event.target.innerText === 'Pause') {
    clearInterval(timeInertval)
    event.target.innerText = 'Resume'
  } else {
    intervalSetter()
    event.target.innerText = 'Pause'
  }
})
stop.addEventListener('click', ()=>{
  clearInterval(timeInertval);
  totalSeconds = 0;
  pause.style.display = 'none';
  stop.style.display = 'none';
  isCounting = false;
  hhour = 0;
  minSet = 0;
  secSet = 0;
  localStorage.removeItem('remainSeconds');
  updateTimeDisplay()
})
function intervalSetter() {
  timeInertval = setInterval(()=>{
    if (totalSeconds > 0) {
      if (totalSeconds%3600 === 0) {
        hhour--
        minSet = 60
      }
      if (totalSeconds%60 === 0) {
        minSet--
        secSet = 60
      }
      if (secSet > 0) {
        secSet--
      }
      totalSeconds--
      console.log(remainders.total)
      localStorage.setItem('remainSeconds', JSON.stringify(remainders))
    }
    if (totalSeconds === 0) {
      clearInterval(timeInertval)
      localStorage.removeItem('remainSeconds')
      isCounting = false;
    }
    updateTimeDisplay()
  },1000)
}
function updateTimeDisplay() {
  output.forEach(put => {
    if (put.id === 'hours') {
      put.innerText = hhour
    }
    if (put.id === 'sec') {
      put.innerText = secSet
    }
    if (put.id === 'min') {
      put.innerText = minSet
    }
  })
}
function handleCountingTime() {
  let r = hhour;
  let m = minSet;
  let s = secSet;
  if (r>0) {
    m = m + r * 60;
  }
  if (m>0) {
    s = s + m * 60
  }
  if (s>0) {
    totalSeconds = s;
  }
  
}
const remains = JSON.parse(localStorage.getItem('remainSeconds'));
if (remains) {
  totalSeconds = remains.total;
  hhour = remains.hour;
  minSet = remains.mins;
  secSet = remains.secs;
  pause.style.display = 'inline';
  stop.style.display = 'inline';
  intervalSetter()
  isCounting = true;
}