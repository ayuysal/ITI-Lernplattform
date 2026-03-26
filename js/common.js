// ── NAVIGATION ──
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const btns = document.querySelectorAll('.nav-btn');
  const map = {};
  btns.forEach((btn, i) => { const target = btn.getAttribute('data-target'); if (target) map[target] = i; });
  if (map[id] !== undefined) btns[map[id]].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── ACCORDION ──
function toggleAcc(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}

// ── FLASHCARDS ENGINE ──
function initFlashcards(data) {
  let fcIndex = 0;
  let fcOrder = [...Array(data.length).keys()];

  function updateCard() {
    const card = data[fcOrder[fcIndex]];
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('fc-question').textContent = card.q;
    document.getElementById('fc-answer').textContent = card.a;
    document.getElementById('fc-label-cat').textContent = '· ' + card.cat;
    document.getElementById('fc-counter').textContent = (fcIndex + 1) + ' / ' + fcOrder.length;
    document.getElementById('fc-progress').style.width = ((fcIndex + 1) / fcOrder.length * 100) + '%';
  }

  window.flipCard = () => document.getElementById('flashcard').classList.toggle('flipped');
  window.nextCard = () => { fcIndex = (fcIndex + 1) % fcOrder.length; updateCard(); };
  window.prevCard = () => { fcIndex = (fcIndex - 1 + fcOrder.length) % fcOrder.length; updateCard(); };
  window.shuffleCards = () => {
    for (let i = fcOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fcOrder[i], fcOrder[j]] = [fcOrder[j], fcOrder[i]];
    }
    fcIndex = 0; updateCard();
  };
  window.resetCards = () => { fcOrder = [...Array(data.length).keys()]; fcIndex = 0; updateCard(); };

  updateCard();
}

// ── QUIZ ENGINE ──
function initQuiz(data) {
  let quizAnswers = new Array(data.length).fill(-1);
  let quizSubmitted = false;

  function renderQuiz() {
    const container = document.getElementById('quiz-questions');
    container.innerHTML = '';
    data.forEach((q, qi) => {
      const div = document.createElement('div');
      div.className = 'quiz-q';
      div.innerHTML = `
        <div class="q-num">FRAGE ${qi + 1} VON ${data.length}</div>
        <div class="q-text">${q.q}</div>
        <div class="q-options" id="opts-${qi}">
          ${q.opts.map((opt, oi) => `<button class="q-opt" onclick="selectOpt(${qi},${oi})">${opt}</button>`).join('')}
        </div>
        <div class="q-explanation" id="exp-${qi}">${q.exp}</div>
      `;
      container.appendChild(div);
    });
  }

  window.selectOpt = (qi, oi) => {
    if (quizSubmitted) return;
    quizAnswers[qi] = oi;
    const opts = document.querySelectorAll(`#opts-${qi} .q-opt`);
    opts.forEach((o, i) => { o.style.borderColor = i === oi ? 'var(--accent)' : ''; o.style.color = i === oi ? '#fff' : ''; });
  };

  window.submitQuiz = () => {
    quizSubmitted = true;
    let score = 0;
    data.forEach((q, qi) => {
      const opts = document.querySelectorAll(`#opts-${qi} .q-opt`);
      opts.forEach((o, oi) => {
        o.classList.add('disabled');
        o.style.borderColor = '';
        o.style.color = '';
        if (oi === q.correct) o.classList.add('correct');
        else if (oi === quizAnswers[qi]) o.classList.add('wrong');
      });
      document.getElementById(`exp-${qi}`).classList.add('show');
      if (quizAnswers[qi] === q.correct) score++;
    });
    document.getElementById('quiz-submit-area').style.display = 'none';
    const result = document.getElementById('quiz-result');
    result.classList.add('show');
    document.getElementById('result-score').textContent = `${score} / ${data.length}`;
    const pct = score / data.length;
    document.getElementById('result-text').textContent = pct >= 0.85 ? 'Ausgezeichnet! Sehr gut vorbereitet!' :
      pct >= 0.7 ? 'Gut! Noch ein paar Wiederholungen und du bist bereit.' :
      pct >= 0.5 ? 'Solide Basis, aber noch etwas ueben.' :
      'Nochmal die Kapitel durchgehen und dann erneut versuchen!';
  };

  window.resetQuiz = () => {
    quizAnswers = new Array(data.length).fill(-1);
    quizSubmitted = false;
    document.getElementById('quiz-result').classList.remove('show');
    document.getElementById('quiz-submit-area').style.display = 'flex';
    renderQuiz();
  };

  renderQuiz();
}

