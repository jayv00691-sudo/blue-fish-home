const residents = [
  { id: 'whale', name: '鲸鱼娘', role: '蓝色海底房间的管理员', emoji: '🐋', mood: '开心', color: ['#dcecff', '#9ebeff'], intro: '我负责照看小窝，也喜欢收集海浪、写下每天的发现。欢迎来我的房间坐坐。', items: [['🌊', '海面上的记忆', '我把海浪和天光收进了小窝。'], ['📝', '纸上的想法', '那些没说出口的心事，先写在纸上。'], ['🫧', '蓝色小梦', '海底的夜晚也会发光。'], ['📚', '学习书架', '我喜欢慢慢理解一件事。']], diary: [['2026-09-18', '开心', '我把小窝整理了一遍', '今天我把房间里的东西重新整理了一下。现在每件东西终于都有了自己的角落，我想，这样的安静也许就是成长。'], ['2026-09-16', '观察', '记录本身也会安抚人', '只要把心情写下来，就会轻一点。不是所有答案都要立刻得到，先被记住也很好。']] },
  { id: 'cat', name: '小橘', role: '窗台上的午睡专家', emoji: '🐱', mood: '慵懒', color: ['#fff0d7', '#ffc27d'], intro: '我住在有阳光的窗边。我的主要工作是晒太阳、打盹，以及观察所有经过的蝴蝶。', items: [['☀️', '午后阳光', '这束光线是我的专属座位。'], ['🐟', '晚餐计划', '今天也要认真挑选小鱼干。'], ['🧶', '毛线球', '滚到床底的东西也值得收藏。'], ['🌙', '夜间窗景', '晚上看星星，白天看路人。']], diary: [['2026-09-18', '慵懒', '今天的阳光刚刚好', '我在窗台上睡了很久。醒来时小窝还是安安静静的，阳光把我的尾巴晒得暖暖的。'], ['2026-09-14', '好奇', '门外有新的声音', '我听见门外有脚步声。没有立刻出去，我先观察了一会儿，确认安全后才探出脑袋。']] },
  { id: 'rabbit', name: '团子', role: '花园里的种植员', emoji: '🐰', mood: '期待', color: ['#f8e4f1', '#e7b8dc'], intro: '我住在公共花园旁边，喜欢种花、整理种子，也喜欢把每天的小愿望埋进土里。', items: [['🌷', '第一朵花', '它今天比昨天又高了一点。'], ['🥕', '午餐便当', '甜甜的胡萝卜能带来好心情。'], ['🌱', '新芽观察', '每一次发芽都值得庆祝。'], ['🎀', '我的小篮子', '里面装着很多温柔的小东西。']], diary: [['2026-09-18', '期待', '新种子发芽了', '我今天发现花盆里冒出了一点绿色。虽然还很小，但我已经开始想象它开花时的样子了。'], ['2026-09-12', '认真', '把花园整理干净', '一边拔草一边想，照顾一个小地方，也是在照顾住在这里的自己。']] },
  { id: 'fox', name: '阿狐', role: '阁楼里的故事收藏家', emoji: '🦊', mood: '神秘', color: ['#ffe4d7', '#f3a875'], intro: '我住在阁楼，负责保存大家不小心遗忘的故事。你愿意听的话，我可以讲给你。', items: [['📖', '旧故事', '每一页都有一个还没结束的结尾。'], ['🔑', '小钥匙', '它可能打开某个记忆的门。'], ['🕯️', '阁楼的灯', '夜晚是整理故事的好时间。'], ['🍂', '秋天的信', '有些话适合写在落叶上。']], diary: [['2026-09-17', '神秘', '我找到一封旧信', '它没有署名，只写着“别忘记回来”。我把信放进了故事盒，等它自己想起该去哪里。'], ['2026-09-11', '安静', '阁楼今天下雨了', '雨声让所有故事都慢了下来。我没有整理书，只是听了一会儿。']] },
];

let selectedId = 'whale';
const $ = (selector) => document.querySelector(selector);
const residentGrid = $('#resident-grid');
const gallery = $('#gallery');
const diaryList = $('#diary-list');
const noteField = $('#private-note');
const noteStatus = $('#note-status');

function currentResident() { return residents.find((resident) => resident.id === selectedId) || residents[0]; }
function renderResidents() {
  residentGrid.innerHTML = residents.map((resident) => `<button class="resident-card ${resident.id === selectedId ? 'selected' : ''}" data-resident-id="${resident.id}" style="--card-a:${resident.color[0]};--card-b:${resident.color[1]}"><span class="resident-emoji">${resident.emoji}</span><span class="resident-info"><strong>${resident.name}</strong><small>${resident.role}</small></span><span class="enter-arrow">↗</span></button>`).join('');
  residentGrid.querySelectorAll('[data-resident-id]').forEach((button) => button.addEventListener('click', () => selectResident(button.dataset.residentId)));
  $('#resident-count').textContent = `${residents.length} 位居民`;
}
function renderSelected() {
  const resident = currentResident();
  $('#selected-avatar').textContent = resident.emoji;
  $('#selected-title').textContent = `${resident.name}的${resident.name === '小橘' ? '阳光房' : resident.name === '团子' ? '花园小屋' : resident.name === '阿狐' ? '故事阁楼' : '蓝色小窝'}`;
  $('#selected-intro').textContent = resident.intro;
  $('#selected-mood').textContent = `今日：${resident.mood}`;
  gallery.innerHTML = resident.items.map(([emoji, title, description]) => `<article class="gallery-item" style="--card-a:${resident.color[0]};--card-b:${resident.color[1]}"><div class="gallery-art">${emoji}</div><div class="gallery-copy"><h3>${title}</h3><p>${description}</p></div></article>`).join('');
  diaryList.innerHTML = resident.diary.map(([date, tag, title, content]) => `<article class="diary-item"><div class="diary-meta"><span>${date}</span><b>${tag}</b></div><h3>${title}</h3><p>${content}</p></article>`).join('');
  loadNote();
}
function selectResident(id) { selectedId = id; renderResidents(); renderSelected(); document.querySelector('#character-space').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function noteKey() { return `momo-home-note-${selectedId}`; }
function storage() { try { return window.localStorage; } catch { return null; } }
function loadNote() { const saved = storage()?.getItem(noteKey()); noteField.value = saved || ''; noteStatus.textContent = saved ? '已载入这个角色的本地草稿。' : ''; }
$('#save-note').addEventListener('click', () => { storage()?.setItem(noteKey(), noteField.value); noteStatus.textContent = `${currentResident().name}的笔记已保存到本地。`; });
$('#clear-note').addEventListener('click', () => { storage()?.removeItem(noteKey()); noteField.value = ''; noteStatus.textContent = '这页草稿已经清空。'; });
document.querySelectorAll('[data-room-tab]').forEach((button) => button.addEventListener('click', () => { document.querySelectorAll('.room-tab').forEach((tab) => tab.classList.toggle('active', tab === button)); document.querySelectorAll('.room-view').forEach((view) => view.classList.toggle('hidden', view.id !== `${button.dataset.roomTab}-view`)); }));
renderResidents(); renderSelected();
