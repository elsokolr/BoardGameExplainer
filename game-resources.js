/* Shared resources for game guides. Definitions explain the mechanics already
   sourced in each game's guide; they are not quotations from the rulebooks. */
window.gameResources = (() => {
  const entries = {
    'skull-king':window.skullKing.resources,
    'les-charlatans-de-belcastel':window.charlatans.resources,
    'bunny-kingdom': {
      pdf:'https://iellogames.com/wp-content/uploads/2017/09/Bunny-Kingdom-Rules-EN-Light.pdf',
      terms:[
        ['Building','A City or a Farm, Sky Tower, or Camp token. Draft its card during Exploration; place it during Construction, following its restrictions. Each territory can hold only one Building.'],
        ['Camp','A temporary claim on a territory with no Rabbit or Building. Put a Rabbit on it. The matching Territory card removes the Camp and gives control to whoever plays that card.'],
        ['Camp priority','The number on a Camp card. Announce it before picking a location. Lower-numbered Camps may be placed first; you may then place yours or save it.'],
        ['City','A Building that contributes Strength to a fief: 1, 2, or 3 towers. Printed City spaces begin with Strength 1 Cities, but a Rabbit must claim the territory for a player to control it.'],
        ['Construction','The second phase of each round. You may place saved Buildings onto legal territories, or keep them for a later Construction phase.'],
        ['Drafting','Choosing cards to keep before passing the rest. With 3–4 players, choose 2 to play. With 2 players, draw from your Reserve, choose 1 to play and 1 to discard, then exchange hands.'],
        ['Exploration','The first phase of a round. Players repeatedly draft cards and resolve them simultaneously until their hands are exhausted.'],
        ['Farm','A Building that adds a basic or luxury resource to its territory. A printed basic resource underneath still produces too. Luxury Farms have terrain requirements.'],
        ['Fief','One territory or a connected group of territories you control. Connections use edges, not diagonal corners, and cannot cross Lava Flows. Sky Towers can link separate fiefs.'],
        ['Golden Carrots','Victory points. Earn them from fiefs at each Harvest and from Parchments at game end. Highest final total wins.'],
        ['Harvest','The third phase of every round. Score each fief separately by multiplying its Strength by its Wealth. There are four Harvests in the game.'],
        ['Lava Flow','A printed barrier between territories. Even if their squares share an edge, they are not connected across that barrier.'],
        ['Kingdom (your lands)','Our friendly name for all territories you control. It can contain several separate fiefs. Score those fiefs separately; your whole kingdom is not automatically one scoring group.'],
        ['Mission','A Parchment that awards points for meeting its printed condition. Check it after the fourth Harvest, not every round.'],
        ['Parchment','A secret card kept face down until final scoring. Parchments are either conditional Missions or fixed-value Treasures. The number you own is public.'],
        ['Provisions','An Exploration card that immediately draws and plays 2 cards from the main deck. Resolve their effects normally; do not add them to the passing hand.'],
        ['Reserve','In the two-player mode, a personal face-down pile of 10 cards each round. Draw 1 into your hand before every draft. Do not confuse this with the shared deck or Rabbit supply.'],
        ['Resource','Something a territory produces. Fields produce Carrots, Forests produce Wood, and Seas produce Fish. Farms add basic or luxury types. Duplicate types do not increase a fief’s Wealth.'],
        ['Sky Towers','A matched pair of Building tokens that links two of your territories in separate fiefs as though they were adjacent. The joined lands share Cities and resources for scoring.'],
        ['Strength','The sum of city towers in a single fief. A Strength 2 City counts as 2, not 1. A fief without city towers earns no Harvest points.'],
        ['Territory','One coordinate square on the board. Playing its matching letter-and-number card places your Rabbit there to show control.'],
        ['Trading Post','A Farm that produces one basic resource of your choice: Wood, Fish, or Carrots. You can choose a different one each round.'],
        ['Treasure','A Parchment worth its printed Golden Carrots with no Mission condition. Score it at game end.'],
        ['Wealth','The number of different resource types produced in one fief. Three Fish territories still contribute only 1 Wealth. A fief without resources earns no Harvest points.']
      ]
    },
    'antiquity-quest': {
      pdf:'https://cdn.shopify.com/s/files/1/0565/3230/4053/files/aq_rulebook_optimized.pdf?v=1652992513',
      terms:[
        ['Antiquity','A numbered or wild artifact card belonging to one civilization. Each is worth 25 card points.'],
        ['Cache','Your second, face-down pile of 10 cards. Take it when your initial hand runs out. Playing your last hand card lets you keep playing; discarding it means waiting until your next turn. Partners share one cache.'],
        ['Character pile','The separate pile for used Remington cards and cards removed by Tess. It is not the discard pile you can pick up.'],
        ['Civilization / suit','One of the six colored groups of Antiquities. Antiquities in a collection must all belong to the same civilization.'],
        ['Collection','A group you start with at least 3 compatible cards. It becomes complete at 5 cards.'],
        ['Completed collection','A collection with at least 5 cards. Only a Mixed collection can grow beyond 5. Completed collections earn collection points as well as the points for their cards.'],
        ['Discard','The card you put face up into the discard pile to finish your turn: an Antiquity, Treasure, or Tess. Remington cannot be discarded.'],
        ['Discard pickup','Instead of drawing 2, use 2–4 Antiquities from your hand with the matching top discard to start a new collection; take the rest of the pile into your hand. You must have started a collection on an earlier turn.'],
        ['Draw pile','The face-down deck in the middle. A normal draw takes 2 cards.'],
        ['Going out','Emptying your hand and cache with at least 5 completed collections, or 7 shared collections in partner play. In basic rules, everyone else then gets a final full turn.'],
        ['Hand','The cards you hold privately and can play from on your turn.'],
        ['Incomplete collection','A collection of 3 or 4 cards. Rivals can add legal cards to it after starting their own first collection.'],
        ['Mixed collection','Antiquities of one civilization combined with Treasures. At 5+ cards it earns 250 collection points and can keep growing.'],
        ['Perfect collection','Five different Antiquities of one civilization (1–5), or all five different Treasure types. Worth 1,000 or 1,500 collection points respectively. Matching wild Antiquities can fill gaps.'],
        ['Remington','A character played during the Play phase to draw 2 cards, then placed in the character pile. In basic play the draw is mandatory; each unplayed Remington costs 100 points at round end.'],
        ['Sabotage','Adding legal cards to a rival’s incomplete collection to lower its potential value, such as adding a duplicate or mixing in a Treasure.'],
        ['Standard collection','Five Antiquities of one civilization with repeats, or five Treasures with repeats. Worth 500 or 750 collection points respectively.'],
        ['Tess Wynter','A character discarded to move the entire discard pile into the character pile, Tess on top. She can also be discarded when the discard space is empty. Each leftover Tess costs 100 points.'],
        ['Treasure','A black-background card worth 50 card points. Collect Treasures together or mix them with Antiquities. Antiquities cannot be added to a Treasure-only collection.'],
        ['Wild Antiquity','A W card that can replace a number of its own civilization. It never counts as a duplicate and is worth 25 card points.']
      ]
    },
    'sea-salt-paper': {
      pdf:'https://studiobombyx.com/assets/SSAP_rulebook_EN-3.pdf',
      terms:[
        ['Boat pair','Two Boat cards form a duo worth 1 point. Playing the pair gives you another full turn.'],
        ['Caller','The player who reveals their hand and announces Stop or Last Chance with at least 7 card points.'],
        ['Card points','The value of your duos, collections, multipliers, and Mermaids, counting both hand and table. These determine whether you can call at 7+ and whether Last Chance succeeds.'],
        ['Collector','A card type whose score depends on the number you own: Shells, Octopuses, Penguins, or Sailors. Use the scoring table for their set totals.'],
        ['Color bonus','One point per card of your most numerous color, counting hand and table. Last Chance determines who receives this bonus. It is separate from card points and does not require a Mermaid.'],
        ['Crab pair','Two Crab cards form a duo worth 1 point. Playing them lets you inspect one discard pile, keep its order, and secretly take any one card from it.'],
        ['Discard piles','Two face-up piles beside the draw deck. Normally only their top cards are available; do not look through them unless a Crab effect allows it.'],
        ['Draw deck','The face-down pile. You can draw 2, keep 1, and discard the other; fill an empty discard pile first. If the deck is empty at turn end, the round scores nothing.'],
        ['Duo','A pair of Crabs, Boats, or Fish, or a Swimmer plus a Shark. Each pair earns 1 point even in hand; lay it down to trigger its effect once. Colors do not need to match.'],
        ['Fish pair','Two Fish cards form a duo worth 1 point. Playing them adds the top card of the draw deck to your hand.'],
        ['Hand','Your private cards. You start each round with no cards in hand. Hand cards still count for scoring.'],
        ['Last Chance','An optional round-ending gamble at 7+ card points. Rivals get a final turn. If you tie or beat every rival’s card points, you score card points plus color bonus and they score color only. Otherwise you score color only and they score card points.'],
        ['Mermaid','A card that scores the size of one of your largest color groups. Each Mermaid must use a different color. Mermaids are white cards. Reveal all four to win the game immediately.'],
        ['Multiplier','A card that adds points for another type: Lighthouse for Boats, Shoal for Fish, Penguin Colony for Penguins, and Captain for Sailors. A multiplier is not itself a card of the type it rewards.'],
        ['Played cards','Duo cards placed face up in your area. They continue to count for card points and color counts, but cannot be reused in another pair.'],
        ['Protected hand','During Last Chance, revealed hands are protected from attacks. After a rival takes their final turn, they reveal their hand too.'],
        ['Round','One stretch of play between shuffling the full deck and scoring or running out of draw cards. Scores accumulate across rounds.'],
        ['Stop','At 7+ card points, end the round immediately. Everyone scores card points, with no final turns or separate color bonus.'],
        ['Swimmer + Shark','A duo worth 1 point. Playing it steals one random card from an opponent’s unprotected hand.'],
        ['Victory target','The total that triggers game end after scoring: 40 with 2 players, 35 with 3, or 30 with 4. Highest total wins; final-round points break ties.']
      ]
    }
  };
  const escape = value => String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const memory = {
    'skull-king':window.skullKing.memory,
    'les-charlatans-de-belcastel':window.charlatans.memory,
    'bunny-kingdom': {
      badge:'4 ROUNDS · BASE GAME', formula:'City towers × different resources',
      example:'3 towers × 2 types = 6 points per fief',
      steps:[['▦','DRAFT','3–4 players: keep 2, pass the rest, play. Left in rounds 1 & 3; right in 2 & 4.'],['♜','BUILD','Place saved Buildings on legal squares. One Building per square.'],['×','HARVEST','Count each connected fief separately. Edges connect; diagonals and Lava Flows do not. Repeated resources count once.'],['✧','FINISH','Score fiefs after all 4 rounds. Then reveal Parchments and add their points once.']],
      note:'2 players: each round, 10 in hand + 10 Reserve. Before each draft, draw 1; play 1, discard 1 face down, exchange the rest.'
    },
    'antiquity-quest': {
      badge:'BASIC RULES · INDIVIDUAL PLAY', formula:'Draw → Play → Discard',
      example:'Start a collection at 3 cards · complete at 5',
      steps:[['↓','DRAW','Take 2 from the deck OR qualify for the whole discard pile.'],['▦','PLAY','Build collections. Antiquities share one civilization; Treasures may mix with them. Remington: draw 2.'],['↗','DISCARD','Discard 1 Antiquity, Treasure, or Tess. Tess clears the discard pile; never discard Remington.'],['✧','GO OUT','Empty hand + cache, with 5 completed collections. Everyone else gets one last turn.']],
      note:'Cache: play your last hand card → pick up and keep playing. Discard it → pick up, wait until next turn. The 500 bonus needs Mixed + Standard + Perfect.'
    },
    'sea-salt-paper': {
      badge:'BASE GAME · 2–4 PLAYERS', formula:'Take a card → Play duos → Decide',
      example:'At 7+ card points: Stop or Last Chance',
      steps:[['↓','TAKE','Draw 2, keep 1, discard 1 (fill an empty pile first). OR take 1 top discard.'],['≈','DUOS','Crabs: choose from a discard pile. Boats: another turn. Fish: draw 1. Swimmer + Shark: steal 1 randomly.'],['■','STOP','Everyone scores card points now. No final turns or separate color bonus.'],['✧','LAST CHANCE','Others take a final turn. Tie or beat all: you get cards + color; others color only. Lose: you get color only; others cards.']],
      note:'Count hand + table. Color bonus = biggest color group. Empty deck at turn end: no scoring. Game targets: 2 players 40 · 3 players 35 · 4 players 30.'
    }
  };
  function memoryCard(game) {
    const data=window.gameLanguage?.isFrench()?window.gameFrench[game.id].memory:memory[game.id];
    return `<article class="memory-card" aria-label="${escape(game.title)} compact memory card"><div class="memory-card-heading">${window.gameMedia.cover(game.id,'memory-box')}<span class="eyebrow">LITTLE TABLE · POCKET REMINDER</span><h2>${escape(game.title)}</h2><small>${data.badge}</small></div><div class="memory-formula"><strong>${data.formula}</strong><span>${data.example}</span></div><ol class="memory-steps">${data.steps.map(([symbol,title,text],i)=>`<li><span class="memory-symbol" aria-hidden="true">${window.gameMedia.data[game.id].memory[i]?window.gameMedia.icon(game.id,window.gameMedia.data[game.id].memory[i]):symbol}</span><div><h3>${title}</h3><p>${text}</p></div></li>`).join('')}</ol><p class="memory-footnote">${data.note}</p><small class="memory-caption">Quick reminder · game art © ${escape(window.gameMedia.data[game.id].publisher)}</small></article>`;
  }
  function memoryPanel(game) {
    return `<section class="memory-panel"><div><span class="eyebrow">KEEP A LITTLE HELP HANDY</span><h2>Your game-night memory card</h2><p>Keep this visual reminder open while you play. No printer needed.</p><div class="memory-actions"><button class="button primary" data-action="view-memory" data-game-id="${game.id}">View memory card</button><button class="button" data-action="print-memory" data-game-id="${game.id}">Print / Save memory card</button></div><p class="aq-note">Pocket card: 90 × 130 mm. Print at 100% / actual size. Use A6 or larger paper.</p></div>${memoryCard(game)}</section>`;
  }
  function results(game, query='') {
    const words=query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    const terms=entries[game.id].terms.filter(term=>words.every(word=>term.join(' ').toLocaleLowerCase().includes(word))).sort((a,b)=>a[0].localeCompare(b[0]));
    return `<p class="results-count" role="status">${terms.length} ${terms.length===1?'term':'terms'}${query.trim()?' found':''}</p>${terms.length ? `<dl class="dictionary-list">${terms.map(([term,definition])=>`<div><dt>${escape(term)}</dt><dd>${escape(definition)}</dd></div>`).join('')}</dl>` : `<div class="empty-shelf large-empty"><h3>No matching terms yet.</h3><p>Try a shorter word or search by what the term means.</p><button class="button" data-action="clear-dictionary">Clear search</button></div>`}`;
  }
  function dictionary(game, printable=false) {
    return `<section class="dictionary"><div class="page-header"><span class="eyebrow">A LITTLE HELP WITH THE LINGO</span><h2>${escape(game.title)} dictionary</h2><p>Plain-language meanings for the words at this table. ${game.id==='antiquity-quest'?'Basic rules; partner differences are labeled.':'Base game only.'}</p></div>${printable?'':`<label class="search dictionary-search"><span class="sr-only">Search ${escape(game.title)} vocabulary</span><input id="dictionary-search" type="search" placeholder="Find a word or its meaning…" autocomplete="off"></label>`}<div id="dictionary-results">${results(game)}</div></section>`;
  }
  function pdfView(game) {
    return `<section class="info-panel pdf-panel"><span class="eyebrow">KEEP THE RULES CLOSE</span><h2>A PDF for your game night.</h2><p>Open the publisher’s rulebook, or make a printable copy of our guide with its dictionary.</p><div class="pdf-choices"><article><span class="feature-icon lilac" aria-hidden="true">↗</span><h3>Official rulebook PDF</h3><p>The publisher’s original rules, in ${escape(entries[game.id].language || 'English')}. Opens in a new tab; use your browser’s download button to keep a copy. Internet access required.</p><a class="button primary official-pdf" href="${entries[game.id].pdf}" target="_blank" rel="noopener noreferrer">Open official PDF <span aria-hidden="true">↗</span></a></article><article><span class="feature-icon sage" aria-hidden="true">↓</span><h3>Little Table guide + dictionary</h3><p>Setup, rules, quick reminder, scoring, and vocabulary in one printable document. Choose “Save as PDF” in your browser’s print window.</p><button class="button" data-action="print-game" data-game-id="${game.id}">Print / Save guide as PDF</button></article></div></section>`;
  }
  function decorate(game, markup, section) {
    const template=document.createElement('template'); template.innerHTML=markup;
    const nav=template.content.querySelector('.game-tabs');
    for(const [key,label] of [['dictionary','Dictionary'],['pdf','PDF & print']]) {
      const link=document.createElement('a');link.href=`#${game.id}/${key}`;link.textContent=label;nav.append(link);
    }
    if(section==='dictionary'||section==='pdf') {
      nav.querySelectorAll('a').forEach(link=>link.removeAttribute('aria-current'));
      nav.querySelector(`a[href="#${game.id}/${section}"]`).setAttribute('aria-current','page');
      template.content.querySelector('#aq-content, #ssp-content, #bk-content, #qc-content, #sk-content').innerHTML=section==='dictionary'?dictionary(game):pdfView(game);
    }
    if(section==='quick')template.content.querySelector('#aq-content, #ssp-content, #bk-content, #qc-content, #sk-content').insertAdjacentHTML('afterbegin',memoryPanel(game));
    if(section==='pdf'&&entries[game.id].englishPdf)template.content.querySelector('.official-pdf').insertAdjacentHTML('afterend',`<a class="button alternative-pdf" href="${entries[game.id].englishPdf}" target="_blank" rel="noopener noreferrer">Open official English PDF ↗</a>`);
    if(section==='pdf')template.content.querySelector('.pdf-panel').insertAdjacentHTML('beforeend',`<div class="memory-pdf-link"><h3>Just need a small reminder?</h3><p>Read the memory card here in the app, or print a pocket copy.</p><div class="memory-actions"><button class="button primary" data-action="view-memory" data-game-id="${game.id}">View memory card</button><button class="button" data-action="print-memory" data-game-id="${game.id}">Print / Save memory card</button></div></div>`);
    const actions=document.createElement('div');actions.className='game-resource-links';
    actions.innerHTML=`<a class="quiet-link" href="${entries[game.id].pdf}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escape(game.title)} official rulebook PDF in a new tab">Official PDF ↗</a><a class="quiet-link" href="#${game.id}/dictionary">What does that mean? · Dictionary →</a>`;
    nav.before(actions);
    actions.insertAdjacentHTML('afterbegin',`<button class="quiet-link text-button" data-action="view-memory" data-game-id="${game.id}">View memory card</button>`);
    return template.innerHTML;
  }
  function print(game) {
    const printGuide=document.createElement('article');printGuide.id='print-guide';
    printGuide.innerHTML=`<header><h1>${escape(game.title)}</h1><p>Little Table · Setup, rules, reference & dictionary</p><p>Independent guide. Publisher rulebook: <a href="${entries[game.id].pdf}">${entries[game.id].pdf}</a></p></header>`;
    const sections=[['setup','Setup'],['rules','Learn to play'],...(game.id==='bunny-kingdom'?[['counting','Counting made easy']]:[]),['quick','Quick reminder'],['scoring','Scoring']];
    for(const [section,label] of sections) {
      const template=document.createElement('template');template.innerHTML=game.view(section,false);
      const content=template.content.querySelector('#aq-content, #ssp-content, #bk-content, #qc-content, #sk-content');
      const block=document.createElement('section');block.className='print-section';block.innerHTML=`<h2>${label}</h2>`;block.append(content);printGuide.append(block);
    }
    const glossary=document.createElement('section');glossary.className='print-section';glossary.innerHTML=dictionary(game,true);printGuide.append(glossary);
    window.gameMedia.paint(printGuide,game.id);printGuide.querySelectorAll('details').forEach(detail=>detail.open=true);
    printGuide.querySelectorAll('button, input, select, progress, .example-choices, [role="status"]').forEach(el=>el.remove());
    printGuide.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
    openPrint(printGuide,`${game.title} - Little Table Guide`);
  }
  function printMemory(game) {
    const printGuide=document.createElement('article');printGuide.id='print-guide';printGuide.className='memory-print';printGuide.innerHTML=memoryCard(game);
    openPrint(printGuide,`${game.title} - Memory Card`);
  }
  function openPrint(printGuide,title) {
    window.gameLanguage?.translate(printGuide);
    document.body.append(printGuide);document.body.classList.add('printing-guide');
    const oldTitle=document.title;document.title=title;
    const cleanup=()=>{printGuide.remove();document.body.classList.remove('printing-guide');document.title=oldTitle;window.removeEventListener('afterprint',cleanup);};
    window.addEventListener('afterprint',cleanup);
    try {window.print();} catch(error) {cleanup();throw error;}
    // Returning from the print dialog also covers browsers that omit afterprint.
    if(!window.matchMedia('print').matches)cleanup();
  }
  function showMemory(game){
    const popup=document.querySelector('#memory-dialog');
    document.querySelector('#memory-viewer-title').textContent=game.title;
    document.querySelector('#memory-viewer-card').innerHTML=memoryCard(game);
    window.gameLanguage?.translate(popup);
    if(!popup.open)popup.showModal();
    popup.scrollTop=0;
  }
  return {entries,results,dictionary,pdfView,decorate,print,printMemory,showMemory};
})();
