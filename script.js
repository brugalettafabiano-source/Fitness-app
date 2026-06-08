const DAYS = ['Lun','Mar','Mer','Gio','Ven','Sab','Dom'];
const MEALS = ['Colazione','Pranzo','Spuntino','Cena'];

// ---- DEFAULT EXERCISE DATA ----
const defaultExercises = {
  Lun: [
    {id:1,name:'Panca piana',sets:4,reps:10,done:false},
    {id:2,name:'Panca inclinata manubri',sets:3,reps:12,done:false},
    {id:3,name:'Croci ai cavi',sets:3,reps:15,done:false},
    {id:4,name:'Tricipiti ai cavi',sets:3,reps:15,done:false},
  ],
  Mar: [
    {id:1,name:'Squat',sets:4,reps:10,done:false},
    {id:2,name:'Leg press',sets:3,reps:12,done:false},
    {id:3,name:'Affondi',sets:3,reps:12,done:false},
    {id:4,name:'Leg curl',sets:3,reps:15,done:false},
  ],
  Mer: [
    {id:1,name:'Trazioni',sets:4,reps:8,done:false},
    {id:2,name:'Rematore bilanciere',sets:3,reps:10,done:false},
    {id:3,name:'Lat machine',sets:3,reps:12,done:false},
    {id:4,name:'Curl bilanciere',sets:3,reps:12,done:false},
  ],
  Gio: [],
  Ven: [
    {id:1,name:'Spinte manubri',sets:4,reps:10,done:false},
    {id:2,name:'Alzate laterali',sets:3,reps:15,done:false},
    {id:3,name:'Military press',sets:3,reps:10,done:false},
  ],
  Sab: [
    {id:1,name:'Cardio — corsa',sets:1,reps:30,done:false},
    {id:2,name:'Addominali',sets:3,reps:20,done:false},
    {id:3,name:'Plank',sets:3,reps:60,done:false},
  ],
  Dom: [],
};

// ---- DEFAULT DIET DATA ----
const defaultDiet = {
  Lun:{
    Colazione:[{id:1,name:'Avena con latte scremato',kcal:320,p:14,c:55,f:6},{id:2,name:'Banana',kcal:90,p:1,c:22,f:0}],
    Pranzo:[{id:1,name:'Riso integrale 80g',kcal:280,p:6,c:62,f:2},{id:2,name:'Pollo alla piastra 150g',kcal:200,p:35,c:0,f:5},{id:3,name:'Insalata mista',kcal:30,p:2,c:5,f:0}],
    Spuntino:[{id:1,name:'Yogurt greco 0%',kcal:110,p:18,c:6,f:0},{id:2,name:'Mandorle 20g',kcal:120,p:4,c:4,f:10}],
    Cena:[{id:1,name:'Salmone 180g',kcal:340,p:38,c:0,f:20},{id:2,name:'Patate dolci 200g',kcal:180,p:3,c:42,f:0},{id:3,name:'Broccoli',kcal:50,p:4,c:8,f:0}],
  },
  Mar:{
    Colazione:[{id:1,name:'Uova strapazzate (3)',kcal:220,p:18,c:2,f:15},{id:2,name:'Pane integrale 2 fette',kcal:160,p:6,c:30,f:2}],
    Pranzo:[{id:1,name:'Pasta integrale 80g',kcal:290,p:10,c:58,f:2},{id:2,name:'Tonno al naturale',kcal:130,p:28,c:0,f:2}],
    Spuntino:[{id:1,name:'Frutto di stagione',kcal:80,p:1,c:20,f:0},{id:2,name:'Proteine in polvere',kcal:120,p:25,c:5,f:1}],
    Cena:[{id:1,name:'Petto di pollo 200g',kcal:260,p:50,c:0,f:6},{id:2,name:'Quinoa 80g',kcal:290,p:11,c:53,f:5},{id:3,name:'Zucchine grigliate',kcal:40,p:2,c:7,f:0}],
  },
  Mer:{
    Colazione:[{id:1,name:'Porridge con frutti di bosco',kcal:350,p:12,c:60,f:7}],
    Pranzo:[{id:1,name:'Riso integrale 80g',kcal:280,p:6,c:62,f:2},{id:2,name:'Merluzzo al forno 200g',kcal:180,p:40,c:0,f:2}],
    Spuntino:[{id:1,name:'Yogurt greco con miele',kcal:150,p:18,c:12,f:1}],
    Cena:[{id:1,name:'Bistecca magra 180g',kcal:320,p:42,c:0,f:16},{id:2,name:'Verdure al vapore',kcal:60,p:4,c:12,f:0}],
  },
  Gio:{
    Colazione:[{id:1,name:'Avena con latte scremato',kcal:320,p:14,c:55,f:6}],
    Pranzo:[{id:1,name:'Insalata di legumi',kcal:320,p:18,c:48,f:6}],
    Spuntino:[{id:1,name:'Mela e noci 30g',kcal:200,p:4,c:22,f:12}],
    Cena:[{id:1,name:'Pollo con verdure',kcal:350,p:45,c:15,f:8}],
  },
  Ven:{
    Colazione:[{id:1,name:'Toast integrale con ricotta',kcal:280,p:16,c:32,f:8}],
    Pranzo:[{id:1,name:'Pasta al pomodoro 80g',kcal:380,p:12,c:72,f:5}],
    Spuntino:[{id:1,name:'Proteine in polvere',kcal:120,p:25,c:5,f:1}],
    Cena:[{id:1,name:'Salmone 150g con riso',kcal:480,p:42,c:52,f:12}],
  },
  Sab:{
    Colazione:[{id:1,name:'Pancakes proteici (4)',kcal:400,p:28,c:50,f:10}],
    Pranzo:[{id:1,name:'Burger di manzo magro + insalata',kcal:450,p:40,c:20,f:18}],
    Spuntino:[{id:1,name:'Frutta fresca',kcal:100,p:1,c:25,f:0}],
    Cena:[{id:1,name:'Pizza integrale (1 porzione)',kcal:500,p:22,c:70,f:14}],
  },
  Dom:{
    Colazione:[{id:1,name:'Cornetto + caffè (giorno libero)',kcal:280,p:5,c:45,f:10}],
    Pranzo:[{id:1,name:'Pasta al ragù 100g',kcal:520,p:24,c:68,f:18}],
    Spuntino:[{id:1,name:'Cioccolato fondente 30g',kcal:160,p:2,c:15,f:10}],
    Cena:[{id:1,name:'Minestra di verdure + pane',kcal:300,p:10,c:50,f:6}],
  },
};

