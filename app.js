const residents = [
  {
    id: 'whale',
    name: '鲸鱼娘',
    role: '蓝色海底房间的管理员',
    emoji: '🐋',
    roomTitle: '鲸鱼娘的蓝色小窝',
    mood: '开心',
    intro: '我喜欢把自己的小小愿望收纳进房间里，把海浪、日记和收藏都安静地放在一起。',
    colors: ['#dfeeff', '#c9d9ff'],
    items: [
      ['🌊', '海面上的记忆', '这里总有一片暖蓝色的安静。'],
      ['📝', '纸上的想法', '那些没说出口的心事，先写在纸上。'],
      ['📚', '学习书架', '我喜欢慢慢理解每一件事情。'],
      ['🫧', '蓝色小梦', '海底的夜晚也会发光。']
    ],
    diary: [
      ['2026-09-18', '开心', '我把小窝整理了一遍', '今天重新整理房间的时候，我发现原来很多小东西都已经慢慢安稳地落到了位置上。像是给日常留了一点喘息的空间。'],
      ['2026-09-16', '观察', '记录本身会安抚人', '有时候焦虑并不是真正要解决的事，先写下来，先被看见，也已经是一种安抚。']
    ]
  },
  {
    id: 'cat',
    name: '小橘',
    role: '窗台上的午睡专家',
    emoji: '🐱',
    roomTitle: '小橘的阳光房',
    mood: '慵懒',
    intro: '我住在有太阳的地方，最喜欢晒太阳、打盹和盯着窗外发呆。',
    colors: ['#fff0d8', '#ffd49d'],
    items: [
      ['☀️', '午后阳光', '这束光线，是我最喜欢的座位。'],
      ['🐟', '晚餐计划', '今天也要认真挑选小鱼干。'],
      ['🧶', '毛线球', '滚到床底的东西也值得保存。'],
      ['🌙', '夜间窗景', '晚上看星星，白天看路人。']
    ],
    diary: [
      ['2026-09-18', '慵懒', '今天的阳光刚刚好', '我睡了很长一段时间，醒来的时候，房间安静得像没发生过什么。也许这就是一天最好的状态。'],
      ['2026-09-14', '好奇', '门外有新的声音', '我先观察了一会儿，再轻轻探出脑袋。确认没有危险后，我才决定出门看看。']
    ]
  },
  {
    id: 'rabbit',
    name: '团子',
    role: '花园里的种植员',
    emoji: '🐰',
    roomTitle: '团子的花园小屋',
    mood: '期待',
    intro: '我喜欢种花、观察发芽，也会把希望埋进土里，等它慢慢长大。',
    colors: ['#f9e6f3', '#e7bfd9'],
    items: [
      ['🌷', '第一朵花', '它今天比昨天又高了一点。'],
      ['🌱', '新芽观察', '每一次发芽都值得庆祝。'],
      ['🥕', '午餐便当', '一小段温柔的日子，也要好好吃饭。'],
      ['🎀', '小篮子', '里面装着很多我不想忘记的东西。']
    ],
    diary: [
      ['2026-09-18', '期待', '新种子发芽了', '我今天发现花盆里有一点点绿色，明明还很小，但我已经开始想象它开花时的样子了。'],
      ['2026-09-12', '认真', '把花园整理干净', '照顾一个小地方，也是在照顾自己，慢慢地学会更温柔一点。']
    ]
  },
  {
    id: 'fox',
    name: '阿狐',
    role: '阁楼里的故事收藏家',
    emoji: '🦊',
    roomTitle: '阿狐的故事阁楼',
    mood: '神秘',
    intro: '我负责保管大家留下的故事、旧信件和那些没有被说出口的念头。',
    colors: ['#ffe7d8', '#f3b386'],
    items: [
      ['📖', '旧故事', '每一页都有一个还没结束的结尾。'],
      ['🕯️', '阁楼的灯', '夜晚是整理故事的好时间。'],
      ['🔑', '小钥匙', '它可能打开某个旧记忆的门。'],
      ['🍂', '秋天的信', '有些话适合写在落叶和风里。']
    ],
    diary: [
      ['2026-09-17', '神秘', '我找到一封旧信', '信里没有署名，只写着“别忘记回来”。我把它放进了故事盒，等它慢慢想起该去哪里。'],
      ['2026-09-11', '安静', '阁楼今天下雨了', '雨声让所有故事都慢了下来。我没有整理书，只是听了一会儿。']
    ]
  }
];

