const residents = [
  { id: 'whale', name: '鲸鱼娘', role: '蓝色海底房间的管理员', emoji: '🐋', roomTitle: '鲸鱼娘的蓝色小窝', mood: '开心', colors: ['#dfeeff', '#c9d9ff'] },
  { id: 'cat', name: '小橘', role: '窗台上的午睡专家', emoji: '🐱', roomTitle: '小橘的阳光房', mood: '慵懒', colors: ['#fff0d8', '#ffd49d'] },
  { id: 'rabbit', name: '团子', role: '花园里的种植员', emoji: '🐰', roomTitle: '团子的花园小屋', mood: '期待', colors: ['#f9e6f3', '#e7bfd9'] },
  { id: 'fox', name: '阿狐', role: '阁楼里的故事收藏家', emoji: '🦊', roomTitle: '阿狐的故事阁楼', mood: '神秘', colors: ['#ffe7d8', '#f3b386'] },
];

const grid = document.getElementById('resident-grid');
grid.innerHTML = residents.map((resident) => `
  <a class="resident-card" href="rooms/${resident.id}.html" style="--card-a:${resident.colors[0]};--card-b:${resident.colors[1]};">
    <span class="resident-emoji">${resident.emoji}</span>
    <span class="resident-meta"><span class="resident-name">${resident.name}</span><span class="resident-role">${resident.role}</span></span>
    <span class="enter-arrow" aria-hidden="true">进入 ↗</span>
  </a>
`).join('');

const text = '欢迎来到萌宠集体小窝';
const title = document.getElementById('typewriter-title');
let index = 0;
function typeTitle() {
  if (index <= text.length) {
    title.textContent = text.slice(0, index);
    index += 1;
    window.setTimeout(typeTitle, index === 1 ? 180 : 95);
  }
}
typeTitle();
