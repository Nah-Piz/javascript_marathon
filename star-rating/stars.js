const mainContainer = document.querySelector('.stars-container');

let ratings = JSON.parse(localStorage.getItem('storedRatings')) || [
  {
    id: 'cleanliness',
    label: 'Cleanliness',
    rated: 2
  },
  {
    id: 'club',
    label: 'Night Club',
    rated: 2
  },
  {
    id: 'transpot',
    label: 'Transport',
    rated: 2
  },
  {
    id: 'accomodations',
    label: 'Accomodations',
    rated: 2
  },
  {
    id: 'hospitality',
    label: 'Hospitality',
    rated: 2
  }
]

ratings.forEach(rat => {
  mainContainer.appendChild(makeRatingQtn(rat))
})

function makeRatingQtn(qtn) {
  const ratingQtn = document.createElement('div');
  const ratingH3 = document.createElement('h3');
  ratingH3.innerText = qtn.label;
  ratingQtn.className = 'star'
  ratingQtn.appendChild(ratingH3);
  ratingQtn.appendChild(makeStars(qtn,5))
  return ratingQtn
}

function makeStars(qtn, maxRate) {
  const starsContainer = document.createElement('div');
  for (let starPosition = 1; starPosition <= maxRate; starPosition++) {
    const star = document.createElement('span');
    star.id = `${qtn.id}`
    starsContainer.appendChild(star);
    handleRatedStars(starPosition, qtn.rated ,star)
  }
  return starsContainer
} 
function handleRatedStars(s,q,star) {
  if (s <= q) {
    star.classList.add('filled');
    star.classList.remove('empty');
  } else {
    star.classList.remove('filled');
    star.classList.add('empty');
  }
}

const allStars = document.querySelectorAll('span');
allStars.forEach(stt => {
  stt.addEventListener('click', ()=>{
    const parentstarElement = stt.parentElement;
    let currentElem;
    for (let post = 0; post < parentstarElement.children.length; post++) {
      let star = parentstarElement.children[post]
      if (star === event.target) {
        currentElem = post
      }
    }
    for (let post = 0; post < parentstarElement.children.length; post++) {
      handleRatedStars(post,currentElem,parentstarElement.children[post])
    }
    ratings.forEach(r => {
      if (r.id === stt.id) {
        r.rated = currentElem+1;
      }
    })
    localStorage.setItem('storedRatings', JSON.stringify(ratings))
    console.log(ratings)
  })
})