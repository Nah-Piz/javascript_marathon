const root = document.getElementById('root');
let classData = [
  {
    id: 1,
    stdName: 'Opio Ambrose',
    class: 4,
    stream: 'North',
    age: 10,
    sex: 'M',
  },
  {
    id: 2,
    stdName: 'Achen Ritah',
    class: 2,
    stream: 'South',
    age: 12,
    sex: 'F',
  },
  {
    id: 3,
    stdName: 'Jokene Matthew',
    class: 6,
    stream: 'West',
    age: 20,
    sex: 'M',
  },
  {
    id: 4,
    stdName: 'Were Joshua',
    class: 3,
    stream: 'East',
    age: 17,
    sex: 'M',
  },
  {
    id: 5,
    stdName: 'Nakwaya Belinda',
    class: 1,
    stream: 'South',
    age: 11,
    sex: 'F',
  }
]



const createTable = (data) => {
  const table = document.createElement('table');
  const tabHead = document.createElement('thead');
  const tabBody = document.createElement('tbody');
  const titless = Object.keys(data[0]);
  titless.forEach(title => {
    tabHead.appendChild(createTableHead(title))
  })
  data.forEach(cd => {
    tabBody.appendChild(createBody(cd))
  })
  table.appendChild(tabHead);
  table.appendChild(tabBody);
  root.innerHTML = '';
  root.appendChild(table)
  console.log(data)
}
const createTableHead = (title)=>{
  const titleCat = document.createElement('th');
  titleCat.textContent = title;
  titleCat.id = title
  const keyUp = document.createElement('span');
  keyUp.id = `keyup`;
  keyUp.innerText = '🔼';
  const keyDown = document.createElement('span');
  keyDown.innerText = '🔽';
  keyDown.id = `keydown`;
  titleCat.appendChild(keyDown)
  titleCat.appendChild(keyUp)
  return titleCat
}
const createBody = (cd)=>{
  const tr = document.createElement('tr');
  const col = Object.keys(classData[0]);
  col.forEach(cl=>{
    tr.appendChild(createTableRows(cl,cd))
  })
  return tr
}
const createTableRows = (cl,cd)=>{
  const td = document.createElement('td');
  if (cl==='id') {
    td.innerText = cd.id;
  } else if (cl ==='stdName') {
    td.innerText = cd.stdName
  } else if (cl ==='class') {
    td.innerText = `S.${cd.class}`
  } else if (cl ==='stream') {
    td.innerText = cd.stream
  } else if (cl ==='age') {
    td.innerText = `${cd.age} years`
  } else if (cl ==='sex') {
    td.innerText = cd.sex
  }
  return td
}
createTable(classData)

const the = document.querySelectorAll('th');
the.forEach(th => {
  th.addEventListener('click', ()=>{
    root.innerHTML = '';
    const parentElem = event.target.parentElement;
    const elemID = event.target.id;
    if (elemID === 'keyup') {
      createTable(handleKeyUpEvents())
    }
  })
})
const handleKeyUpEvents = ()=>{
  return [...classData.sort((a,b)=>(b.stdName<a.stdName)?1:-1)]
}
const handleKeyDownEvents = ()=>{
  console.log('yayi keydown')
  return [...classData.sort((a,b)=>(b.stdName>a.stdName)?1:-1)]
}