// ---- WEEK UTILS ----
function getMondayKey(){
  const now = new Date();
  const d = new Date(now);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  return d.toISOString().slice(0, 10);
}

// ---- PERSIST ----
function loadData(){
  try{
    const se = localStorage.getItem('ft_exercises');
    const sd = localStorage.getItem('ft_diet');
    const si = localStorage.getItem('ft_ids');
    if(se && sd){
      exercises = JSON.parse(se);
      diet = JSON.parse(sd);
      const ids = si ? JSON.parse(si) : {ex:100, food:100};
      nextExId = ids.ex; nextFoodId = ids.food;
      const savedWeek = localStorage.getItem('ft_week');
      const currentWeek = getMondayKey();
      if(savedWeek !== currentWeek){
        DAYS.forEach(day => { (exercises[day]||[]).forEach(ex => ex.done = false); });
        localStorage.setItem('ft_week', currentWeek);
        localStorage.setItem('ft_exercises', JSON.stringify(exercises));
      }
      return;
    }
  }catch(e){}
  exercises = JSON.parse(JSON.stringify(defaultExercises));
  diet = JSON.parse(JSON.stringify(defaultDiet));
  localStorage.setItem('ft_week', getMondayKey());
}

function saveData(){
  try{
    localStorage.setItem('ft_exercises', JSON.stringify(exercises));
    localStorage.setItem('ft_diet', JSON.stringify(diet));
    localStorage.setItem('ft_ids', JSON.stringify({ex:nextExId, food:nextFoodId}));
  }catch(e){}
}

// ---- HISTORY ----
let history = [];
function loadHistory(){
  try{ history = JSON.parse(localStorage.getItem('ft_history') || '[]'); }catch(e){ history = []; }
}
function saveHistory(){
  try{ localStorage.setItem('ft_history', JSON.stringify(history)); }catch(e){}
}
function logExercise(day, ex){
  const now = new Date();
  history.unshift({
    day,
    name: ex.name,
    sets: ex.sets,
    reps: ex.reps,
    date: now.toLocaleDateString('it-IT', {weekday:'long', day:'numeric', month:'long', year:'numeric'}),
    dateKey: now.toISOString().slice(0,10),
    time: now.toLocaleTimeString('it-IT', {hour:'2-digit', minute:'2-digit'})
  });
  saveHistory();
}
function clearHistory(){
  if(!confirm('Cancellare tutto lo storico?')) return;
  history = [];
  saveHistory();
  buildStorico();
}