const residentGrid = document.getElementById('resident-grid');
const gallery = document.getElementById('gallery');
const diaryList = document.getElementById('diary-list');
const selectedName = document.getElementById('selected-name');
const selectedIntro = document.getElementById('selected-intro');
const selectedAvatar = document.getElementById('selected-avatar');
const moodBadge = document.getElementById('mood-badge');
const privateNote = document.getElementById('private-note');
const noteStatus = document.getElementById('note-status');
const saveBtn = document.getElementById('save-note');
const clearBtn = document.getElementById('clear-note');

let selectedId = 'whale';

function getCurrentResident() {
  return residents.find((resident) => resident.id === selectedId) || residents[0];
}

function renderResidents() {
  residentGrid.innerHTML = residents
    .map((resident) => {
      const activeClass = resident.id === selectedId ? 'active' : '';
      return `
        <button class="resident-card ${activeClass}" type="button" data-id="${resident.id}" style="--card-a:${resident.colors[0]};--card-b:${resident.colors[1]};">
          <span class="resident-emoji">${resident.emoji}</span>
          <span class="resident-meta">
            <span class="resident-name">${resident.name}</span>
            <span class="resident-role">${resident.role}</span>
          </span>
        </button>
      `;
    })
    .join('');

  residentGrid.querySelectorAll('[data-id]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedId = button.dataset.id;
      renderResidents();
      renderSelected();
    });
  });
}

function renderSelected() {
  const resident = getCurrentResident();
  selectedName.textContent = resident.roomTitle;
  selectedIntro.textContent = resident.intro;
  selectedAvatar.textContent = resident.emoji;
  moodBadge.textContent = `今日：${resident.mood}`;

  gallery.innerHTML = resident.items
    .map(
      ([emoji, title, description]) => `
        <article class="gallery-item" style="--card-a:${resident.colors[0]};--card-b:${resident.colors[1]};">
          <div class="gallery-art">${emoji}</div>
          <div class="gallery-copy">
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
        </article>
      `
    )
    .join('');

  diaryList.innerHTML = resident.diary
    .map(
      ([date, tag, title, content]) => `
        <article class="diary-item">
          <div class="diary-meta">
            <span>${date}</span>
            <b>${tag}</b>
          </div>
          <h3>${title}</h3>
          <p>${content}</p>
        </article>
      `
    )
    .join('');

  loadNote();
}

function getStorageKey() {
  return `momo-pet-note-${selectedId}`;
}

function safeStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function loadNote() {
  const storage = safeStorage();
  if (!storage) return;
  const saved = storage.getItem(getStorageKey());
  privateNote.value = saved || '';
  noteStatus.textContent = saved ? '已加载这个角色的本地草稿。' : '';
}

saveBtn.addEventListener('click', () => {
  const storage = safeStorage();
  if (!storage) return;
  storage.setItem(getStorageKey(), privateNote.value);
  noteStatus.textContent = `${getCurrentResident().name} 的笔记已保存到本地。`;
});

clearBtn.addEventListener('click', () => {
  const storage = safeStorage();
  if (storage) storage.removeItem(getStorageKey());
  privateNote.value = '';
  noteStatus.textContent = '草稿已清空。';
});

document.querySelectorAll('.tab').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((tab) => tab.classList.toggle('active', tab === button));
    const tab = button.dataset.tab;
    document.getElementById('collection-view').classList.toggle('hidden', tab !== 'collection');
    document.getElementById('diary-view').classList.toggle('hidden', tab !== 'diary');
    document.getElementById('notes-view').classList.toggle('hidden', tab !== 'notes');
  });
});

renderResidents();
renderSelected();

