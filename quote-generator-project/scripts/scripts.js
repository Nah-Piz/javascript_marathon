const authourPic = document.querySelector('.author-pic');
const author = document.querySelector('.author');
const year = document.querySelector('.year');
const follow = document.querySelector('.follow');
const quote = document.querySelector('.quote');
const prev = document.querySelector('#prev');
const fav = document.querySelector('#fav');
const next = document.querySelector('#next');
const share = document.querySelector('#share');

let n;
next.addEventListener('click', ()=>{
  quotes.forEach((q, i) => {
    if (author.innerText === q.author.name) {
      return n = i;
    }
  })
  if (author.innerText === quotes[n].author.name) {
    author.innerHTML = quotes[n++].author.name
  }
  console.log(n, quotes[n++].author.name)
})