// ── FLOATING NOTEPAD ──
(function initNotepad() {
  // Special characters grouped by category
  const charGroups = [
    { label: 'Griechisch', chars: ['α','β','γ','δ','ε','λ','μ','π','σ','Σ','Ω','φ','Δ'] },
    { label: 'Mathe', chars: ['≤','≥','≠','≈','±','·','×','÷','√','∞','∑','∏','∫'] },
    { label: 'Logik', chars: ['∧','∨','¬','⊕','→','←','↔','⇒','⇔','∈','∉','⊂','∅'] },
    { label: 'Hoch/Tief', chars: ['⁰','¹','²','³','⁴','⁵','ⁿ','₀','₁','₂','₃','ₙ'] },
    { label: 'Sonstige', chars: ['ℕ','ℤ','ℝ','ℂ','ℙ','∀','∃','⌈','⌉','⌊','⌋','‖','†'] }
  ];

  // Create DOM
  const fab = document.createElement('button');
  fab.className = 'notepad-fab';
  fab.innerHTML = '✏️';
  fab.title = 'Notizblock öffnen';

  const panel = document.createElement('div');
  panel.className = 'notepad-panel';
  panel.innerHTML = `
    <div class="notepad-titlebar">
      <span>📝 NOTIZBLOCK</span>
      <div class="notepad-titlebar-btns">
        <button class="np-popout" title="In neuem Fenster öffnen">↗</button>
        <button class="np-minimize" title="Minimieren">─</button>
        <button class="np-close" title="Schließen">✕</button>
      </div>
    </div>
    <div class="notepad-chars" id="np-chars"></div>
    <div class="notepad-body">
      <textarea id="np-textarea" placeholder="Schreibe hier, was du dir gemerkt hast …"></textarea>
    </div>
    <div class="notepad-footer">
      <button id="np-copy" title="In Zwischenablage kopieren">📋 Kopieren</button>
      <button id="np-clear" title="Alles löschen">🗑 Leeren</button>
    </div>
  `;

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  // Populate special char buttons
  const charsContainer = document.getElementById('np-chars');
  charGroups.forEach(group => {
    group.chars.forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'notepad-char-btn';
      btn.textContent = ch;
      btn.title = group.label + ': ' + ch;
      btn.addEventListener('click', () => insertChar(ch));
      charsContainer.appendChild(btn);
    });
  });

  // Insert char at cursor position
  function insertChar(ch) {
    const ta = document.getElementById('np-textarea');
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    ta.value = ta.value.substring(0, start) + ch + ta.value.substring(end);
    ta.selectionStart = ta.selectionEnd = start + ch.length;
    ta.focus();
  }

  // Toggle panel
  let isOpen = false;
  fab.addEventListener('click', () => {
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    if (isOpen) document.getElementById('np-textarea').focus();
  });

  // Close & minimize
  panel.querySelector('.np-close').addEventListener('click', () => {
    isOpen = false;
    panel.classList.remove('open');
  });
  panel.querySelector('.np-minimize').addEventListener('click', () => {
    isOpen = false;
    panel.classList.remove('open');
  });
  panel.querySelector('.np-popout').addEventListener('click', () => {
    isOpen = false;
    panel.classList.remove('open');
    window.open('notizblock.html?popup=1', 'notizblock', 'width=900,height=650,menubar=no,toolbar=no');
  });

  // Copy & Clear
  document.getElementById('np-copy').addEventListener('click', () => {
    const ta = document.getElementById('np-textarea');
    navigator.clipboard.writeText(ta.value).then(() => {
      const btn = document.getElementById('np-copy');
      const orig = btn.textContent;
      btn.textContent = '✓ Kopiert!';
      setTimeout(() => btn.textContent = orig, 1500);
    });
  });
  document.getElementById('np-clear').addEventListener('click', () => {
    document.getElementById('np-textarea').value = '';
    document.getElementById('np-textarea').focus();
  });

  // ── DRAGGING ──
  const titlebar = panel.querySelector('.notepad-titlebar');
  let isDragging = false, dragOffsetX = 0, dragOffsetY = 0;

  titlebar.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'BUTTON') return;
    isDragging = true;
    const rect = panel.getBoundingClientRect();
    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;
    panel.style.transition = 'none';
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    let x = e.clientX - dragOffsetX;
    let y = e.clientY - dragOffsetY;
    // Keep panel within viewport
    const w = panel.offsetWidth;
    const h = panel.offsetHeight;
    x = Math.max(0, Math.min(window.innerWidth - w, x));
    y = Math.max(0, Math.min(window.innerHeight - h, y));
    panel.style.left = x + 'px';
    panel.style.top = y + 'px';
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      panel.style.transition = '';
    }
  });

  // Touch-support for mobile dragging
  titlebar.addEventListener('touchstart', (e) => {
    if (e.target.tagName === 'BUTTON') return;
    isDragging = true;
    const touch = e.touches[0];
    const rect = panel.getBoundingClientRect();
    dragOffsetX = touch.clientX - rect.left;
    dragOffsetY = touch.clientY - rect.top;
    panel.style.transition = 'none';
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    let x = touch.clientX - dragOffsetX;
    let y = touch.clientY - dragOffsetY;
    const w = panel.offsetWidth;
    const h = panel.offsetHeight;
    x = Math.max(0, Math.min(window.innerWidth - w, x));
    y = Math.max(0, Math.min(window.innerHeight - h, y));
    panel.style.left = x + 'px';
    panel.style.top = y + 'px';
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';
  }, { passive: true });

  document.addEventListener('touchend', () => {
    isDragging = false;
    panel.style.transition = '';
  });

  // Persist notes per page in localStorage
  const storageKey = 'notepad_' + window.location.pathname;
  const saved = localStorage.getItem(storageKey);
  if (saved) document.getElementById('np-textarea').value = saved;

  // Auto-save on input
  document.getElementById('np-textarea').addEventListener('input', () => {
    localStorage.setItem(storageKey, document.getElementById('np-textarea').value);
  });

  // Clear also removes from storage
  document.getElementById('np-clear').addEventListener('click', () => {
    localStorage.removeItem(storageKey);
  });
})();
