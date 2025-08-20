const header = document.querySelector('header');
const section = document.querySelectorAll('section');
const navItem = document.querySelectorAll('a');
const hero = document.querySelector('.hero');

function removeActiveClass() {
  navItem.forEach(n => n.parentElement.classList.remove('active'))
}
window.addEventListener('scroll', ()=>{
  const currentPosition = window.scrollY;
  removeActiveClass();
  if (currentPosition + 80 > hero.offsetTop+hero.offsetHeight) {
    header.classList.remove('head');
    header.classList.add('hz-sticky');
  } else {
    header.classList.remove('hz-sticky');
    header.classList.add('head');
  }
  navItem.forEach(s => {
    const sectionElement = document.querySelector(s.hash);
    if (currentPosition + 100 > sectionElement.offsetTop && currentPosition + 80 < sectionElement.offsetTop + sectionElement.offsetHeight) {
      s.parentElement.classList.add('active')
    }
  })
})
console.log(section)
console.log(navItem)
navItem.forEach(nav => {
  nav.addEventListener('click', () => {
    const currentSection = document.querySelector(nav.hash);
    removeActiveClass()
    section.forEach(s => {
      if (s!==currentSection) {
        s.classList.add('not-current');
      } else {
        s.classList.remove('not-current');
        nav.parentElement.classList.add('active');
        const allElement = document.querySelector('.all');
        if (!allElement) createAllElement()
      }
    })
    removeAllElement()
  })
})
function createAllElement() {
  const li = document.createElement('li');
  const all = document.createElement('a');
  all.className = 'all'
  all.innerText = 'Home';
  li.appendChild(all);
  document.querySelector('ul').appendChild(li);
}
function removeAllElement() {
  const allElement = document.querySelector('.all');
  if (allElement) {
    allElement.addEventListener('click', ()=>{
      section.forEach(s => s.classList.remove('not-current'));
      allElement.parentElement.remove()
    })
  }
}
section.forEach(sect => {
  if (sect !== hero) {
    sect.addEventListener('click', ()=>{
      removeActiveClass()
      navItem.forEach(n => {
        if (sect === document.querySelector(n.hash)) {
          n.parentElement.classList.add('active');
          const allElement = document.querySelector('.all');
          if (!allElement) createAllElement()
        }
      })
      section.forEach(ss => {
        if (sect !== ss) {
          ss.classList.add('not-current');
        }
      })
      removeAllElement()
    })
  }
})


//faqs
const FAQS = document.querySelector('.faqs-container');
const faqsCollection = [
  {
    title: 'What is javascript?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique'
  },
  {
    title: 'Why should I learn javascript?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique.'
  },
  {
    title: 'How do I get started with learning javascript?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique.'
  },
  {
    title: 'What are some of the best practices for javascript?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique.'
  },
  {
    title: 'is javascript the best programming language?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique.'
  },
  {
    title: 'Why should not waste my time learning javascript?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique'
  },
]

function generateFAQS() {
  faqsCollection.forEach(fag => {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const p = document.createElement('p');
    summary.innerText = fag.title;
    p.innerText = fag.text;
    details.appendChild(summary);
    details.appendChild(p);
    FAQS.appendChild(details)
  })
}
generateFAQS()

//testimonials
const testers = [
  {
    author: 'Marshall Loen',
    image: 'images/emporer.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique.',
    date: '20th June'
  },
  {
    author: 'Henzia Charlotte',
    image: 'images/Henzia.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique.',
    date: '12th June'
  },
  {
    author: 'Joe Christopher',
    image: 'images/Joe Xriz.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique',
    date: '10th June'
  },
  {
    author: 'Barbara Asinde',
    image: 'images/Ms. Azana.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique.',
    date: '4th June'
  },
  {
    author: 'Sophia Reginnah',
    image: 'images/Ms. Finnest 2.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique.',
    date: '30th May'
  },
  {
    author: 'Wandera Stella',
    image: 'images/Queen Wenda.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio atque sapiente quisquam perferendis illum velit quidem voluptatum similique.',
    date: '20th May'
  },
];
const testimonialsContainer = document.querySelector('.testimonial-container');

