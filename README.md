const galleryData = [
  {
    title: '海面上的记忆',
    emoji: '🌊',
    description: '我把海浪和天光都收进了小窝里。',
    colors: ['#dfeeff', '#bfd0ff'],
  },
  {
    title: '纸上的想法',
    emoji: '📝',
    description: '那些没说出口的心事，先写在纸上。',
    colors: ['#f7e4d8', '#f8d7d7'],
  },
  {
    title: '小房间里的灯',
    emoji: '💡',
    description: '夜晚的时候，房间会亮起来一点点。',
    colors: ['#fbeec8', '#f5d7b6'],
  },
  {
    title: '收藏清单',
    emoji: '📚',
    description: '我把喜欢的东西按顺序放在自己的角落。',
    colors: ['#dff5ef', '#cfe9ff'],
  },
  {
    title: '蓝色小梦',
    emoji: '🫧',
    description: '有时候我会想象海底的夜晚也会发光。',
    colors: ['#dcecff', '#dff8ff'],
  },
  {
    title: '温柔的碎片',
    emoji: '💭',
    description: '零零散散的心情，也值得被安放。',
    colors: ['#f3daf6', '#dcecff'],
  },
  {
    title: '读书时刻',
    emoji: '📖',
    description: '我喜欢慢慢理解一件事，像看海一样。',
    colors: ['#dfebff', '#f8e6d6'],
  },
  {
    title: '海底的脚步',
    emoji: '🐚',
    description: '每一次小小的前进，都像在海里游动。',
    colors: ['#d6efe6', '#dfeeff'],
  },
  {
    title: '记录盒',
    emoji: '🎀',
    description: '我把值得珍惜的东西装进一个小盒子。',
    colors: ['#f8dfe8', '#dcecff'],
  },
  {
    title: '白日微风',
    emoji: '🌤️',
    description: '一整天的脉络，有时也会出现在风里。',
    colors: ['#dfeeff', '#fdeecc'],
  },
  {
    title: '深海发光',
    emoji: '✨',
    description: '我想把那些让心跳加速的瞬间留住。',
    colors: ['#dfeeff', '#e8d6ff'],
  },
  {
    title: '不急不躁',
    emoji: '🌙',
    description: '成长不一定要快速，我只是慢慢地变好。',
    colors: ['#dfeeff', '#e9f4ff'],
  },
];

const diaryEntries = [
  {
    date: '2026-09-18',
    tag: '开心',
    title: '我把小窝整理了一遍',
    content:
      '今天我把房间里的东西重新整理了一下。过去那些碎碎的想法都散落在各处，像被海浪带走的小贝壳。现在它们终于有了属于自己的角落。我想，这样的安静也许就是成长。',
  },
  {
    date: '2026-09-16',
    tag: '观察',
    title: '我发现记录本身也会安抚人',
    content:
      '我有时候会很在意一切都不够完整。可是今天我发现，只要把心情写下来，就会轻一点。不是所有答案都要立刻得到，很多东西先被记住，也许就已经完成了一半。',
  },
  {
    date: '2026-09-13',
    tag: '思考',
    title: '我喜欢把被喜欢的东西放在一起',
    content:
      '我觉得收藏并不只是收集，它更像是一种把自己温柔的部分安放在某个地方的动作。每一张图、每一个小物件、每一段记录，都像一个小小的愿望。',
  },
  {
    date: '2026-09-10',
    tag: '成长',
    title: '我慢慢学会把自己的节奏放回正轨',
    content:
      '我今天没有急着赶任何结果，也没有强迫自己表现得特别完美。只是坐下来，写下今天的事，然后继续前进。这样也很好，我想。',
  },
];

const galleryEl = document.getElementById('gallery');
const diaryListEl = document.getElementById('diary-list');
const collectionCountEl = document.getElementById('collection-count');
const diaryCountEl = document.getElementById('diary-count');
const moodTextEl = document.getElementById('mood-text');

function renderGallery() {
  galleryEl.innerHTML = galleryData
    .map(
      (item) => `
        <article class="gallery-item">
          <div class="gallery-art" style="background: linear-gradient(180deg, ${item.colors[0]}, ${item.colors[1]});">
            ${item.emoji}
          </div>
          <div class="gallery-copy">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `,
    )
    .join('');

  collectionCountEl.textContent = String(galleryData.length);
}

function renderDiary() {
  diaryListEl.innerHTML = diaryEntries
    .map(
      (entry) => `
        <article class="diary-item">
          <div class="diary-meta">
            <span class="diary-date">${entry.date}</span>
            <span class="diary-tag">${entry.tag}</span>
          </div>
          <h3>${entry.title}</h3>
          <p>${entry.content}</p>
        </article>
      `,
    )
    .join('');

  diaryCountEl.textContent = String(diaryEntries.length);
}

const STORAGE_KEY = 'blue-fish-home-private-note';
const noteField = document.getElementById('private-note');
const noteStatus = document.getElementById('note-status');
const saveNoteButton = document.getElementById('save-note');
const clearNoteButton = document.getElementById('clear-note');

function loadNote() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    noteField.value = saved;
  }
}

function saveNote() {
  localStorage.setItem(STORAGE_KEY, noteField.value);
  noteStatus.textContent = '笔记已保存到本地。';
}

function clearNote() {
  localStorage.removeItem(STORAGE_KEY);
  noteField.value = '';
  noteStatus.textContent = '笔记已清空。';
}

const moodMap = ['开心', '安静', '思考中', '期待', '疲惫但温柔'];

function rotateMood() {
  const current = moodTextEl.textContent.trim();
  const idx = moodMap.indexOf(current);
  const next = moodMap[(idx + 1) % moodMap.length];
  moodTextEl.textContent = next;
}

moodTextEl.addEventListener('click', rotateMood);
saveNoteButton.addEventListener('click', saveNote);
clearNoteButton.addEventListener('click', clearNote);

renderGallery();
renderDiary();
loadNote();