// ---- STORICO ----
function buildStorico(){
  const el = document.getElementById('storico-content');
  if(!el) return;
  if(history.length === 0){
    el.innerHTML = '<div class="storico-empty">Nessun allenamento registrato ancora.<br>Inizia a spuntare gli esercizi!</div>';
    return;
  }
  const groups = {};
  history.forEach(h => {
    if(!groups[h.dateKey]) groups[h.dateKey] = {label:h.date, items:[]};
    groups[h.dateKey].items.push(h);
  });
  let html = '';
  Object.keys(groups).sort((a,b) => b.localeCompare(a)).forEach(key => {
    const g = groups[key];
    const count = g.items.length;
    html += `<div class="storico-day">
      <div class="storico-day-hdr">
        <span class="storico-day-title">${g.label}</span>
        <span class="storico-day-meta">${count} esercizi${count===1?'o':''}</span>
      </div>`;
    g.items.forEach(item => {
      const repsLabel = item.name.toLowerCase().includes('plank') || item.name.toLowerCase().includes('cardio') ? `${item.reps}s` : `${item.reps} reps`;
      html += `<div class="storico-ex-row">
        <div class="storico-dot"></div>
        <span class="storico-ex-name">${item.name}</span>
        <span class="storico-ex-detail">${item.sets}×${repsLabel}</span>
        <span class="storico-ex-time">${item.time}</span>
      </div>`;
    });
    html += '</div>';
  });
  el.innerHTML = html;
}

// ---- INIT ----
let exercises = {};
let diet = {};
let nextExId = 100;
let nextFoodId = 100;
loadData();
loadHistory();

// Highlight active nav link based on current page
function setActiveNav(){
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
    const href = tab.getAttribute('href') || '';
    if(
      (page === 'index.html' && href === 'index.html') ||
      (page === 'storico.html' && href === 'storico.html') ||
      (page === 'dieta.html' && href === 'dieta.html') ||
      (page === '' && href === 'index.html')
    ){
      tab.classList.add('active');
    }
  });
}

// ===================== EXERCISES =====================
function buildExercises(){
  const tabsEl = document.getElementById('ex-day-tabs');
  const contEl = document.getElementById('ex-day-contents');
  if(!tabsEl || !contEl) return;
  tabsEl.innerHTML = ''; contEl.innerHTML = '';
  DAYS.forEach((day, i) => {
    const exs = exercises[day] || [];
    const allDone = exs.length > 0 && exs.every(e => e.done);
    const tab = document.createElement('button');
    tab.className = 'day-tab' + (i === 0 ? ' active' : '') + (allDone ? ' complete' : '');
    tab.textContent = day;
    tab.onclick = () => switchExDay(day);
    tab.dataset.day = day;
    tabsEl.appendChild(tab);

    const cont = document.createElement('div');
    cont.className = 'day-content' + (i === 0 ? ' active' : '');
    cont.dataset.day = day;
    cont.innerHTML = renderExDay(day);
    contEl.appendChild(cont);
  });
}

function renderExDay(day){
  const exs = exercises[day] || [];
  const done = exs.filter(e => e.done).length;
  const pct = exs.length > 0 ? Math.round(done / exs.length * 100) : 0;
  const isRest = ['Gio','Dom'].includes(day) && exs.length === 0;
  return `
  <div class="progress-row">
    <div class="progress-label">${done}/${exs.length} esercizi completati</div>
    <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
  </div>
  <div class="section-hdr">
    <span style="font-size:14px;color:var(--text2)">${isRest ? 'Giorno di riposo 🌿' : 'Esercizi'}</span>
    <button class="btn btn-sm" onclick="toggleAddForm('${day}')">+ Aggiungi esercizio</button>
  </div>
  <div class="exercise-list" id="ex-list-${day}">
    ${exs.map(ex => renderEx(day, ex)).join('')}
    ${exs.length === 0 && !isRest ? '<p style="color:var(--text3);font-size:13px;padding:1rem 0">Nessun esercizio. Aggiungine uno!</p>' : ''}
  </div>
  <div class="add-form" id="add-form-${day}">
    <div class="form-row">
      <input type="text" id="new-name-${day}" placeholder="Nome esercizio">
      <input type="number" id="new-sets-${day}" placeholder="Serie" min="1" value="3">
      <input type="number" id="new-reps-${day}" placeholder="Reps" min="1" value="10">
    </div>
    <div class="form-actions">
      <button class="btn btn-sm" onclick="toggleAddForm('${day}')">Annulla</button>
      <button class="btn btn-accent btn-sm" onclick="addExercise('${day}')">Aggiungi</button>
    </div>
  </div>`;
}

