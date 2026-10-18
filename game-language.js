/* One language at a time. No network translation service or API key is needed. */
window.gameLanguage = (() => {
  'use strict';
  const key='little-table-language', originalText=new WeakMap(), originalAttrs=new WeakMap();
  let language='en';
  try { if(localStorage.getItem(key)==='fr')language='fr'; } catch { /* Session choice still works. */ }
  const isFrench=()=>language==='fr';
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const words={
    'View memory card':'Voir la fiche','Close memory card':'Fermer la fiche','Back to the guide':'Retour au guide','AT THE TABLE':'SOUS LES YEUX PENDANT LA PARTIE',
    'Keep this visual reminder open while you play. No printer needed.':'Gardez ce rappel visuel ouvert pendant la partie. Aucune imprimante nécessaire.',
    'Read the memory card here in the app, or print a pocket copy.':'Consultez la fiche ici dans l’application ou imprimez une copie de poche.',
    'Home':'Accueil','Game library':'Bibliothèque','Saved games':'Favoris','How it works':'Mode d’emploi','Settings':'Préférences',
    'A LITTLE HELP FOR GAME NIGHT':'UN COUP DE POUCE POUR JOUER','YOUR CORNER':'VOTRE COIN','A HELPING HAND':'BESOIN D’UN COUP DE MAIN',
    'Good company.':'En bonne compagnie.','Great game nights.':'De belles soirées jeux.','We’ll take care of the rules.':'On s’occupe des règles.','You bring the snacks.':'Apportez les collations.',
    'Made for time together':'Pour les moments ensemble','Less scrolling, more playing':'Moins défiler, plus jouer','A little help. A lot of play.':'Un petit coup de pouce. Beaucoup de jeu.',
    'Skip to content':'Aller au contenu','Open navigation':'Ouvrir le menu','Main navigation':'Navigation principale','Little Table home':'Accueil Little Table',
    'Set up the table':'Installation','Learn to play':'Règles','Quick reminder':'Aide-mémoire','Scoring':'Décompte','Counting made easy':'Compter facilement',
    'Dictionary':'Lexique','PDF & print':'PDF et impression','PDF & print ↗':'PDF et impression ↗','Dictionary →':'Lexique →',
    '← Back to the library':'← Retour à la bibliothèque','What does that mean? · Dictionary →':'Un mot inconnu ? · Lexique →',
    'Official PDF ↗':'PDF officiel ↗','Official rulebook ↗':'Livret officiel ↗','Official English PDF ↗':'PDF officiel en anglais ↗','Official French PDF ↗':'PDF officiel en français ↗',
    '♡ Save game':'♡ Garder en favori','♥ Saved':'♥ En favori','Reset':'Réinitialiser','People':'Personnes','Playing as':'Mode de jeu','Individuals':'Individuel','Partners':'En équipes',
    'Game length':'Durée','1 round · 20–30 min':'1 manche · 20–30 min','3 rounds · 60–90 min':'3 manches · 60–90 min',
    'Deal reminder: round':'Distribution : manche','Round':'Manche','Bid':'Annonce','Tricks won':'Plis gagnés','Capture bonus':'Bonus de capture',
    'Setup completion':'Progression de l’installation','Search game guides':'Rechercher un jeu','Find your next game…':'Chercher un jeu…','All guides':'Tous les guides','Setup guides':'Installations','Quick reminders':'Aide-mémoires','Filter by guide type':'Filtrer les guides',
    'The game library':'La bibliothèque de jeux','PICK SOMETHING TO PLAY':'CHOISISSEZ VOTRE PROCHAIN JEU',
    'One friendly home for setup guides, visual rules, and quick reminders. Pick a game and pull up a chair.':'Installations, règles visuelles et petits rappels, au même endroit. Choisissez un jeu et installez-vous.',
    'Your game shelf':'Votre étagère de jeux','A small collection, with plenty of room to grow.':'Une petite collection qui ne demande qu’à grandir.','View library':'Voir les jeux','Explore the library':'Explorer les jeux',
    'YOUR GAME NIGHT REGULARS':'VOS HABITUÉS DES SOIRÉES JEUX','A shortcut to the games you come back to, time and time again.':'Retrouvez facilement les jeux auxquels vous revenez souvent.',
    'Your favorites will feel at home here.':'Vos favoris vous attendront ici.','Tap the heart on a game to keep its guide right here for next time.':'Touchez le cœur d’un jeu pour retrouver son guide ici.','Visit the library':'Voir la bibliothèque',
    'A LITTLE HELP WITH THE LINGO':'LES MOTS DU JEU, TOUT SIMPLEMENT','Base game only.':'Jeu de base uniquement.','Basic rules; partner differences are labeled.':'Règles de base; les différences en équipes sont précisées.',
    'No matching terms yet.':'Aucun mot trouvé.','Try a shorter word or search by what the term means.':'Essayez un mot plus court ou une partie de sa définition.','Clear search':'Effacer la recherche',
    'KEEP THE RULES CLOSE':'LES RÈGLES À PORTÉE DE MAIN','A PDF for your game night.':'Un PDF pour votre soirée jeux.',
    'Open the publisher’s rulebook, or make a printable copy of our guide with its dictionary.':'Ouvrez le livret de l’éditeur ou imprimez notre guide avec son lexique.',
    'Official rulebook PDF':'PDF officiel des règles','Little Table guide + dictionary':'Guide Little Table + lexique',
    'Setup, rules, quick reminder, scoring, and vocabulary in one printable document. Choose “Save as PDF” in your browser’s print window.':'Installation, règles, aide-mémoire, décompte et lexique dans un document. Choisissez « Enregistrer au format PDF » dans la fenêtre d’impression.',
    'Open official PDF':'Ouvrir le PDF officiel','Print / Save guide as PDF':'Imprimer / Enregistrer le guide en PDF','Open official English PDF ↗':'Ouvrir le PDF officiel en anglais ↗',
    'Just need a small reminder?':'Un petit rappel suffit ?','Print one pocket-sized visual card instead of the full guide.':'Imprimez une petite fiche visuelle à garder sur la table.',
    'Print / Save memory card':'Imprimer / Enregistrer la fiche','Preview memory card →':'Voir la fiche →','KEEP A LITTLE HELP HANDY':'UN PETIT RAPPEL SOUS LA MAIN',
    'Your game-night memory card':'Votre fiche aide-mémoire','A small visual reminder to keep beside the board. Print just this card, or save it as a PDF.':'Un rappel visuel à garder près du jeu. Imprimez seulement cette fiche ou enregistrez-la en PDF.',
    'Pocket card: 90 × 130 mm. Print at 100% / actual size. Use A6 or larger paper.':'Fiche : 90 × 130 mm. Imprimez à 100 % / taille réelle, sur papier A6 ou plus grand.',
    'LITTLE TABLE · POCKET REMINDER':'LITTLE TABLE · AIDE-MÉMOIRE','Setup, rules, reference & dictionary':'Installation, règles, aide-mémoire et lexique',
    'Recognize the real cards & pieces':'Reconnaître les cartes et les pièces','Publisher artwork · editions and language may vary':'Illustrations de l’éditeur · éditions et langues variables',
    'Match these to your game':'Repérez-les dans votre jeu',
    'Game images © their respective publishers and artists.':'Images © leurs éditeurs et artistes respectifs.',
    'Numbered Antiquity':'Antiquité numérotée','Wild Antiquity':'Antiquité joker','Treasure':'Trésor','Crab duo':'Duo de Crabes','Boat duo':'Duo de Bateaux','Fish duo':'Duo de Poissons','Swimmer + shark':'Nageur + Requin','Shell collector':'Collection de Coquillages','Mermaid':'Sirène',
    'Your Rabbit':'Votre lapin','1-tower City':'Cité à 1 tour','2-tower City':'Cité à 2 tours','3-tower City':'Cité à 3 tours','Forest · Wood':'Forêt · Bois','Sea · Fish':'Mer · Poisson','Field · Carrots':'Champ · Carottes','Golden Carrot points':'Points de Carottes d’or',
    'White · explosion risk':'Blanc · risque d’explosion','Orange · pumpkin':'Orange · citrouille','Green · spider':'Vert · araignée','Blue · crow skull':'Bleu · crâne de corbeau','Red · toadstool':'Rouge · amanite','Yellow · mandrake':'Jaune · mandragore','Purple · ghost’s breath':'Violet · souffle de fantôme','Black · moth':'Noir · tête-de-mort','Ruby':'Rubis','Flask':'Fiole',
    'Pirate':'Pirate','Tigress':'Tigresse','Skull King':'Skull King','Escape':'Fuite','Black trump':'Atout noir','Standard suits':'Couleurs ordinaires',
    'Perfect':'Parfaite','Standard':'Standard','Mixed':'Mixte','Stop':'Stop','Last Chance · tie':'Dernière chance · égalité','Last Chance · loss':'Dernière chance · défaite',
    'Collection examples':'Exemples de collections','Two-player scoring examples':'Exemples de décompte à deux','Fief scoring examples':'Exemples de décompte de fief','Trick winner examples':'Exemples de plis',
    'Duplicate resource':'Ressource répétée','Add a new type':'Ajouter un type','No city':'Sans cité','Trump':'Atout','First Pirate':'Premier Pirate','All three characters':'Les trois personnages','All Escapes':'Toutes Fuites',
    'MAKE ROOM AT THE TABLE':'UNE PLACE À LA TABLE','What should we play next?':'À quoi jouer ensuite ?','Game name':'Nom du jeu','Add to my wishlist':'Ajouter à ma liste','Close':'Fermer',
    'Add a game to your personal wishlist. It stays on this device until its guide is ready to be added.':'Gardez une idée de jeu sur cet appareil en attendant son guide.',
    'That game you’ve been meaning to learn…':'Ce jeu que vous voulez apprendre…','Your little wishlist':'Vos envies de jeux','Ideas saved on this device. These aren’t game guides yet.':'Idées enregistrées sur cet appareil; leurs guides ne sont pas encore disponibles.','WISHLIST IDEA':'IDÉE DE JEU',
    'No guides found just yet.':'Aucun guide trouvé.','No guides have been added in this category yet. Try all guides or add a game to your wishlist.':'Essayez tous les guides ou ajoutez une idée à votre liste.','Add a wishlist idea':'Ajouter une idée de jeu','Clear search & filters':'Effacer la recherche et les filtres',
    'Game removed from saved games.':'Jeu retiré des favoris.','Wishlist idea removed.':'Idée retirée de la liste.','That game already has a spot on your wishlist.':'Ce jeu est déjà dans votre liste.','A little idea saved for a future game night.':'Une idée enregistrée pour une prochaine soirée jeux.',
    'Browser storage is unavailable. Changes will last for this visit.':'Le stockage du navigateur est indisponible. Vos choix seront conservés pendant cette visite.',
    '01 / GET READY':'01 / PRÉPARER','02 / GET PLAYING':'02 / JOUER','03 / GET A REFRESH':'03 / SE RAPPELER',
    'A place for every piece':'Chaque pièce à sa place','Visual setup guides to get everything on the table, right where it belongs.':'Des installations visuelles pour préparer la table sans hésiter.',
    'Rules that just click':'Des règles faciles à saisir','Friendly explanations, one step at a time. No rulebook rabbit holes.':'Des explications simples, une étape à la fois.',
    'A little memory jog':'Un petit rappel','Already know the game? Jump straight to the essentials and get playing.':'Vous connaissez le jeu ? Retrouvez l’essentiel et commencez à jouer.',
    'Come on in. Take a seat.':'Entrez, installez-vous.','Your next game night starts here.':'Votre prochaine soirée jeux commence ici.','A little less figuring it out':'Un peu moins de questions',
    'Welcome to Little Table':'Bienvenue chez Little Table','BIG FUN. LITTLE EXPLANATIONS.':'DU PLAISIR. DES RÈGLES SIMPLES.','Less rulebook.':'Moins de règles à lire.','More':'Plus de','game night.':'temps pour jouer.',
    'A cozy little home for board game rules, easy setups, and “oh right!” reminders.':'Un endroit accueillant pour installer vos jeux, comprendre les règles et retrouver les petits rappels.',
    'From box to table, made simple.':'De la boîte à la table, simplement.','A helping hand, however you like to learn.':'Un coup de main, quelle que soit votre façon d’apprendre.',
    'For the first-timers, the “it’s been a while” players, and everyone at the table.':'Pour les premières parties, les retours après une pause et toute la tablée.',
    'Made for your next game night':'Pour votre prochaine soirée jeux','A LITTLE ORIENTATION':'PRENDRE SES REPÈRES','Make yourself at home.':'Faites comme chez vous.',
    'Little Table is being built to make learning a game feel as welcoming as playing one. Here’s how each game guide helps.':'Little Table vous aide à apprendre un jeu aussi simplement qu’à vous installer pour jouer. Voici comment utiliser les guides.',
    '01 — SET IT UP':'01 — INSTALLER','02 — LEARN TO PLAY':'02 — APPRENDRE','03 — HAVE A REFRESH':'03 — SE RAPPELER',
    'See the whole table.':'Préparez toute la table.','Follow a visual layout and a short checklist to get your game ready. Find out what goes where before the first turn.':'Suivez un schéma et une courte liste pour tout préparer avant le premier tour.',
    'One clear step at a time.':'Une étape claire à la fois.','Start with the goal, then learn what happens on a turn. Simple examples will help the important details click.':'Découvrez le but et le déroulement d’un tour, avec des exemples pour comprendre les détails.',
    'Skip to the “oh, right!”':'Retrouvez les petits rappels.','A compact reminder of setup, turns, and scoring for games you already know. Less reading between you and playing.':'Installation, tours et points : un rappel compact pour les jeux que vous connaissez déjà.',
    'A guide for your kind of game night.':'Un guide pour votre soirée jeux.','Each game offers two ways in, so new players and returning players can find what they need.':'Découvrez les règles ou retrouvez l’essentiel selon votre expérience du jeu.',
    'FIRST TIME HERE?':'PREMIÈRE PARTIE ?','Teach me the game':'Apprendre le jeu','A patient walkthrough from opening the box to finishing your first round.':'Un parcours tranquille de l’ouverture de la boîte à la fin de votre première manche.',
    'PLAYED IT BEFORE?':'VOUS CONNAISSEZ DÉJÀ ?','Just a quick reminder':'Un rappel suffit','All the essentials in one place, with links to the details whenever you need them.':'L’essentiel au même endroit, avec les détails à portée de main.','Take a look around':'Découvrir les jeux',
    'MAKE IT FEEL LIKE YOU':'À VOTRE FAÇON','A few little preferences.':'Quelques préférences.','Get comfortable. Your choices are saved in this browser on this device.':'Installez-vous. Vos choix restent dans ce navigateur, sur cet appareil.',
    'Your reading nook':'Votre coin lecture','Table lighting':'Éclairage','A light and airy look, or something cozier for the evening.':'Un fond clair ou une ambiance plus douce pour le soir.','Daylight':'Jour','Evening':'Soir',
    'A little more readable':'Texte plus grand','Make explanations and navigation text larger.':'Agrandir les explications et le menu.','Keep things still':'Réduire les mouvements','Turn off little movements and transitions.':'Désactiver les petites animations et transitions.',
    'Just your little corner.':'Votre petit espace.','No account needed. Preferences, saved games, and wishlist ideas live in this browser. Clearing browser data will reset them; they don’t sync between devices.':'Aucun compte nécessaire. Préférences, favoris et idées restent dans ce navigateur. Effacer ses données les supprime; ils ne se synchronisent pas entre appareils.',
    'Your wishlist has 100 ideas. Remove one to make room.':'Votre liste contient 100 idées. Retirez-en une pour faire de la place.','Please enter a game name.':'Veuillez saisir le nom d’un jeu.'
  };
  function phrase(text){
    const s=text.trim(); let fr=words[s];
    if(fr===undefined){
      if(/^\d+ games? · ready for your table$/.test(s))fr=s.replace(/ games? · ready for your table/,' jeu(x) · prêts à jouer');
      else if(/^\d+ terms?( found)?$/.test(s))fr=s.replace(/ terms?( found)?/,' terme(s)');
      else if(s==='Little Table · Setup, rules, reference & dictionary')fr='Little Table · Installation, règles, aide-mémoire et lexique';
      else if(s.startsWith('Plain-language meanings for the words at this table.'))fr='Les mots de ce jeu expliqués simplement. Règles de base.';
      else if(s.startsWith('The publisher’s original rules, in '))fr=`Livret original de l’éditeur en ${s.includes('French')?'français':'anglais'}. Ouvre un nouvel onglet; utilisez le bouton de téléchargement du navigateur. Internet requis.`;
      else if(s.startsWith('Quick reminder · game art ©'))fr=s.replace('Quick reminder · game art','Aide-mémoire · illustrations');
      else if(s.startsWith('Independent guide. Publisher rulebook:'))fr=s.replace('Independent guide. Publisher rulebook:','Guide indépendant. Livret de l’éditeur :');
      else if(s.startsWith('Game library / '))fr=s.replace('Game library / ','Bibliothèque / ');
      else if(s.endsWith(' dictionary'))fr=s.replace(/ dictionary$/,' : lexique');
      else if(s.endsWith(' compact memory card'))fr=s.replace(' compact memory card',' : fiche aide-mémoire');
      else if(s.startsWith('Search ')&&s.endsWith(' vocabulary'))fr='Chercher dans le lexique';
      else if(s==='Find a word or its meaning…')fr='Chercher un mot ou sa définition…';
      else if(s.endsWith(' · source & credits ↗'))fr=s.replace('source & credits','source et crédits');
      else if(s.endsWith(' saved for next time.'))fr=s.replace(' saved for next time.',' gardé en favori.');
      else if(/^Open .*official rulebook PDF in a new tab$/.test(s))fr='Ouvrir le livret officiel dans un nouvel onglet';
      else if(/^Save |^Unsave /.test(s))fr=s.replace(/^Unsave /,'Retirer des favoris : ').replace(/^Save /,'Garder en favori : ');
      else if(s.startsWith('Remove ')&&s.endsWith(' from wishlist'))fr='Retirer cette idée de la liste';
      else if(s.startsWith('There isn’t a guide for '))fr='Aucun guide ne correspond à cette recherche. Vous pouvez enregistrer une idée dans votre liste.';
      else if(s.endsWith(' game box'))fr=s.replace(' game box',' : boîte du jeu');
      else if(s.includes(': actual cards and pieces from the publisher'))fr=s.replace(': actual cards and pieces from the publisher',' : cartes et pièces de l’éditeur');
      else if(s==='Actual pot board from the rulebook')fr='Chaudron du livret officiel';
    }
    return fr===undefined?text:text.replace(s,fr);
  }
  function translate(root=document.body){
    const nodes=[];if(root.nodeType===3)nodes.push(root);else{const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);while(walker.nextNode())nodes.push(walker.currentNode);}
    for(const node of nodes){if(node.parentElement?.closest('script,style,svg,textarea,[data-no-translate]'))continue;const old=originalText.get(node);if(isFrench()){if(old&&old.fr===node.nodeValue)continue;const fr=phrase(node.nodeValue);if(fr!==node.nodeValue){originalText.set(node,{en:node.nodeValue,fr});node.nodeValue=fr;}}else if(old&&old.fr===node.nodeValue)node.nodeValue=old.en;}
    const elements=root.nodeType===1?[root,...root.querySelectorAll('*')]:[];
    for(const el of elements)for(const attr of ['aria-label','placeholder','title','alt']){if(!el.hasAttribute(attr)||el.closest('[data-no-translate]'))continue;let saved=originalAttrs.get(el);if(!saved){saved={};originalAttrs.set(el,saved);}const value=el.getAttribute(attr),old=saved[attr];if(isFrench()){if(old?.fr===value)continue;const fr=phrase(value);if(fr!==value){saved[attr]={en:value,fr};el.setAttribute(attr,fr);}}else if(old?.fr===value)el.setAttribute(attr,old.en);}
  }
  const panel=([title,body])=>`<section class="info-panel"><h2>${title}</h2><p>${body}</p></section>`;
  const panels=rows=>rows.map(panel).join('');
  const table=rows=>`<section class="info-panel"><h2>Les points, simplement</h2><div class="score-table-wrap"><table class="score-table"><caption>Jeu de base · valeurs et conditions</caption><thead><tr><th scope="col">Élément</th><th scope="col">Condition</th><th scope="col">Points / résultat</th></tr></thead><tbody>${rows.map(row=>`<tr><th scope="row">${row[0]}</th><td>${row[1]}</td><td>${row[2]}</td></tr>`).join('')}</tbody></table></div></section>`;
  const roots={'antiquity-quest':'aq','sea-salt-paper':'ssp','bunny-kingdom':'bk','les-charlatans-de-belcastel':'qc','skull-king':'sk'};
  const native={};
  function fragment(html){const t=document.createElement('template');t.innerHTML=html;return t.content;}
  function setupValues(game){const dom=fragment(native[game.id].view('setup'));const prefix=roots[game.id];const val=s=>dom.querySelector(s)?.value;const players=Number(val(`#${prefix}-players`)),round=Number(val('#sk-deal-round')||1);return {dom,players,teams:val('#aq-mode')==='teams',rounds:Number(val('#aq-rounds')||1),round,cards:players===8?Math.min(round,8):round};}
  function setup(game,raw){const data=window.gameFrench[game.id],v=setupValues(game),prefix=roots[game.id],steps=data.setup(v);const boxes=raw.querySelectorAll('.check-step input');const count=Array.from(boxes).filter(e=>e.checked).length;
    return `<section class="info-panel"><h2>Préparer la table</h2>${raw.querySelector('.setup-options').outerHTML}<p class="aq-note">${data.setupNote(v)}</p></section><div class="setup-grid"><section class="info-panel checklist"><div class="section-top"><h2>Installation pas à pas</h2><button class="quiet-link text-button" data-action="${prefix}-reset">Réinitialiser</button></div><p id="${prefix}-progress" role="status">${count} sur ${steps.length} étapes prêtes</p><progress id="${prefix}-meter" max="${steps.length}" value="${count}" aria-label="Progression de l’installation"></progress>${steps.map((step,i)=>`<label class="check-step">${boxes[i].outerHTML}<span><b>0${i+1}</b>${step}</span></label>`).join('')}</section><section class="table-visual"><span class="eyebrow">VOTRE TABLE EN UN COUP D’ŒIL</span><div class="fr-piece-row">${data.table.map(k=>window.gameMedia.icon(game.id,k)).join('')}</div><p>${data.tableNote}</p></section></div>${game.id==='les-charlatans-de-belcastel'?panel(['Repères des manches','Jaune en manche 2; violet en manche 3. Avant la manche 6 : un blanc 1 supplémentaire chacun. Manche 9 : révélez les tirages ensemble.']):''}<a class="button primary" href="#${game.id}/rules">Découvrir les règles →</a>`;
  }
  function choices(raw,selector){const el=raw.querySelector(selector);return el?el.outerHTML:'';}
  function widgets(game,raw,section){const id=game.id;
    if(id==='antiquity-quest'&&section==='rules'){
      const type=raw.querySelector('[data-action="aq-example"][aria-pressed="true"]')?.dataset.example||'perfect';
      const descriptions={perfect:'Cinq Antiquités différentes d’une civilisation : 1 000 points de collection. Un W de cette civilisation peut remplacer un numéro manquant.',standard:'Cinq Antiquités d’une civilisation avec un numéro répété : 500 points de collection.',mixed:'Antiquités d’une civilisation + Trésors : 250 points dès 5 cartes. Cette collection seule peut dépasser 5.'};
      const keys={perfect:['1','2','3','4','5'],standard:['1','1','3','4','5'],mixed:['1','2','3','treasure','treasure']};
      return `<section class="info-panel fr-collection"><h2>Essayez les collections</h2>${choices(raw,'.example-choices')}<div class="fr-piece-row">${keys[type].map(k=>window.gameMedia.icon(id,k)).join('')}</div><p aria-live="polite">${descriptions[type]}</p><p>Les points des cartes s’ajoutent séparément aux points de collection.</p></section>`;
    }
    if(id==='sea-salt-paper'&&['rules','scoring'].includes(section)){
      const type=raw.querySelector('[data-outcome][aria-pressed="true"]')?.dataset.outcome||'stop';
      const notes={stop:'Stop : vos 7 points de cartes donnent 7; les 6 points de l’adversaire donnent 6. Aucun bonus couleur.',win:'Dernière chance réussit même à égalité : vos 7 points de cartes + 3 de couleur = 10. L’adversaire avec 7 points de cartes marque seulement sa couleur : 2.',lose:'L’adversaire finit avec 8 points de cartes contre vos 7. Vous marquez seulement votre couleur : 3; l’adversaire marque ses cartes : 8.'};
      return `<section class="info-panel sea-ending"><h2>Stop ou Dernière chance ?</h2><p>Exemple à deux : vos bonus couleur valent 3 et 2. Comparez les points de cartes après les éventuels derniers tours.</p>${choices(raw,'.sea-ending .example-choices')}<p class="fr-example-result" aria-live="polite">${notes[type]}</p></section>`;
    }
    if(id==='bunny-kingdom'&&['rules','scoring','counting'].includes(section)){
      const type=raw.querySelector('[data-action="bk-example"][aria-pressed="true"]')?.dataset.example||'basic';const s=type==='zero'?0:3,r=type==='basic'?2:3;
      let result=`<section class="info-panel bunny-example"><h2>Un fief facile à compter</h2>${choices(raw,'.bunny-example .example-choices')}<div class="fr-piece-row">${window.gameMedia.icon(id,'city2')}${window.gameMedia.icon(id,'wood')}${window.gameMedia.icon(id,'fish')}${window.gameMedia.icon(id,type==='basic'?'fish':'carrots')}</div><div class="fief-equation" aria-live="polite"><b>${s} × ${r} = ${s*r}</b><p>Tours de cités × types de ressources = Carottes d’or à chaque Récolte.</p></div></section>`;
      if(section==='counting'){const joined=raw.querySelector('[data-action="bk-join"]')?.getAttribute('aria-pressed')==='true';result=`<section class="info-panel bunny-connections"><h2>${joined?'Un seul fief relié':'Deux fiefs séparés'}</h2><div class="fr-link-map" role="img" aria-label="${joined?'Un groupe relié':'Deux groupes séparés par une case vide'}"><span>1 tour<br>Bois</span><span class="${joined?'':'unclaimed'}">${joined?'Votre lapin':'Case vide'}</span><span>2 tours<br>Poisson</span></div><button class="button primary" data-action="bk-join" aria-pressed="${joined}">${joined?'Retirer le lapin du milieu':'Prendre la case du milieu'}</button><p class="fr-example-result" aria-live="polite">${joined?'Les tours et ressources se regroupent : (1 + 2) × 2 = 6 points.':'Chaque fief compte séparément : 1 × 1 + 2 × 1 = 3 points.'}</p><p>La connexion change les prochaines Récoltes, sans recalculer les anciennes.</p></section>`+result;}
      return result;
    }
    if(id==='les-charlatans-de-belcastel'&&['rules','scoring'].includes(section)){
      const risk=Number(raw.querySelector('[data-risk][aria-pressed="true"]')?.dataset.risk||6),values={6:[3,2,1],7:[3,2,1,1],8:[3,2,2,1]}[risk];
      return `<section class="info-panel quack-risk"><h2>7 est permis; plus de 7 explose.</h2><p>Deux comptes distincts : la distance dépend de tous les ingrédients, mais seuls les blancs comptent pour l’explosion.</p><div class="example-choices">${[6,7,8].map(n=>`<button class="button ${risk===n?'primary':''}" data-action="qc-risk" data-risk="${n}" aria-pressed="${risk===n}">Total blanc ${n}</button>`).join('')}</div><div class="fr-piece-row">${values.map(n=>window.gameMedia.icon(id,'white'+n)).join('')}${window.gameMedia.icon(id,'orange1')}${window.gameMedia.icon(id,'green2')}</div><div class="fr-example-result" aria-live="polite"><h3>${risk>7?'Explosion : arrêtez de tirer !':'Pas d’explosion : continuer ou arrêter.'}</h3><p>Blancs : ${values.join(' + ')} = ${risk}. Distance avec orange 1 + vert 2 : ${risk+3} cases, avant les autres effets. Le vert 2 doit avoir été acheté; il ne fait pas partie du sac initial.</p></div></section>`;
    }
    if(id==='skull-king'&&section==='rules'){
      const type=raw.querySelector('[data-trick][aria-pressed="true"]')?.dataset.trick||'trump';
      const examples={trump:{cards:[['standard','Jaune 14 · entame'],['standard','Jaune 5'],['trump','Noir 2']],text:'Noir 2 gagne : l’atout bat les autres numéros. Cela suppose que cette personne ne possède pas de jaune.'},pirate:{cards:[['mermaid','Sirène'],['pirate','Premier Pirate'],['pirate','Deuxième Pirate']],text:'Le premier Pirate gagne : il bat la Sirène et les Pirates suivants.'},king:{cards:[['king','Skull King'],['pirate','Pirate'],['mermaid','Sirène']],text:'La Sirène gagne, quel que soit l’ordre de ces trois personnages. Bonus de capture du Skull King seulement si l’annonce est exacte.'},escapes:{cards:[['escape','Première Fuite'],['escape','Deuxième Fuite'],['tigress','Tigresse en Fuite']],text:'La première Fuite gagne, car toutes les cartes sont jouées comme Fuites.'}};const e=examples[type];
      return `<section class="info-panel sk-trick-example"><h2>Qui remporte ce pli ?</h2><p>Les légendes donnent les numéros de cet exemple; les symboles de couleur représentent les cartes numérotées.</p>${choices(raw,'.sk-trick-example .example-choices')}<div class="sk-card-row">${e.cards.map(([k,label])=>`<span class="sk-play-card">${window.gameMedia.icon(id,k)}<small>${label}</small></span>`).join('')}</div><p class="fr-example-result" aria-live="polite">${e.text}</p></section>`;
    }
    if(id==='skull-king'&&section==='scoring'){
      const calc=raw.querySelector('.sk-calculator'),get=id=>Number(calc.querySelector('#'+id).value),v=setupValues(game);const round=get('sk-calc-round'),bid=get('sk-bid'),won=get('sk-won'),bonus=get('sk-bonus'),cards=v.players===8?Math.min(round,8):round,exact=bid===won;const base=bid===0?(exact?10*cards:-10*cards):(exact?20*bid:-10*Math.abs(bid-won)),earned=exact&&won>0?bonus:0,total=base+earned;
      return `<section class="info-panel sk-calculator"><h2>Vérifier un score</h2><p>Score standard · ${v.players} personnes, selon l’installation. Saisissez seulement les bonus de captures admissibles; ce calcul vérifie l’annonce, pas les cartes capturées.</p>${calc.querySelector('.setup-options').outerHTML}<p class="aq-note">Manche ${round} · ${cards} carte(s) par main. Zéro se calcule selon les cartes distribuées.</p><div class="sk-score-result" aria-live="polite"><span class="eyebrow">SCORE DE CETTE MANCHE</span><strong class="sk-score-number">${total>0?'+':''}${total}</strong><p>${bid===0?`Annonce zéro ${exact?'réussie':'manquée'} : ${exact?'+':'−'}10 × ${cards} = ${base}.`:exact?`Annonce exacte : 20 × ${bid} = ${base}.`:`Annonce manquée de ${Math.abs(bid-won)} : −10 × ${Math.abs(bid-won)} = ${base}.`} Bonus retenu : ${earned}.</p></div></section>`;
    }
    return '';
  }
  function counting(){return panels([
    ['Territoire, fief, royaume : quelle différence ?','Un TERRITOIRE est une case, par exemple A3. Un FIEF est un groupe de vos cases reliées; une case isolée est déjà un fief. Votre ROYAUME comprend tous vos territoires, parfois dans plusieurs fiefs séparés. Comptez chaque fief indépendamment.'],
    ['Quatre étapes pour compter','1. Trouvez un groupe relié par les côtés. 2. Additionnez ses tours de cités. 3. Comptez ses types de ressources différents. 4. Multipliez les deux nombres, puis passez au fief suivant.'],
    ['Les connexions','Haut, bas, gauche et droite relient vos cases; les diagonales ne suffisent pas. Une case vide, adverse ou un côté bloqué par la lave coupe la connexion. Une paire de tours célestes peut unir deux groupes éloignés.'],
    ['Terrains et bâtiments','Champ : Carottes. Forêt : Bois. Mer : Poisson. Plaine et montagne : aucune ressource seule. Une cité ajoute des TOURS, pas une ressource. Une ferme ajoute une ressource en gardant celle du terrain. Deux Bois comptent pour un seul type. Un bâtiment maximum par case.'],
    ['Quand compter ?','Après chacune des quatre manches, marquez tous vos fiefs actuels. Sans tours ou sans ressources : 0. Après la quatrième Récolte, ajoutez les parchemins une fois, sans les multiplier par les tours.']]);}
  function frenchView(game,section='setup',saved=false){
    if(!['setup','rules','scoring','quick',...(game.id==='bunny-kingdom'?['counting']:[])].includes(section))section='setup';
    const data=window.gameFrench[game.id],original=native[game.id].view(section,saved),raw=fragment(original),prefix=roots[game.id];
    const content=section==='setup'?setup(game,raw):section==='rules'?panels(data.rules)+widgets(game,raw,section)+(data.books?panels([['Livres de la série 1','Bleu, rouge et jaune agissent pendant la préparation; noir, vert et violet à l’évaluation, même après explosion. Ces effets concernent seulement les livres à un marque-page.'],...data.books]):''):section==='scoring'?table(data.scoring)+widgets(game,raw,section)+panels(data.scoreNotes):section==='counting'?counting()+widgets(game,raw,section):`<div class="quick-grid">${panels(data.quick)}</div>`;
    const source=raw.querySelector('.rule-source');const links=Array.from(source.querySelectorAll('a')).map((a,i)=>`<a href="${a.getAttribute('href')}" target="_blank" rel="noopener noreferrer">${i===0?'Livret officiel (langue du document)':i===1?'Autre référence de l’éditeur':'Source complémentaire'} ↗</a>`).join('');
    const tabs={setup:'Installation',rules:'Règles',...(game.id==='bunny-kingdom'?{counting:'Compter facilement'}:{}),quick:'Aide-mémoire',scoring:'Décompte'};
    return `<a class="quiet-link" href="#library">← Retour à la bibliothèque</a><div class="game-heading"><div><span class="eyebrow">${window.gameMedia.data[game.id].publisher.toUpperCase()}</span><h1>${game.title}</h1><p>${data.intro}</p><div class="game-meta"><span>${data.scope}</span></div></div><button class="button save-game ${saved?'is-saved':''}" data-action="save-game" aria-pressed="${saved}">${saved?'♥ En favori':'♡ Garder en favori'}</button></div><nav class="game-tabs" aria-label="Sections du guide">${Object.entries(tabs).map(([id,label])=>`<a href="#${game.id}/${id}" ${section===id?'aria-current="page"':''}>${label}</a>`).join('')}</nav><div id="${prefix}-content" lang="fr">${content}</div><aside class="rule-source"><strong>Un guide indépendant des règles de base.</strong><p>Explications françaises fondées sur les mêmes règles vérifiées que le guide anglais, le 16 octobre 2026. Les illustrations appartiennent aux éditeurs et artistes. Les documents officiels conservent leur langue d’origine. ${game.id==='les-charlatans-de-belcastel'?'Série de livres 1, côté sans éprouvettes; extensions exclues.':'Les variantes sont indiquées séparément; les extensions sont exclues.'}</p>${links}</aside>`;
  }
  function refreshGame(game){if(!isFrench())return;const section=location.hash.split('/')[1]||'setup',root=document.getElementById(roots[game.id]+'-content');if(!root||['pdf','dictionary','quick'].includes(section))return;const focused=document.activeElement,id=focused?.id,action=focused?.dataset.action,example=focused?.dataset.example,trick=focused?.dataset.trick,risk=focused?.dataset.risk,outcome=focused?.dataset.outcome,check=focused?.getAttribute(`data-${roots[game.id]}-check`);
    const content=fragment(frenchView(game,section)).querySelector('#'+roots[game.id]+'-content');root.replaceChildren(...content.childNodes);translate(root);
    const target=id?document.getElementById(id):check!==null&&check!==undefined?root.querySelector(`[data-${roots[game.id]}-check="${check}"]`):action?root.querySelector(`[data-action="${action}"]${example?`[data-example="${example}"]`:trick?`[data-trick="${trick}"]`:risk?`[data-risk="${risk}"]`:outcome?`[data-outcome="${outcome}"]`:''}`):null;target?.focus({preventScroll:true});
  }
  for(const name of ['antiquityQuest','seaSaltPaper','bunnyKingdom','charlatans','skullKing']){
    const game=window[name];native[game.id]={...game};const entry=window.gameResources.entries[game.id],terms=entry.terms;
    Object.defineProperty(entry,'terms',{get:()=>isFrench()?window.gameFrench[game.id].terms:terms});
    const info={...game,title:({'antiquityQuest':'Antiquity Quest','seaSaltPaper':'Sea Salt & Paper','bunnyKingdom':'Bunny Kingdom','charlatans':'Les Charlatans de Belcastel','skullKing':'Skull King'})[name]};
    game.view=(section,saved)=>isFrench()?frenchView(info,section,saved):native[game.id].view(section,saved);
    game.click=button=>{native[game.id].click(button);refreshGame(info);};game.change=input=>{native[game.id].change(input);refreshGame(info);};
    game.tile=(saved,section)=>{if(!isFrench())return native[game.id].tile(saved,section);return `<article class="game-tile"><a class="game-art" href="#${game.id}/${section||'setup'}" aria-label="Ouvrir ${info.title}"></a><div class="game-tile-copy"><span class="eyebrow">${window.gameMedia.data[game.id].publisher.toUpperCase()}</span><div class="game-title-row"><h2><a href="#${game.id}/${section||'setup'}">${info.title}</a></h2><button class="save-game ${saved?'is-saved':''}" data-action="save-game" aria-pressed="${!!saved}" aria-label="${saved?'Retirer des favoris':'Garder en favori'} : ${info.title}">${saved?'♥':'♡'}</button></div><p>${window.gameFrench[game.id].intro}</p><div class="game-meta"><span>${window.gameFrench[game.id].scope}</span></div><div class="game-tile-links"><a class="button primary" href="#${game.id}/${section||'setup'}">${({quick:'Aide-mémoire',rules:'Règles'})[section]||'Installer le jeu'} ↗</a><a class="quiet-link" href="#${game.id}/quick">Un petit rappel →</a></div></div></article>`;};
  }
  function sync(){document.documentElement.lang=language;const button=document.getElementById('language-toggle');button.textContent=isFrench()?'English':'Français';button.setAttribute('aria-label',isFrench()?'Switch explanations to English':'Passer les explications en français');button.setAttribute('lang',isFrench()?'en':'fr');translate();if(isFrench())document.title=document.title.split(' — ').map(phrase).join(' — ');}
  function toggle(){language=isFrench()?'en':'fr';try{localStorage.setItem(key,language);}catch{}sync();}
  const observer=new MutationObserver(records=>{if(!isFrench())return;for(const r of records){if(r.type==='characterData')translate(r.target);else for(const node of r.addedNodes)if(node.nodeType===1||node.nodeType===3)translate(node);}});
  observer.observe(document.body,{childList:true,subtree:true,characterData:true});
  return {isFrench,translate,toggle,sync};
})();