function generateTestimonies() {
  testers.forEach(t => {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const nameP = document.createElement('h3');
    const textP = document.createElement('p');
    const date = document.createElement('span');
    article.className = 'testimony';
    img.src = t.image;
    nameP.innerText = t.author;
    textP.innerText = t.text;
    date.innerText = t.date;
    article.appendChild(img);
    article.appendChild(nameP);
    article.appendChild(textP);
    article.appendChild(date);
    testimonialsContainer.appendChild(article);
  })
}
generateTestimonies();

const prev = document.getElementById('prev');
const next = document.getElementById('next');
let numberCounter = 1;


prev.addEventListener('click', ()=>{
  if (numberCounter>1) {
    testimonialsContainer.style.transform = `translateY(-${(numberCounter-2)*300}px)`;
    numberCounter--
  } else {
    testimonialsContainer.style.transform = `translateY(-${(testers.length-1)*300}px)`;
    numberCounter = testers.length
  }
})

let intervalRunning;
next.addEventListener('click', ()=>{
  (numberCounter < testers.length) ? nextTestimonySetter1() : firstTestimonySetter1();
  clearInterval(nextInterval);
  setTimeout(()=>{
    let nextInterval1
    if (!intervalRunning) {
      nextInterval1 = setInterval(()=>{
        let setter = Math.floor(Math.random()*2);
        if (setter === 1) {
          (numberCounter < testers.length) ? nextTestimony() : firstTestimony();
        } else {
          (numberCounter < testers.length) ? nextTestimonySetter1() : firstTestimonySetter1();
        }
      },5000);
    }
    if (intervalRunning === true) {
      clearInterval(nextInterval1)
      intervalRunning = false;
    }
    if (nextInterval1) {
      intervalRunning = true;
    }
    console.log('yayi', nextInterval1)
  },5000)
})
const nextInterval = setInterval(()=>{
  let setter = Math.floor(Math.random()*2);
  if (setter === 1) {
    (numberCounter < testers.length) ? nextTestimony() : firstTestimony();
  } else {
    (numberCounter < testers.length) ? nextTestimonySetter1() : firstTestimonySetter1();
  }
},5000);

function nextTestimony() {
  testimonialsContainer.classList.remove('tem');
  testimonialsContainer.style.transform = `translateY(-${numberCounter*300}px)`;
  numberCounter++
}
function nextTestimonySetter1() {
  testimonialsContainer.classList.add('tem');
  testimonialsContainer.style.gridTemplateColumns = `repeat(${testers.length}, 400px)`;
  testimonialsContainer.style.transform = `translateX(-${numberCounter*400}px)`;
  numberCounter++
}
function firstTestimony() {
  testimonialsContainer.classList.add('tem');
  testimonialsContainer.style.transform = `translateY(-${0}px)`
  numberCounter = 1;
}
function firstTestimonySetter1() {
  testimonialsContainer.classList.add('tem');
  testimonialsContainer.style.gridTemplateColumns = `repeat(${testers.length}, 400px)`;
  testimonialsContainer.style.transform = `translateY(-${0}px)`
  numberCounter = 1;
}

function updateTest(n) {
  const testImage = document.querySelector('.test-image');
  const testerName = document.querySelector('.tester');
  const testified = document.querySelector('.test-text');
  const testifiedDate = document.querySelector('.test-date');

  const who = testers[n];
  testImage.src = who.image;
  testerName.innerText = who.author;
  testified.innerText = who.text;
  testifiedDate.innerText = who.date;
}

let slide = 0;
const back = document.getElementById('back-slide');
const front = document.getElementById('front-slide');
updateTest(slide);

back.addEventListener('click', ()=>{
  const isSeen = front.classList.contains('not-seen');
  if (isSeen) {
    front.classList.remove('not-seen')
  }
  if (slide>0) {
    slide--
    updateTest(slide)
  }
  if (slide===0) {
    back.className = 'not-seen'
  }
})
front.addEventListener('click', ()=>{
  const isSeen = back.classList.contains('not-seen');
  if (isSeen) {
    back.classList.remove('not-seen')
  }
  if (slide<testers.length-1) {
    slide++
    console.log(testers.length, testers.length-slide)
    updateTest(slide)
  }
  if (testers.length-slide===1) {
    front.className = 'not-seen';
  }
})