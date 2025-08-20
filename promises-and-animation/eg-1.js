let cards = [
  {
    id: 'bs001',
    name: 'Wasswa Joshua',
    image: 'images/ben.jpg',
    post: 'There are some values I grew believing in them and followed, those are the values I belive in now and always.',
    likes: 0
  },
  {
    id: 'bs002',
    name: 'Mark Nsubuga',
    image: 'images/customer-1.jpg',
    post: "Ipsum dolor sit amet illo obcaecati eaque veniam error sint nostrum voluptatum nam eligendi pariatur beatae!",
    likes: 0
  },
  {
    id: 'bs003',
    name: 'Sebagala Samuel',
    post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit ea, quasi dolorum expedita incidunt tenetur nisi excepturi.",
    image: 'images/customer-2.jpg',
    likes: 0
  },
  {
    id: 'bs004',
    name: 'Benjamin Ssempijja',
    image: 'images/customer-3.jpg',
    post: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque veniam error sint nostrum voluptatum nam eligendi pariatur beatae!",
    likes: 0
  },
  {
    id: 'bs00',
    name: '',
    image: '',
    likes: 0
  },
]

const root = document.getElementById('root');
let likeBTNs = [];

function createCards(params) {
  const cardContainer = document.createElement('div');
  const likeSpan = document.createElement('span');
  const cardImage = document.createElement('img');
  const cardName = document.createElement('h3');
  const post = document.createElement('p');
  const likeBtn = document.createElement('button');
  cardContainer.className = 'card-container';
  likeSpan.className = 'like-span';
  cardImage.className = 'card-image';
  cardName.className = 'card-name';
  post.className = 'post';
  likeBtn.className = 'like-btn';
  likeSpan.textContent = `${params.likes} likes`;
  cardImage.src = params.image;
  cardName.textContent = params.name;
  post.textContent = params.post;
  likeBtn.textContent = `🤍 Like`;
  likeBtn.dataset.id = params.id;
  cardContainer.appendChild(likeSpan)
  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardName);
  cardContainer.appendChild(post);
  cardContainer.appendChild(likeBtn);
  root.appendChild(cardContainer);

  
  likeBtn.addEventListener('click', ()=>{ 
    likeBtn.innerText = '❤ Liked';
    params.likes++
    likeSpan.textContent = `${params.likes} likes`;
  })
}
const recreate = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cards)
    }, 3000);
  })
}
  
async function renderCards() {
  const response = await recreate();
  document.querySelector('.orbit-ctn').remove();
  response.forEach(element => {
    createCards(element)
  });
}
renderCards()

