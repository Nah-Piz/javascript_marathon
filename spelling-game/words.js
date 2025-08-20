let person = {
  playerName: 'Guest Player',
  playerClass: '1',
  played: [],
  gameNumber: 0,
  wins: 0,
  loses: 0,
}

const p1 = [
  {
    audio: 'audios/P1/Voice 001.m4a',
    spelling: 'cat'
  },
  {
    audio: 'audios/P1/Voice 002.m4a',
    spelling: 'dog'
  },
  {
    audio: 'audios/P1/Voice 003.m4a',
    spelling: 'run'
  },
  {
    audio: 'audios/P1/Voice 004.m4a',
    spelling: 'jump'
  },
  {
    audio: 'audios/P1/Voice 005.m4a',
    spelling: 'red'
  },
  {
    audio: 'audios/P1/Voice 006.m4a',
    spelling: 'blue'
  },
  {
    audio: 'audios/P1/Voice 007.m4a',
    spelling: 'sun'
  },
  {
    audio: 'audios/P1/Voice 008.m4a',
    spelling: 'hand'
  },
  {
    audio: 'audios/P1/Voice 009.m4a',
    spelling: 'mom'
  },
  {
    audio: 'audios/P1/Voice 010.m4a',
    spelling: 'dad'
  }
]

const p2 = [
  {
    audio: 'audios/P2/Voice 011.m4a',
    spelling: 'and'
  },
  {
    audio: 'audios/P2/Voice 012.m4a',
    spelling: 'it'
  },
  {
    audio: 'audios/P2/Voice 013.m4a',
    spelling: 'see'
  },
  {
    audio: 'audios/P2/Voice 014.m4a',
    spelling: 'like'
  },
  {
    audio: 'audios/P2/Voice 015.m4a',
    spelling: 'play'
  },
  {
    audio: 'audios/P2/Voice 016.m4a',
    spelling: 'ball'
  },
  {
    audio: 'audios/P2/Voice 017.m4a',
    spelling: 'fish'
  },
  {
    audio: 'audios/P2/Voice 018.m4a',
    spelling: 'book'
  },
  {
    audio: 'audios/P2/Voice 019.m4a',
    spelling: 'cake'
  },
  {
    audio: 'audios/P2/Voice 020.m4a',
    spelling: 'tree'
  },
  {
    audio: 'audios/P2/Voice 021.m4a',
    spelling: 'car'
  }
]

const p3 = [
  {
    audio: 'audios/P3/Voice 022.m4a',
    spelling: 'friend'
  },
  {
    audio: 'audios/P3/Voice 023.m4a',
    spelling: 'because'
  },
  {
    audio: 'audios/P3/Voice 024.m4a',
    spelling: 'night'
  },
  {
    audio: 'audios/P3/Voice 025.m4a',
    spelling: 'light'
  },
  {
    audio: 'audios/P3/Voice 026.m4a',
    spelling: 'happily'
  },
  {
    audio: 'audios/P3/Voice 027.m4a',
    spelling: 'jumping'
  },
  {
    audio: 'audios/P3/Voice 028.m4a',
    spelling: 'shopping'
  },
  {
    audio: 'audios/P3/Voice 029.m4a',
    spelling: 'children'
  },
  {
    audio: 'audios/P3/Voice 030.m4a',
    spelling: 'birthday'
  },
  {
    audio: 'audios/P3/Voice 031.m4a',
    spelling: 'animal'
  },
  {
    audio: 'audios/P3/Voice 032.m4a',
    spelling: 'around'
  }
]

const p4 = [
  {
    audio: 'audios/P4/Voice 033.m4a',
    spelling: 'before'
  },
  {
    audio: 'audios/P4/Voice 034.m4a',
    spelling: 'started'
  },
  {
    audio: 'audios/P4/Voice 035.m4a',
    spelling: 'splash'
  },
  {
    audio: 'audios/P4/Voice 036.m4a',
    spelling: 'beach'
  },
  {
    audio: 'audios/P4/Voice 037.m4a',
    spelling: 'teacher'
  },
  {
    audio: 'audios/P4/Voice 038.m4a',
    spelling: 'important'
  },
  {
    audio: 'audios/P4/Voice 039.m4a',
    spelling: 'though'
  },
  {
    audio: 'audios/P4/Voice 040.m4a',
    spelling: 'different'
  },
  {
    audio: 'audios/P4/Voice 041.m4a',
    spelling: 'sometimes'
  },
  {
    audio: 'audios/P4/Voice 042.m4a',
    spelling: 'country'
  },
  {
    audio: 'audios/P4/Voice 043.m4a',
    spelling: 'answer'
  },
]

