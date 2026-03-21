/* ═══════════════════════════════════════════════════════
   SYMBOLE & GRIECHISCHES ALPHABET – Nachschlagewerk
   Einbinden: <script src="symbole.js"></script>
   ═══════════════════════════════════════════════════════ */
(function(){

const SECTIONS = [
  {
    title: 'Griechisches Alphabet',
    cols: ['Gross','Klein','Name','Aussprache'],
    rows: [
      ['Α','α','Alpha','al-fa'],
      ['Β','β','Beta','bay-ta'],
      ['Γ','γ','Gamma','gam-ma'],
      ['Δ','δ','Delta','del-ta'],
      ['Ε','ε','Epsilon','ep-si-lon'],
      ['Ζ','ζ','Zeta','zay-ta'],
      ['Η','η','Eta','ay-ta'],
      ['Θ','θ','Theta','tay-ta'],
      ['Ι','ι','Iota','yo-ta'],
      ['Κ','κ','Kappa','kap-pa'],
      ['Λ','λ','Lambda','lam-da'],
      ['Μ','μ','My','mü'],
      ['Ν','ν','Ny','nü'],
      ['Ξ','ξ','Xi','ksi'],
      ['Ο','ο','Omikron','o-mi-kron'],
      ['Π','π','Pi','pi'],
      ['Ρ','ρ','Rho','ro'],
      ['Σ','σ/ς','Sigma','sig-ma'],
      ['Τ','τ','Tau','tau'],
      ['Υ','υ','Ypsilon','üp-si-lon'],
      ['Φ','φ','Phi','fi'],
      ['Χ','χ','Chi','chi (wie Bach)'],
      ['Ψ','ψ','Psi','psi'],
      ['Ω','ω','Omega','o-may-ga']
    ]
  },
  {
    title: 'Logik & Aussagenlogik',
    cols: ['Symbol','Name','Bedeutung','Beispiel'],
    rows: [
      ['∧','Konjunktion','UND (and)','p ∧ q'],
      ['∨','Disjunktion','ODER (or)','p ∨ q'],
      ['¬','Negation','NICHT (not)','¬p'],
      ['→','Implikation','WENN…DANN','p → q'],
      ['↔','Bikonditional','GENAU DANN WENN','p ↔ q'],
      ['⊕','XOR','Exklusiv-ODER','p ⊕ q'],
      ['⊤','Tautologie','Immer wahr',''],
      ['⊥','Kontradiktion','Immer falsch',''],
      ['⊨','Modell / Erfüllt','Semantisch gültig','M ⊨ φ'],
      ['⊢','Ableitung','Syntaktisch ableitbar','Γ ⊢ φ']
    ]
  },
  {
    title: 'Mengen & Relationen',
    cols: ['Symbol','Name','Bedeutung','Beispiel'],
    rows: [
      ['∈','Element von','ist in Menge enthalten','x ∈ A'],
      ['∉','Nicht Element','ist nicht enthalten','x ∉ A'],
      ['⊂','Echte Teilmenge','enthalten, aber nicht gleich','A ⊂ B'],
      ['⊆','Teilmenge','enthalten oder gleich','A ⊆ B'],
      ['⊃','Echte Obermenge','enthält, aber nicht gleich','B ⊃ A'],
      ['⊇','Obermenge','enthält oder gleich','B ⊇ A'],
      ['∪','Vereinigung','ODER (union)','A ∪ B'],
      ['∩','Schnitt','UND (intersection)','A ∩ B'],
      ['∅','Leere Menge','Menge ohne Elemente','A ∩ B = ∅'],
      ['\\','Differenz','In A aber nicht in B','A \\ B'],
      ['×','Kreuzprodukt','Kartesisches Produkt','A × B'],
      ['|A|','Kardinalität','Anzahl Elemente','|{1,2,3}| = 3'],
      ['℘(A)','Potenzmenge','Alle Teilmengen','℘({1,2})'],
      ['ℕ','Natürliche Zahlen','0, 1, 2, 3, …','n ∈ ℕ'],
      ['ℤ','Ganze Zahlen','…, -2, -1, 0, 1, 2, …','z ∈ ℤ'],
      ['ℝ','Reelle Zahlen','Alle Dezimalzahlen','x ∈ ℝ'],
      ['ℚ','Rationale Zahlen','Alle Brüche','q ∈ ℚ']
    ]
  },
  {
    title: 'Quantoren & Beweise',
    cols: ['Symbol','Name','Bedeutung','Beispiel'],
    rows: [
      ['∀','Allquantor','Für alle','∀x: P(x)'],
      ['∃','Existenzquantor','Es gibt mindestens ein','∃x: P(x)'],
      ['∃!','Eindeutigkeitsquantor','Es gibt genau ein','∃!x: P(x)'],
      ['≡','Äquivalent','Logisch gleich','a ≡ b'],
      ['≠','Ungleich','Nicht gleich','a ≠ b'],
      ['≈','Ungefähr gleich','Annähernd','π ≈ 3.14'],
      ['≤','Kleiner gleich','','x ≤ y'],
      ['≥','Grösser gleich','','x ≥ y'],
      ['≪','Viel kleiner','','ε ≪ 1'],
      ['≫','Viel grösser','','n ≫ 1'],
      ['∴','Daraus folgt','Therefore','∴ x = 5'],
      ['∵','Weil / Da','Because','∵ x > 0'],
      ['□','QED / Beweis Ende','Ende des Beweises','□']
    ]
  },
  {
    title: 'Analysis & Algebra',
    cols: ['Symbol','Name','Bedeutung','Beispiel'],
    rows: [
      ['Σ','Summe','Summenzeichen','Σᵢ₌₁ⁿ aᵢ'],
      ['Π','Produkt','Produktzeichen','Πᵢ₌₁ⁿ aᵢ'],
      ['∫','Integral','Fläche unter Kurve','∫f(x)dx'],
      ['∂','Partielle Ableitung','Partielle Ableitung','∂f/∂x'],
      ['∞','Unendlich','Infinity','lim n→∞'],
      ['√','Wurzel','Quadratwurzel','√4 = 2'],
      ['∝','Proportional','Proportional zu','y ∝ x'],
      ['°','Grad','Winkelgrad','90°'],
      ['‖','Norm','Betrag / Länge','‖v‖'],
      ['⌈x⌉','Aufrundung','Ceiling','⌈3.2⌉ = 4'],
      ['⌊x⌋','Abrundung','Floor','⌊3.8⌋ = 3'],
      ['n!','Fakultät','n × (n-1) × … × 1','5! = 120'],
      ['(n k)','Binomialkoeffizient','n über k','(5 2) = 10'],
      ['log','Logarithmus','Umkehrung der Potenz','log₂ 8 = 3'],
      ['ln','Natürl. Logarithmus','Basis e','ln e = 1'],
      ['mod','Modulo','Rest bei Division','7 mod 3 = 1']
    ]
  },
  {
    title: 'Informatik & Automaten',
    cols: ['Symbol','Name','Bedeutung','Beispiel'],
    rows: [
      ['Σ','Alphabet','Endliche Zeichenmenge','Σ = {0, 1}'],
      ['Σ*','Kleene-Stern','Alle Wörter über Σ','Σ* = {ε,0,1,00,…}'],
      ['ε','Epsilon','Leeres Wort','L = {ε}'],
      ['δ','Delta','Übergangsfunktion','δ(q₀, a) = q₁'],
      ['λ','Lambda','Anonyme Funktion','λx.x+1'],
      ['→','Produktion','Grammatikregel','S → aB'],
      ['⇒','Ableitung','Direkte Ableitung','S ⇒ aB'],
      ['⇒*','Mehrfachableitung','Mehrere Schritte','S ⇒* aabb'],
      ['|w|','Wortlänge','Anzahl Zeichen','|abc| = 3'],
      ['L(G)','Sprache','Von G erzeugte Sprache',''],
      ['O(n)','Landau-Notation','Obere Schranke','O(n²)'],
      ['Θ(n)','Theta','Exakte Schranke','Θ(n log n)'],
      ['Ω(n)','Omega','Untere Schranke','Ω(n)'],
      ['⊥','Bottom / Undefiniert','Nicht definiert','f(x) = ⊥'],
      ['⊤','Top','Definiert / Wahr',''],
      ['≺','Präfix','Wort-Präfix','ab ≺ abc']
    ]
  },
  {
    title: 'Netzwerk & Zahlensysteme',
    cols: ['Symbol','Name','Bedeutung','Beispiel'],
    rows: [
      ['0b','Binär-Präfix','Binärzahl','0b1010 = 10'],
      ['0x','Hex-Präfix','Hexadezimalzahl','0xFF = 255'],
      ['⊕','XOR','Bitweise XOR','1010 ⊕ 0110'],
      ['&','AND','Bitweise UND','1010 & 0110'],
      ['|','OR','Bitweise ODER','1010 | 0110'],
      ['~','NOT','Bitweise Negation','~1010'],
      ['<<','Shift links','Bits nach links','4 << 1 = 8'],
      ['>>','Shift rechts','Bits nach rechts','8 >> 1 = 4'],
      ['/24','CIDR','Subnetzmaske','192.168.1.0/24'],
      ['MSB','Most Significant Bit','Höchstwertiges Bit',''],
      ['LSB','Least Significant Bit','Niedrigstwertiges Bit',''],
      ['TTL','Time to Live','Lebensdauer Paket','TTL=64'],
      ['MTU','Max Transfer Unit','Max. Paketgrösse','MTU=1500']
    ]
  }
];

/* ── Inject CSS ── */
const style = document.createElement('style');
style.textContent = `
.sym-btn{position:fixed;bottom:1.5rem;left:1.5rem;z-index:500;width:42px;height:42px;border-radius:50%;background:rgba(24,23,29,.9);border:1px solid #2a2840;color:#f5c542;font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;backdrop-filter:blur(4px);box-shadow:0 2px 10px rgba(0,0,0,.3)}
.sym-btn:hover{background:#f5c542;color:#000;transform:scale(1.1);box-shadow:0 2px 15px rgba(245,197,66,.4)}
.sym-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:600;overflow-y:auto;backdrop-filter:blur(6px);opacity:0;transition:opacity .2s;display:none}
.sym-overlay.show{display:block;opacity:1}
.sym-container{max-width:850px;margin:0 auto;padding:1rem 1.5rem 3rem}
.sym-header{display:flex;align-items:center;justify-content:space-between;padding:1rem 0;position:sticky;top:0;background:rgba(0,0,0,.8);backdrop-filter:blur(8px);z-index:1;margin-bottom:.5rem}
.sym-header h2{font-family:'Outfit',sans-serif;font-size:1.3rem;color:#f5c542}
.sym-close{background:none;border:1px solid #2a2840;border-radius:8px;color:#6b7084;font-size:.8rem;padding:.3rem .8rem;cursor:pointer;font-family:'JetBrains Mono',monospace;transition:all .2s}
.sym-close:hover{border-color:#ef4444;color:#ef4444}
.sym-search{width:100%;padding:.5rem .8rem;background:#0a0a10;border:1px solid #2a2840;border-radius:8px;color:#e2e4ea;font-family:'DM Sans',sans-serif;font-size:.85rem;margin-bottom:1rem;outline:none;transition:border-color .2s}
.sym-search:focus{border-color:#f5c542}
.sym-section{margin-bottom:1.5rem}
.sym-section h3{font-family:'Outfit',sans-serif;font-size:.95rem;color:#e2e4ea;margin-bottom:.5rem;padding-bottom:.3rem;border-bottom:1px solid #1e2230}
.sym-table{width:100%;border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:.7rem}
.sym-table th{text-align:left;padding:.35rem .5rem;color:#6b7084;font-weight:400;font-size:.55rem;letter-spacing:.08em;text-transform:uppercase;border-bottom:1px solid #1e2230}
.sym-table td{padding:.35rem .5rem;border-bottom:1px solid rgba(30,34,48,.5);color:#e2e4ea;vertical-align:top}
.sym-table tr:hover td{background:rgba(245,197,66,.03)}
.sym-table tr.hidden{display:none}
.sym-table td:first-child{font-size:1rem;color:#f5c542;text-align:center;width:3rem;text-shadow:0 0 8px rgba(245,197,66,.3)}
.sym-table td:nth-child(2){color:#5ec4b6;font-weight:600}
.sym-table td:nth-child(3){color:#a0a4b8}
.sym-table td:nth-child(4){color:#6b7084;font-size:.65rem}
.sym-tabs{display:flex;gap:.3rem;flex-wrap:wrap;margin-bottom:.8rem}
.sym-tab{background:rgba(24,23,29,.8);border:1px solid #2a2840;border-radius:6px;padding:.25rem .6rem;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#6b7084;cursor:pointer;transition:all .2s}
.sym-tab:hover{border-color:#f5c542;color:#f5c542}
.sym-tab.active{background:rgba(245,197,66,.1);border-color:#f5c542;color:#f5c542}
@media(max-width:600px){
  .sym-table{font-size:.6rem}
  .sym-table td:first-child{font-size:.85rem;width:2.5rem}
  .sym-btn{bottom:1rem;left:1rem}
}
`;
document.head.appendChild(style);

/* ── Functions (global) — defined BEFORE DOM injection ── */
window.toggleSymbols = function(){
  const ov = document.getElementById('symOverlay');
  ov.classList.toggle('show');
  if(ov.classList.contains('show')){
    setTimeout(()=> ov.querySelector('.sym-search').focus(), 100);
  }
};

window.searchSymbols = function(term){
  term = term.toLowerCase().trim();
  document.querySelectorAll('.sym-table tr[data-search]').forEach(tr => {
    tr.classList.toggle('hidden', term && !tr.dataset.search.includes(term));
  });
  document.querySelectorAll('.sym-section').forEach(s => s.style.display = '');
  if(term){
    document.querySelectorAll('.sym-section').forEach(sec => {
      const visible = sec.querySelectorAll('tr[data-search]:not(.hidden)').length;
      sec.style.display = visible ? '' : 'none';
    });
  }
};

window.filterSymSection = function(idx){
  const idxStr = String(idx);
  document.querySelectorAll('.sym-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.idx === idxStr);
  });
  document.querySelectorAll('.sym-section').forEach(sec => {
    sec.style.display = (idxStr === 'all' || sec.dataset.sec === idxStr) ? '' : 'none';
  });
  const search = document.querySelector('.sym-search');
  if(search){ search.value = ''; searchSymbols(''); }
};

document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    const ov = document.getElementById('symOverlay');
    if(ov && ov.classList.contains('show')) toggleSymbols();
  }
});

