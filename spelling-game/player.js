function createPlayerPage(player,ppp) {
  const playerPageRoot = document.querySelector('#player-page');
  playerPageRoot.innerText = '';
  const h1 = document.createElement('h1');
  playerPageRoot.appendChild(h1);
  h1.innerText = `YaYi ${player.playerName}!!!`;
  const p = document.createElement('p');
  p.className = 'welcome';
  p.innerText = ppp;
  const h3 = document.createElement('h3');
  h3.innerText = 'Your Profile';
  playerPageRoot.appendChild(p);
  playerPageRoot.appendChild(h3);
  playerPageRoot.appendChild(profile(player.playerName, 'Player name: '));
  playerPageRoot.appendChild(profile(`P.${player.playerClass}`, 'Class:'));
  playerPageRoot.appendChild(profile(`${player.wins + player.loses}`, 'Games played:'));
  playerPageRoot.appendChild(profile(`${player.wins}`, 'Games won:'));
  playerPageRoot.appendChild(profile(`${player.loses}`, 'Games lost:'));
  const lize = document.createElement('p');
  lize.className = 'lize';
  lize.innerText = 'Your game set up is ready, jump to the first word.';
  playerPageRoot.appendChild(lize)
}

function profile(p,t) {
  const ctn = document.createElement('div');
  const span = document.createElement('span');
  const span1 = document.createElement('span');
  ctn.appendChild(span);
  ctn.appendChild(span1);
  ctn.className = 'profile-detail';
  span.className = 'detail-name';
  span1.className = 'detail';
  span.innerText = t;
  span1.innerText = p;

  return ctn
}