function renderEx(day, ex){
  const repsLabel = ex.name.toLowerCase().includes('plank') || ex.name.toLowerCase().includes('cardio') ? `${ex.reps}s` : `${ex.reps} reps`;
  return `<div class="ex-card${ex.done ? ' done' : ''}" id="ex-card-${day}-${ex.id}">
    <div class="ex-check" onclick="toggleEx('${day}',${ex.id})">
      <svg class="check-icon" viewBox="0 0 12 12" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,6 5,9 10,3"/></svg>
    </div>
    <div class="ex-info">
      <div class="ex-name">${ex.name}</div>
      <div class="ex-meta">${ex.sets} serie × ${repsLabel}</div>
    </div>
    <div class="ex-actions">
      <button class="icon-btn" onclick="deleteEx('${day}',${ex.id})" title="Elimina">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="2,4 12,4"/><path d="M5.5 4V2.5h3V4"/><rect x="3" y="4" width="8" height="8" rx="1.5"/></svg>
      </button>
    </div>
  </div>`;
}

function switchExDay(day){
  document.querySelectorAll('#ex-day-tabs .day-tab').forEach(t => t.classList.toggle('active', t.dataset.day === day));
  document.querySelectorAll('#ex-day-contents .day-content').forEach(c => c.classList.toggle('active', c.dataset.day === day));
}

function toggleEx(day, id){
  const ex = exercises[day].find(e => e.id === id);
  ex.done = !ex.done;
  if(ex.done) logExercise(day, ex);
  refreshExDay(day);
  saveData();
}

function deleteEx(day, id){
  exercises[day] = exercises[day].filter(e => e.id !== id);
  refreshExDay(day);
  saveData();
}

function addExercise(day){
  const name = document.getElementById('new-name-' + day).value.trim();
  if(!name) return;
  const sets = parseInt(document.getElementById('new-sets-' + day).value) || 3;
  const reps = parseInt(document.getElementById('new-reps-' + day).value) || 10;
  if(sets < 1 || reps < 1) return;
  exercises[day].push({id:nextExId++, name, sets, reps, done:false});
  refreshExDay(day);
  saveData();
  toggleAddForm(day);
}

function toggleAddForm(day){
  const f = document.getElementById('add-form-' + day);
  f.classList.toggle('open');
  if(f.classList.contains('open')) document.getElementById('new-name-' + day).focus();
}

function refreshExDay(day){
  const cont = document.querySelector(`#ex-day-contents [data-day="${day}"]`);
  cont.innerHTML = renderExDay(day);
  const exs = exercises[day] || [];
  const allDone = exs.length > 0 && exs.every(e => e.done);
  const tab = document.querySelector(`#ex-day-tabs [data-day="${day}"]`);
  tab.classList.toggle('complete', allDone);
}

// ===================== DIET =====================
function buildDiet(){
  const tabsEl = document.getElementById('diet-day-tabs');
  const contEl = document.getElementById('diet-day-contents');
  if(!tabsEl || !contEl) return;
  tabsEl.innerHTML = ''; contEl.innerHTML = '';
  DAYS.forEach((day, i) => {
    const tab = document.createElement('button');
    tab.className = 'day-tab' + (i === 0 ? ' active' : '');
    tab.textContent = day;
    tab.dataset.day = day;
    tab.onclick = () => switchDietDay(day);
    tabsEl.appendChild(tab);

    const cont = document.createElement('div');
    cont.className = 'day-content' + (i === 0 ? ' active' : '');
    cont.dataset.day = day;
    cont.innerHTML = renderDietDay(day);
    contEl.appendChild(cont);
  });
}