/* ── Inject Button ── */
const btn = document.createElement('button');
btn.className = 'sym-btn';
btn.innerHTML = 'Σ';
btn.title = 'Symbole & Griechisches Alphabet';
btn.onclick = toggleSymbols;
document.body.appendChild(btn);

/* ── Inject Overlay ── */
const overlay = document.createElement('div');
overlay.className = 'sym-overlay';
overlay.id = 'symOverlay';

let tabsHTML = SECTIONS.map((s,i) => `<span class="sym-tab${i===0?' active':''}" data-idx="${i}" onclick="filterSymSection(${i})">${s.title.split(' ')[0]}</span>`).join('');

let sectionsHTML = SECTIONS.map((sec, si) => {
  const headerRow = sec.cols.map(c => `<th>${c}</th>`).join('');
  const bodyRows = sec.rows.map(r => {
    const cells = r.map(c => `<td>${c}</td>`).join('');
    const searchable = r.join(' ').toLowerCase();
    return `<tr data-sec="${si}" data-search="${searchable}">${cells}</tr>`;
  }).join('');
  return `<div class="sym-section" data-sec="${si}"><h3>${sec.title}</h3><table class="sym-table"><thead><tr>${headerRow}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
}).join('');

overlay.innerHTML = `
  <div class="sym-container">
    <div class="sym-header">
      <h2>Σ Symbole & Alphabet</h2>
      <button class="sym-close" onclick="window.open((location.pathname.includes('/hefte/')?'../':'')+'symbole.html','_blank')" style="margin-right:.3rem">↗ Neues Fenster</button>
      <button class="sym-close" onclick="toggleSymbols()">ESC Schliessen</button>
    </div>
    <input class="sym-search" type="text" placeholder="Suchen… z.B. Alpha, Summe, Element, XOR" oninput="searchSymbols(this.value)">
    <div class="sym-tabs">
      <span class="sym-tab active" data-idx="all" onclick="filterSymSection('all')">Alle</span>
      ${tabsHTML}
    </div>
    ${sectionsHTML}
  </div>`;
document.body.appendChild(overlay);

})();
