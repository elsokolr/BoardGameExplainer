(() => {
  'use strict';
  const icons = {
    home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    library:'<rect x="3" y="4" width="5" height="16" rx="1"/><rect x="10" y="4" width="4" height="16" rx="1"/><path d="m17 4 4 15-4 1-4-15"/>',
    heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
    sparkles:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5zM20 2v4M18 4h4"/>',
    settings:'<path d="m9 3-1 3-3 1 1 3-2 2 2 2-1 3 3 1 1 3h6l1-3 3-1-1-3 2-2-2-2 1-3-3-1-1-3z"/><circle cx="12" cy="12" r="3"/>',
    setup:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M17.5 14v7M14 17.5h7"/>',
    play:'<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.sparkles}</svg>`;
  const escape = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const storeKey = 'little-table-v1';
  const games = [
    {...window.antiquityQuest, title:'Antiquity Quest', keywords:'grandpa becks games antiquities treasure set collection'},
    {...window.seaSaltPaper, title:'Sea Salt & Paper', keywords:'bombyx sea salt pepper paper origami collection risk taking'},
    {...window.bunnyKingdom, title:'Bunny Kingdom', keywords:'iello richard garfield rabbits fiefs drafting territory carrots'},
    {...window.charlatans, title:'Les Charlatans de Belcastel', keywords:'schmidt schmids quacks of quedlinburg quacksalber wolfgang warsch potions bag building'},
    {...window.skullKing, title:'Skull King', keywords:'grandpa becks games pirates mermaids bidding trick taking cards'}
  ];
  const normalize = text => text.toLocaleLowerCase().replace(/[’']/g,'').replace(/&/g,'and');
  function gameMarkup(game, section='setup', detail=false) {
    const saved=state.savedGames.includes(game.id);
    const markup = detail ? window.gameResources.decorate(game,game.view(section,saved),section) : game.tile(saved,section).replace('</article>', `<div class="tile-resources"><a href="#${game.id}/pdf">PDF & print ↗</a><a href="#${game.id}/dictionary">Dictionary →</a></div></article>`);
    return window.gameMedia.enhance(game,markup,detail,section).replaceAll('data-action="save-game"',`data-action="save-game" data-game-id="${game.id}"`);
  }
  let state = { wishlist: [], savedGames: [], theme: 'daylight', largeText: false, reduceMotion: false };
  try {
    const saved = JSON.parse(localStorage.getItem(storeKey));
    if (saved && typeof saved === 'object') state = {
      wishlist: Array.isArray(saved.wishlist) ? saved.wishlist.filter(v => typeof v === 'string').slice(0,100) : [],
      savedGames: Array.isArray(saved.savedGames) ? [...new Set(saved.savedGames.filter(id => games.some(game => game.id === id)))] : [],
      theme: saved.theme === 'evening' ? 'evening' : 'daylight',
      largeText: saved.largeText === true, reduceMotion: saved.reduceMotion === true
    };
  } catch { /* The app also works when browser storage is unavailable. */ }
  const main = document.querySelector('main');
  const dialog = document.querySelector('dialog');
  let toastTimer;
  const notify = message => {
    const toast = document.querySelector('#toast');
    toast.textContent = message; toast.classList.add('visible');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
  };
  function persist() {
    try { localStorage.setItem(storeKey, JSON.stringify(state)); }
    catch { notify('Browser storage is unavailable. Changes will last for this visit.'); }
  }
  function applySettings() {
    document.body.classList.toggle('theme-evening', state.theme === 'evening');
    document.body.classList.toggle('large-text', state.largeText);
    document.body.classList.toggle('reduce-motion', state.reduceMotion);
  }
  const shelfArt = `<svg class="empty-art" viewBox="0 0 150 125" fill="none" aria-hidden="true"><ellipse cx="76" cy="111" rx="61" ry="6" fill="#efeee5"/><rect x="24" y="65" width="103" height="34" rx="5" fill="#dce4cd" stroke="#aab994"/><path d="M32 76h86M33 87h28" stroke="#aab994" stroke-linecap="round"/><rect x="34" y="40" width="82" height="26" rx="4" fill="#e9def0" stroke="#c0a7cd" transform="rotate(-6 34 40)"/><path d="m46 50 48-5" stroke="#c0a7cd" stroke-linecap="round"/><rect x="54" y="17" width="32" height="28" rx="7" fill="#f3e1bf" stroke="#cfb98f" transform="rotate(10 54 17)"/><g fill="#b49c75"><circle cx="63" cy="25" r="2"/><circle cx="75" cy="39" r="2"/><circle cx="69" cy="32" r="2"/></g><path d="M112 21v12M106 27h12M24 27v8M20 31h8" stroke="#b7c3a1" stroke-width="2" stroke-linecap="round"/><path d="m124 50 3 4-3 4-3-4z" fill="#d7c6e1"/></svg>`;
  const heroArt = `<svg class="hero-art" viewBox="0 0 430 320" fill="none" aria-hidden="true"><circle cx="240" cy="164" r="130" fill="#e0e6d3"/><path d="M75 245c80-22 211-15 306 10" stroke="#d2dcc0" stroke-width="2" stroke-linecap="round"/><ellipse cx="240" cy="267" rx="150" ry="15" fill="#d5ddc8"/><g transform="rotate(-13 193 168)"><rect x="131" y="78" width="105" height="149" rx="12" fill="#b8a3c9"/><rect x="138" y="85" width="91" height="135" rx="8" stroke="#e9e0f0" stroke-width="1.5"/><path d="m184 116 9 21 23 3-17 16 4 23-19-11-20 11 4-23-17-16 23-3z" fill="#e9e0f0"/><path d="M167 193h33" stroke="#e9e0f0" stroke-width="2" stroke-linecap="round"/></g><g transform="rotate(12 273 162)"><rect x="221" y="91" width="105" height="149" rx="12" fill="#fbf7ec" stroke="#d7d9c6"/><rect x="229" y="99" width="89" height="133" rx="8" stroke="#dfdfcd"/><path d="m274 125 25 31-25 32-25-32z" fill="#94a777"/><path d="m274 125 8 31-8 32-8-32z" fill="#b8c69c"/><path d="M254 210h37" stroke="#c4ceb2" stroke-width="2" stroke-linecap="round"/><circle cx="241" cy="112" r="3" fill="#a9b990"/><circle cx="307" cy="219" r="3" fill="#a9b990"/></g><g transform="rotate(-12 126 242)"><rect x="95" y="213" width="57" height="57" rx="12" fill="#f2d4a2"/><rect x="100" y="218" width="47" height="47" rx="9" stroke="#e4c28e"/><g fill="#aa8253"><circle cx="110" cy="228" r="3.2"/><circle cx="136" cy="228" r="3.2"/><circle cx="123" cy="241" r="3.2"/><circle cx="110" cy="254" r="3.2"/><circle cx="136" cy="254" r="3.2"/></g></g><g transform="rotate(15 319 251)"><rect x="294" y="227" width="46" height="46" rx="10" fill="#889c70"/><g fill="#f5f3e6"><circle cx="307" cy="240" r="3"/><circle cx="326" cy="240" r="3"/><circle cx="307" cy="259" r="3"/><circle cx="326" cy="259" r="3"/></g></g><path d="M102 82v18M93 91h18M335 74v14M328 81h14" stroke="#a8b38e" stroke-width="2" stroke-linecap="round"/><path d="m355 171 5 9 10 2-8 7 1 10-8-5-9 4 2-10-7-8 10-1z" fill="#b4bea0"/><circle cx="158" cy="52" r="4" fill="#c5ccb5"/><circle cx="359" cy="224" r="3" fill="#c5ccb5"/><path d="M225 48c6-9 13-8 15-2 3-6 11-4 11 2 0 7-12 13-12 13s-17-6-14-13Z" stroke="#9eac86" stroke-width="1.5"/></svg>`;
  function features() {
    return `<div class="features"><article class="feature"><span class="step-label">01 / GET READY</span><div class="feature-icon sage">${icon('setup')}</div><h3>A place for every piece</h3><p>Visual setup guides to get everything on the table, right where it belongs.</p></article><article class="feature"><span class="step-label">02 / GET PLAYING</span><div class="feature-icon lilac">${icon('play')}</div><h3>Rules that just click</h3><p>Friendly explanations, one step at a time. No rulebook rabbit holes.</p></article><article class="feature"><span class="step-label">03 / GET A REFRESH</span><div class="feature-icon peach">${icon('clock')}</div><h3>A little memory jog</h3><p>Already know the game? Jump straight to the essentials and get playing.</p></article></div>`;
  }
  function home() {
    return `<div class="welcome-row"><div><h1>Come on in. Take a seat. <span aria-hidden="true">☀</span></h1><p>Your next game night starts here.</p></div><span class="date-pill"><span aria-hidden="true">✧</span> A little less figuring it out</span></div><section class="hero" aria-label="Welcome to Little Table"><div class="hero-copy"><span class="eyebrow">BIG FUN. LITTLE EXPLANATIONS.</span><h1>Less rulebook.<br>More <em>game night.</em></h1><p>A cozy little home for board game rules, easy setups, and “oh right!” reminders.</p><a class="button primary" href="#library">Explore the library <span aria-hidden="true">↗</span></a></div>${heroArt}</section><div class="section-top"><div><h2>From box to table, made simple.</h2><p>A helping hand, however you like to learn.</p></div><a class="quiet-link" href="#guide">How it works <span aria-hidden="true">↗</span></a></div>${features()}<div class="section-top"><div><h2>Your game shelf</h2><p>A small collection, with plenty of room to grow.</p></div><a class="quiet-link" href="#library">View library <span aria-hidden="true">→</span></a></div><div class="game-grid">${games.map(game=>gameMarkup(game)).join('')}</div><div class="bottom-note"><span aria-hidden="true">♡</span> For the first-timers, the “it’s been a while” players, and everyone at the table.</div>`;
  }
  function wishlist() {
    if (!state.wishlist.length) return '';
    return `<section class="wishlist"><div class="section-top"><div><h2>Your little wishlist</h2><p>Ideas saved on this device. These aren’t game guides yet.</p></div></div>${state.wishlist.map((game,i) => `<div class="wish-row"><span class="feature-icon lilac" style="margin:0;width:30px;height:30px">${icon('sparkles')}</span><strong>${escape(game)}</strong><span class="wish-status">WISHLIST IDEA</span><button class="icon-button" data-action="remove-wish" data-index="${i}" aria-label="Remove ${escape(game)} from wishlist">×</button></div>`).join('')}</section>`;
  }
  function library() {
    return `<div class="page-header"><span class="eyebrow">PICK SOMETHING TO PLAY</span><h1>The game library</h1><p>One friendly home for setup guides, visual rules, and quick reminders. Pick a game and pull up a chair.</p></div><div class="toolbar"><label class="search"><span data-icon="search"></span><span class="sr-only">Search game guides</span><input id="game-search" type="search" placeholder="Find your next game…" autocomplete="off"></label><select id="game-filter" aria-label="Filter by guide type"><option value="all">All guides</option><option value="setup">Setup guides</option><option value="rules">Learn to play</option><option value="quick">Quick reminders</option></select></div><div id="library-results" aria-live="polite">${libraryResults()}</div>${wishlist()}`;
  }
  function libraryResults(query = '', filter = 'all') {
    const words = normalize(query.trim()).split(/\s+/).filter(Boolean);
    const matches = games.filter(game => words.every(word => normalize(game.title + ' ' + game.keywords).includes(word)));
    if (matches.length) return `<p class="results-count">${matches.length} ${matches.length===1?'game':'games'} · ready for your table</p><div class="game-grid">${matches.map(game=>gameMarkup(game,filter === 'all' ? 'setup' : filter)).join('')}</div>`;
    return `<div class="empty-shelf large-empty">${libraryEmpty(query, filter)}</div>`;
  }
  function libraryEmpty(query = '', filter = 'all') {
    const filtered = query.trim() || filter !== 'all';
    return `${shelfArt}<h2>${filtered ? 'No guides found just yet.' : 'A fresh shelf. A world of possibilities.'}</h2><p>${query.trim() ? `There isn’t a guide for “${escape(query.trim())}” in the library yet. You can save it to your personal wishlist.` : filtered ? 'No guides have been added in this category yet. Try all guides or add a game to your wishlist.' : 'We’re making room for our very first guide. For now, save the games you’d love to have at your table.'}</p><button class="button primary" data-action="request">Add a wishlist idea <span aria-hidden="true">+</span></button>${filtered ? '<button class="quiet-link text-button" data-action="clear-filters">Clear search & filters</button>' : ''}`;
  }
  function saved() {
    return `<div class="page-header"><span class="eyebrow">YOUR GAME NIGHT REGULARS</span><h1>Saved games</h1><p>A shortcut to the games you come back to, time and time again.</p></div>${state.savedGames.length ? `<div class="game-grid">${games.filter(game=>state.savedGames.includes(game.id)).map(game=>gameMarkup(game)).join('')}</div>` : `<section class="empty-shelf large-empty">${shelfArt}<h2>Your favorites will feel at home here.</h2><p>Tap the heart on a game to keep its guide right here for next time.</p><a href="#library" class="button primary">Visit the library <span aria-hidden="true">↗</span></a></section>`}${wishlist()}`;
  }
  function guide() {
    return `<div class="page-header"><span class="eyebrow">A LITTLE ORIENTATION</span><h1>Make yourself at home.</h1><p>Little Table is being built to make learning a game feel as welcoming as playing one. Here’s how each game guide helps.</p></div><div class="guide-cards"><article class="feature"><div class="feature-icon sage">${icon('setup')}</div><span class="guide-number">01 — SET IT UP</span><h3>See the whole table.</h3><p>Follow a visual layout and a short checklist to get your game ready. Find out what goes where before the first turn.</p></article><article class="feature"><div class="feature-icon lilac">${icon('play')}</div><span class="guide-number">02 — LEARN TO PLAY</span><h3>One clear step at a time.</h3><p>Start with the goal, then learn what happens on a turn. Simple examples will help the important details click.</p></article><article class="feature"><div class="feature-icon peach">${icon('clock')}</div><span class="guide-number">03 — HAVE A REFRESH</span><h3>Skip to the “oh, right!”</h3><p>A compact reminder of setup, turns, and scoring for games you already know. Less reading between you and playing.</p></article></div><div class="info-panel"><h2>A guide for your kind of game night.</h2><p>Each game offers two ways in, so new players and returning players can find what they need.</p><div class="mode-cards" style="margin-top:20px"><div class="mode-card"><span class="eyebrow">FIRST TIME HERE?</span><h3>Teach me the game</h3><p>A patient walkthrough from opening the box to finishing your first round.</p></div><div class="mode-card"><span class="eyebrow">PLAYED IT BEFORE?</span><h3>Just a quick reminder</h3><p>All the essentials in one place, with links to the details whenever you need them.</p></div></div></div><a class="button primary" href="#library">Take a look around <span aria-hidden="true">↗</span></a>`;
  }
  function settings() {
    return `<div class="page-header"><span class="eyebrow">MAKE IT FEEL LIKE YOU</span><h1>A few little preferences.</h1><p>Get comfortable. Your choices are saved in this browser on this device.</p></div><section class="settings-panel"><h2>Your reading nook</h2><div class="setting-row"><div><h3><label for="theme">Table lighting</label></h3><p>A light and airy look, or something cozier for the evening.</p></div><select id="theme"><option value="daylight" ${state.theme === 'daylight' ? 'selected' : ''}>Daylight</option><option value="evening" ${state.theme === 'evening' ? 'selected' : ''}>Evening</option></select></div><div class="setting-row"><div><h3><label for="large-text">A little more readable</label></h3><p>Make explanations and navigation text larger.</p></div><input type="checkbox" class="switch" role="switch" id="large-text" ${state.largeText ? 'checked' : ''}></div><div class="setting-row"><div><h3><label for="reduce-motion">Keep things still</label></h3><p>Turn off little movements and transitions.</p></div><input type="checkbox" class="switch" role="switch" id="reduce-motion" ${state.reduceMotion ? 'checked' : ''}></div></section><section class="info-panel"><h2>Just your little corner.</h2><p>No account needed. Preferences, saved games, and wishlist ideas live in this browser. Clearing browser data will reset them; they don’t sync between devices.</p></section>`;
  }
  const pages = {home, library, saved, guide, settings};
  const titles = {home:'Home',library:'Game library',saved:'Saved games',guide:'How it works',settings:'Settings'};
  function paintIcons() { document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); }); }
  function closeMenu() { document.querySelector('#sidebar').classList.remove('open'); document.querySelector('[data-action="menu"]').setAttribute('aria-expanded','false'); }
  function render(focus = false) {
    const memoryDialog=document.querySelector('#memory-dialog');
    if(memoryDialog.open)memoryDialog.close();
    const route = location.hash.slice(1) || 'home';
    const game = games.find(game => route === game.id || route.startsWith(game.id + '/'));
    const isGame = Boolean(game);
    const current = isGame ? 'library' : Object.hasOwn(pages, route) ? route : 'home';
    main.innerHTML = isGame ? gameMarkup(game,route.split('/')[1],true) : pages[current]();
    document.querySelector('.nav-count').textContent = String(games.length);
    document.querySelector('#breadcrumb').textContent = isGame ? `Game library / ${game.title}` : titles[current];
    document.title = `${isGame ? game.title : titles[current]} — Little Table`;
    document.querySelectorAll('[data-route]').forEach(link => {
      const active = link.dataset.route === current;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current');
    });
    paintIcons(); closeMenu(); window.gameLanguage.sync();
    if (focus) { main.focus({preventScroll:true}); window.scrollTo(0,0); }
  }
  function refreshSearch() {
    document.querySelector('#library-results').innerHTML = libraryResults(document.querySelector('#game-search').value, document.querySelector('#game-filter').value);
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-action]');
    if (!button) { if (!event.target.closest('#sidebar')) closeMenu(); return; }
    switch(button.dataset.action) {
      case 'view-memory': {
        const selected=games.find(game=>game.id===button.dataset.gameId);
        if(selected)window.gameResources.showMemory(selected);break;
      }
      case 'close-memory': document.querySelector('#memory-dialog').close(); break;
      case 'language': {
        const scroll=window.scrollY;
        window.gameLanguage.toggle(); render();
        window.scrollTo(0,scroll); document.querySelector('#language-toggle').focus({preventScroll:true});
        break;
      }
      case 'clear-dictionary': {
        const input=document.querySelector('#dictionary-search');input.value='';input.dispatchEvent(new Event('input',{bubbles:true}));input.focus();break;
      }
      case 'print-game': {
        const selected=games.find(game=>game.id===button.dataset.gameId);
        if(selected)window.gameResources.print(selected);break;
      }
      case 'print-memory': {
        const selected=games.find(game=>game.id===button.dataset.gameId);
        if(selected)window.gameResources.printMemory(selected);break;
      }
      case 'save-game': {
        const game = games.find(game => game.id === button.dataset.gameId);
        if(!game) break;
        const isSaved = state.savedGames.includes(game.id);
        state.savedGames = isSaved ? state.savedGames.filter(id=>id!==game.id) : [...state.savedGames,game.id]; persist();
        document.querySelectorAll(`[data-action="save-game"][data-game-id="${game.id}"]`).forEach(control => {
          control.classList.toggle('is-saved', !isSaved); control.setAttribute('aria-pressed', String(!isSaved));
          if(control.closest('.game-heading'))control.textContent = isSaved ? '♡ Save game' : '♥ Saved';
          else {control.textContent = isSaved ? '♡' : '♥'; control.setAttribute('aria-label', `${isSaved ? 'Save' : 'Unsave'} ${game.title}`);}
        });
        if(location.hash === '#saved') {render(); (main.querySelector('[data-action="save-game"]') || main).focus();}
        notify(isSaved ? 'Game removed from saved games.' : `${game.title} saved for next time.`); break;
      }
      case 'aq-reset': case 'aq-example': games[0].click(button); window.gameMedia.refreshLive(); break;
      case 'ssp-reset': case 'ssp-outcome': games[1].click(button); window.gameMedia.refreshLive(); break;
      case 'bk-reset': case 'bk-example': case 'bk-join': games[2].click(button); window.gameMedia.refreshLive(); break;
      case 'qc-reset': case 'qc-risk': games[3].click(button); window.gameMedia.refreshLive(); break;
      case 'sk-reset': case 'sk-trick': games[4].click(button); window.gameMedia.refreshLive(); break;
      case 'menu': {
        const open = document.querySelector('#sidebar').classList.toggle('open');
        button.setAttribute('aria-expanded', String(open));
        break;
      }
      case 'request': {
        document.querySelector('#request-form').reset();
        const query = document.querySelector('#game-search');
        if (query) document.querySelector('#game-name').value = query.value.trim().slice(0,100);
        dialog.showModal(); document.querySelector('#game-name').focus(); break;
      }
      case 'close-dialog': dialog.close(); break;
      case 'clear-filters': document.querySelector('#game-search').value=''; document.querySelector('#game-filter').value='all'; refreshSearch(); document.querySelector('#game-search').focus(); break;
      case 'remove-wish': {
        const index = Number(button.dataset.index);
        if (Number.isInteger(index) && index >= 0 && index < state.wishlist.length) {
          state.wishlist.splice(index,1); persist(); render();
          const next = main.querySelector('[data-action="remove-wish"]') || main;
          next.focus(); notify('Wishlist idea removed.');
        }
        break;
      }
    }
  });
  document.addEventListener('input', event => {
    if (event.target.id === 'game-search') refreshSearch();
    if (event.target.id === 'dictionary-search') {
      const selected=games.find(game=>game.id===location.hash.slice(1).split('/')[0]);
      if(selected)document.querySelector('#dictionary-results').innerHTML=window.gameResources.results(selected,event.target.value);
    }
  });
  document.addEventListener('change', event => {
    if(event.target.id.startsWith('aq-') || event.target.hasAttribute('data-aq-check')) { games[0].change(event.target); window.gameMedia.refreshLive(); return; }
    if(event.target.id.startsWith('ssp-') || event.target.hasAttribute('data-ssp-check')) { games[1].change(event.target); window.gameMedia.refreshLive(); return; }
    if(event.target.id.startsWith('bk-') || event.target.hasAttribute('data-bk-check')) { games[2].change(event.target); window.gameMedia.refreshLive(); return; }
    if(event.target.id.startsWith('qc-') || event.target.hasAttribute('data-qc-check')) { games[3].change(event.target); window.gameMedia.refreshLive(); return; }
    if(event.target.id.startsWith('sk-') || event.target.hasAttribute('data-sk-check')) { games[4].change(event.target); window.gameMedia.refreshLive(); return; }
    if (event.target.id === 'game-filter') refreshSearch();
    else if (['theme','large-text','reduce-motion'].includes(event.target.id)) {
      if (event.target.id === 'theme') state.theme = event.target.value;
      if (event.target.id === 'large-text') state.largeText = event.target.checked;
      if (event.target.id === 'reduce-motion') state.reduceMotion = event.target.checked;
      applySettings(); persist();
    }
  });
  document.querySelector('#request-form').addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('#game-name');
    const name = input.value.trim();
    if (!name) { input.setCustomValidity('Please enter a game name.'); input.reportValidity(); return; }
    if (state.wishlist.some(game => game.toLowerCase() === name.toLowerCase())) { notify('That game already has a spot on your wishlist.'); return; }
    if (state.wishlist.length >= 100) { notify('Your wishlist has 100 ideas. Remove one to make room.'); return; }
    state.wishlist.push(name); persist(); dialog.close(); render(); notify('A little idea saved for a future game night.');
  });
  document.querySelector('#game-name').addEventListener('input', event => event.target.setCustomValidity(''));
  for(const popup of [dialog,document.querySelector('#memory-dialog')])popup.addEventListener('click', event => { if (event.target === popup) { const r=popup.getBoundingClientRect(); if (event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) popup.close(); } });
  document.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });
  window.addEventListener('hashchange', () => render(true));
  applySettings(); render();
})();