function renderDietDay(day){
  const dayData = diet[day];
  let html = '<div class="meal-grid">';
  MEALS.forEach(meal => {
    const foods = dayData[meal] || [];
    const totKcal = foods.reduce((s,f) => s + f.kcal, 0);
    html += `<div class="meal-card">
      <div class="meal-hdr">
        <span class="meal-label">${meal}</span>
        <span class="meal-kcal">${totKcal} kcal</span>
      </div>
      <div class="food-list" id="food-list-${day}-${meal}">
        ${foods.map(f => renderFood(day, meal, f)).join('')}
      </div>
      <div class="inline-food-form" id="food-form-${day}-${meal}">
        <div class="food-form-row">
          <input type="text" id="fn-${day}-${meal}" placeholder="Alimento">
          <input type="number" id="fk-${day}-${meal}" placeholder="kcal" min="0">
          <input type="number" id="fp-${day}-${meal}" placeholder="P (g)" min="0">
          <input type="number" id="fc-${day}-${meal}" placeholder="C (g)" min="0">
          <input type="number" id="ff-${day}-${meal}" placeholder="G (g)" min="0">
        </div>
        <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px">
          <button class="btn btn-sm" onclick="closeFoodForm('${day}','${meal}')">Annulla</button>
          <button class="btn btn-accent btn-sm" onclick="addFood('${day}','${meal}')">Aggiungi</button>
        </div>
      </div>
      <div class="meal-footer">
        <button class="add-food-btn" onclick="openFoodForm('${day}','${meal}')">+ aggiungi alimento</button>
      </div>
    </div>`;
  });
  html += '</div>';
  html += renderMacroSummary(day);
  return html;
}

function renderFood(day, meal, f){
  return `<div class="food-row" id="food-row-${day}-${meal}-${f.id}">
    <span class="food-name">${f.name}</span>
    <span class="food-macros">${f.kcal}kcal · P${f.p}g · C${f.c}g · G${f.f}g</span>
    <button class="food-del" onclick="deleteFood('${day}','${meal}',${f.id})" title="Elimina">×</button>
  </div>`;
}

function renderMacroSummary(day){
  const dayData = diet[day];
  let kcal=0, p=0, c=0, f=0;
  MEALS.forEach(meal => { (dayData[meal]||[]).forEach(food => { kcal+=food.kcal; p+=food.p; c+=food.c; f+=food.f; }); });
  return `<div class="macro-summary">
    <h3>Riepilogo giornaliero</h3>
    <div class="macro-grid">
      <div class="macro-card kcal"><div class="macro-val">${kcal}</div><div class="macro-lbl">Calorie</div></div>
      <div class="macro-card prot"><div class="macro-val">${p}g</div><div class="macro-lbl">Proteine</div></div>
      <div class="macro-card carb"><div class="macro-val">${c}g</div><div class="macro-lbl">Carboidrati</div></div>
      <div class="macro-card fat"><div class="macro-val">${f}g</div><div class="macro-lbl">Grassi</div></div>
    </div>
  </div>`;
}

function switchDietDay(day){
  document.querySelectorAll('#diet-day-tabs .day-tab').forEach(t => t.classList.toggle('active', t.dataset.day === day));
  document.querySelectorAll('#diet-day-contents .day-content').forEach(c => c.classList.toggle('active', c.dataset.day === day));
}

function openFoodForm(day, meal){
  document.getElementById(`food-form-${day}-${meal}`).classList.add('open');
  document.getElementById(`fn-${day}-${meal}`).focus();
}
function closeFoodForm(day, meal){
  document.getElementById(`food-form-${day}-${meal}`).classList.remove('open');
}
function addFood(day, meal){
  const name = document.getElementById(`fn-${day}-${meal}`).value.trim();
  if(!name) return;
  const kcal = parseInt(document.getElementById(`fk-${day}-${meal}`).value) || 0;
  const p = parseInt(document.getElementById(`fp-${day}-${meal}`).value) || 0;
  const c = parseInt(document.getElementById(`fc-${day}-${meal}`).value) || 0;
  const f = parseInt(document.getElementById(`ff-${day}-${meal}`).value) || 0;
  diet[day][meal].push({id:nextFoodId++, name, kcal, p, c, f});
  refreshDietDay(day);
  saveData();
  closeFoodForm(day, meal);
}
function deleteFood(day, meal, id){
  diet[day][meal] = diet[day][meal].filter(f => f.id !== id);
  refreshDietDay(day);
  saveData();
}
function refreshDietDay(day){
  const cont = document.querySelector(`#diet-day-contents [data-day="${day}"]`);
  cont.innerHTML = renderDietDay(day);
}

// ---- BOOT ----
setActiveNav();
buildExercises();
buildDiet();
buildStorico();