const p5 = [
  {
    audio: 'audios/P5/Voice 044.m4a',
    spelling: 'recommend'
  },
  {
    audio: 'audios/P5/Voice 045.m4a',
    spelling: 'necessary'
  },
  {
    audio: 'audios/P5/Voice 046.m4a',
    spelling: 'occasion'
  },
  {
    audio: 'audios/P5/Voice 047.m4a',
    spelling: 'environment'
  },
  {
    audio: 'audios/P5/Voice 048.m4a',
    spelling: 'government'
  },
  {
    audio: 'audios/P5/Voice 049.m4a',
    spelling: 'rhythm'
  },
  {
    audio: 'audios/P5/Voice 050.m4a',
    spelling: 'conscience'
  },
  {
    audio: 'audios/P5/Voice 051.m4a',
    spelling: 'privilege'
  },
  {
    audio: 'audios/P5/Voice 052.m4a',
    spelling: 'independent'
  },
  {
    audio: 'audios/P5/Voice 053.m4a',
    spelling: 'immediately'
  },
  {
    audio: 'audios/P5/Voice 054.m4a',
    spelling: 'embarrass'
  }
]

const p6 = [
  {
    audio: 'audios/P6/Voice 055.m4a',
    spelling: 'foreign'
  },
  {
    audio: 'audios/P6/Voice 056.m4a',
    spelling: 'guarantee'
  },
  {
    audio: 'audios/P6/Voice 057.m4a',
    spelling: 'definitely'
  },
  {
    audio: 'audios/P6/Voice 058.m4a',
    spelling: 'accommodate'
  },
  {
    audio: 'audios/P6/Voice 059.m4a',
    spelling: 'conscious'
  },
  {
    audio: 'audios/P6/Voice 060.m4a',
    spelling: 'exaggerate'
  },
  {
    audio: 'audios/P6/Voice 061.m4a',
    spelling: 'parallel'
  },
  {
    audio: 'audios/P6/Voice 062.m4a',
    spelling: 'separate'
  },
  {
    audio: 'audios/P6/Voice 063.m4a',
    spelling: 'benevolent'
  },
  {
    audio: 'audios/P6/Voice 064.m4a',
    spelling: 'liaison'
  },
  {
    audio: 'audios/P6/Voice 065.m4a',
    spelling: 'entrepreneur'
  },
]

const p7 = [
  {
    audio: 'audios/P7/Voice 066.m4a',
    spelling: 'colonel'
  },
  {
    audio: 'audios/P7/Voice 067.m4a',
    spelling: 'hierarchy'
  },
  {
    audio: 'audios/P7/Voice 068.m4a',
    spelling: 'maintenance'
  },
  {
    audio: 'audios/P7/Voice 069.m4a',
    spelling: 'miscievous'
  },
  {
    audio: 'audios/P7/Voice 070.m4a',
    spelling: 'pronunciation'
  },
  {
    audio: 'audios/P7/Voice 071.m4a',
    spelling: 'queue'
  },
  {
    audio: 'audios/P7/Voice 072.m4a',
    spelling: 'retaurant'
  },
  {
    audio: 'audios/P7/Voice 073.m4a',
    spelling: 'sacrilegious'
  },
  {
    audio: 'audios/P7/Voice 074.m4a',
    spelling: 'sergeant'
  },
  {
    audio: 'audios/P7/Voice 075.m4a',
    spelling: 'supersede'
  },
  {
    audio: 'audios/P7/Voice 076.m4a',
    spelling: 'threshold'
  },
  {
    audio: 'audios/P7/Voice 077.m4a',
    spelling: 'weird'
  },
]