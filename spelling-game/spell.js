const pages = document.querySelectorAll('.page');
const genBtn = document.querySelector('#gen-btn-ctn');
const genBtnAnime = document.querySelector('.gen-btn-anime');
const genBtnContext = document.querySelector('.gen-btn');
const signUpBtn = document.querySelector('#sign-up');
const pageTitle = document.querySelector('.header-content h3');

function updatePages(pid) {
  pages.forEach(p=>{
    if (pid===p.id) {
      p.style.display = 'block'
    } else {
      p.style.display = 'none'
    }
  })
}
function handleGenBtn() {
  genBtnAnime.style.display = 'none';
  if (genBtnContext.innerText === 'Get Started') {
    genBtnContext.innerText = 'Login';
    pageTitle.innerText = 'Player Set Up';
  updatePages(pagesIds[1]);
  } else if (genBtnContext.innerText === 'Login') {
    (handleLoginEvents()) ? updatePages(pagesIds[2]) : handleLoginEvents()
  } else if (genBtnContext.innerText === 'Sign Up') {
    handleSignEvents();
    updatePages(pagesIds[2])
    genBtnContext.innerText = 'Play Now';
  } else if (genBtnContext.innerText === 'Submit Answer') {
    handleSpellingInputEvents(person)
  }  else if (genBtnContext.innerText === 'Next Word') {
    if (!promotion) {
      setUpGame(person);
      genBtnContext.innerText = 'Submit Answer';
    } else {
      updatePages(pagesIds[2])
      genBtnContext.innerText = 'Play Now';
    }
    ResultsContainer.style.display = 'none';
  }
  
}
const pagesIds = ["landing-page","login-page","player-page","spell-page"]
genBtn.addEventListener('click', ()=>{
  genBtnAnime.style.display = 'inline-block';
  if (genBtnContext.innerText !== 'Play Now') {
    setTimeout(()=>{
      handleGenBtn()
    },3000)
  } else {
    setTimeout(()=>{
      genBtnAnime.style.display = 'none';
      updatePages('spell-page')
      setUpGame(person);
      genBtnContext.innerText = 'Submit Answer';
    },3000)
  }
})
signUpBtn.addEventListener('click', ()=>{
  setTimeout(() => {
    updatePages('sign-up-page')
    genBtnContext.innerText = 'Sign Up';
  }, 2000);
})