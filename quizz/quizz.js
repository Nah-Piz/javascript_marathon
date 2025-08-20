const submit = document.querySelector('.submit');
const activity = document.querySelector('.activity');
const result = document.querySelector('.result');
const qtn = document.querySelector('.qtn');
const instructionDiv = document.querySelector('.instruction');
const ansDiv = document.querySelector('.ans-ctn');
const btn = document.querySelector('.btn');
const qtnNumber = document.querySelector('.qtn-numb');
const loading = document.querySelector('.loading');
let n = 0;
let resultsArray = [];
let checked = false;




function updateQtns() {
  const qtn1 = qtns[n];
  const { id } = qtn1;
  const { instruction } = qtn1;
  const { answers } = qtn1;

  ansDiv.innerText = '';
  qtnNumber.innerText = `Question: ${id}`;
  qtn.innerText = qtn1.question;
  instructionDiv.innerText = instruction;
  answers.forEach(a => {
    const answerDiv = document.createElement('div');
    const answerInput = document.createElement('input');
    const answerLabel = document.createElement('label');
    answerInput.setAttribute('value', `${a.iscorrect}`);
    answerInput.setAttribute('type', 'radio');
    answerInput.setAttribute('name', 'qtn');
    answerInput.setAttribute('id',`${a.id}`);
    answerLabel.setAttribute('for',`${a.id}`);
    answerLabel.innerText = a.answer;
    answerDiv.appendChild(answerInput);
    answerDiv.appendChild(answerLabel);
    ansDiv.appendChild(answerDiv);
  })
}

let opted;
function checkAnswer() {
  let options = document.querySelectorAll('input');
  options.forEach(o=>{
    if (o.checked) {
      opted = o.value;
      checked = true
    }
  });
  if (checked) {
    (opted === 'true') ? resultsArray.push(true) : resultsArray.push(false);
  }
}
function resultsFunction() {
  let ll = resultsArray.length;
  console.log(ll)
  let passed = 0;
  let failed = 0;
  resultsArray.forEach(r => {
    (r===true) ? passed++ : failed++;
  })
  document.querySelector('.pass').innerText = `${passed} questions`;
  document.querySelector('.fail').innerText = `${failed} questions`;
  document.querySelector('.total').innerText = ll;
  console.log(passed, failed);
}

function submitFunc() {
  loading.style.display = 'block';
  activity.style.display = 'none';
  setTimeout(()=>{
      n++;
    if (n>=qtns.length) {
      loading.style.display = 'none';
      result.style.display = 'flex';
      activity.style.display = 'none';
      resultsFunction() 
    } else {
      loading.style.display = 'none';
      activity.style.display = 'block';
      updateQtns()
    }
  },5000);
}
updateQtns()
submit.addEventListener('click', ()=>{
  checkAnswer()
  console.log('opted'+opted, 'passedQtn '+resultsArray.length, 'checked '+checked);
  if (checked) {
    submitFunc()
  } else {
    document.querySelector('.warning').style.display = 'block';
    setTimeout(()=>{
      document.querySelector('.warning').style.display = 'none';  
    },3000)
  }
  checked = false;
})
btn.addEventListener('click', ()=>{
  loading.style.display = 'block';
    result.style.display = 'none';
  setTimeout(()=>{
    loading.style.display = 'none';
    result.style.display = 'none';
    activity.style.display = 'block';
    n = 0;
    updateQtns()
  },5000)
  resultsArray = []
})