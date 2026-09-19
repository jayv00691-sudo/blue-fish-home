const residents = [
  { id: 'whale', name: '鲸鱼娘', role: '蓝色海底房间的管理员', emoji: '🐋', colors: ['#dfeeff', '#c9d9ff'] },
  { id: 'cat', name: '小橘', role: '窗台上的午睡专家', emoji: '🐱', colors: ['#fff0d8', '#ffd49d'] },
  { id: 'rabbit', name: '团子', role: '花园里的种植员', emoji: '🐰', colors: ['#f9e6f3', '#e7bfd9'] },
  { id: 'fox', name: '阿狐', role: '阁楼里的故事收藏家', emoji: '🦊', colors: ['#ffe7d8', '#f3b386'] },
];

const landing = document.getElementById('landing');
const hall = document.getElementById('hall');
const grid = document.getElementById('resident-grid');

grid.innerHTML = residents.map((resident) => `
  <a class="resident-card" href="rooms/${resident.id}.html" style="--card-a:${resident.colors[0]};--card-b:${resident.colors[1]};">
    <span class="resident-emoji" aria-hidden="true">${resident.emoji}</span>
    <span class="resident-meta"><span class="resident-name">${resident.name}</span><span class="resident-role">${resident.role}</span></span>
    <span class="enter-arrow" aria-hidden="true">进入小窝 ↗</span>
  </a>
`).join('');

function showHall() {
  landing.classList.add('hidden');
  hall.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.title = '集体大厅 · 萌宠集体小窝';
}

function showLanding() {
  hall.classList.add('hidden');
  landing.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.title = '萌宠集体小窝';
}

document.getElementById('enter-hall').addEventListener('click', showHall);
document.getElementById('back-home').addEventListener('click', showLanding);
