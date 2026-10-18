/* Authentic publisher artwork. See assets/SOURCES.md for origins and credits.
   SVG viewBoxes display selected regions of unchanged rulebook-page images. */
window.gameMedia = (() => {
  const data={
    'skull-king':{cover:'skull-cover.jpg',photo:'skull-components.jpg',publisher:'Grandpa Beck’s Games',source:'https://www.grandpabecksgames.com/pages/skull-king',sheets:{characters:['skull-reference-10.png',551,806],escape:['skull-reference-11.png',551,806],hierarchy:['skull-hierarchy.jpg',399,547]},icons:{pirate:['characters',62,164,75,104],tigress:['characters',61,279,77,105],king:['characters',63,391,77,107],mermaid:['characters',64,503,78,108],escape:['escape',73,65,82,111],trump:['hierarchy',63,245,62,63],standard:['hierarchy',46,307,96,66]},legend:[['pirate','Pirate'],['tigress','Tigress'],['king','Skull King'],['mermaid','Mermaid'],['escape','Escape'],['trump','Black trump'],['standard','Standard suits']],memory:['standard','pirate','king','trump']},
    'antiquity-quest':{cover:'antiquity-cover.jpg',photo:'antiquity-components.jpg',publisher:'Grandpa Beck’s Games',source:'https://www.grandpabecksgames.com/products/antiquity-quest',sheets:{cards:['antiquity-reference-5.png',711,983]},icons:{
      '1':['cards',197,236,47,70],'2':['cards',253,236,50,70],'3':['cards',308,236,49,70],'4':['cards',363,236,49,70],'5':['cards',417,236,48,70],wild:['cards',173,400,48,70],treasure:['cards',200,543,48,68],remington:['cards',82,678,62,88],tess:['cards',82,772,62,88]
    },legend:[['1','Numbered Antiquity'],['wild','Wild Antiquity'],['treasure','Treasure'],['remington','Remington'],['tess','Tess']],memory:['1','wild','treasure','treasure']},
    'sea-salt-paper':{cover:'sea-cover.png',photo:'sea-photo-11.jpg',publisher:'Bombyx',source:'https://studiobombyx.com/en/jeu/sea-salt-paper/',sheets:{rules:['sea-reference-1.png',1969,808]},icons:{
      crab:['rules',862,339,52,54],boat:['rules',862,462,52,57],fish:['rules',862,561,52,55],shark:['rules',865,664,103,43],shell:['rules',1420,37,58,57],octopus:['rules',1420,101,58,56],penguin:['rules',1420,166,58,55],sailor:['rules',1420,230,58,55],mermaid:['rules',1298,508,98,133]
    },legend:[['crab','Crab duo'],['boat','Boat duo'],['fish','Fish duo'],['shark','Swimmer + shark'],['shell','Shell collector'],['mermaid','Mermaid']],memory:['boat','crab',null,null]},
    'bunny-kingdom':{cover:'bunny-cover.png',photo:'bunny-components.jpg',publisher:'IELLO',source:'https://iellogames.com/jeux/bunny-kingdom/',sheets:{map:['bunny-reference-2.png',1316,1316],pieces:['bunny-reference-3.png',1316,1316]},icons:{
      wood:['map',85,843,71,71],fish:['map',85,747,71,71],carrots:['map',85,937,71,72],plain:['map',85,1036,71,73],mountain:['map',262,1166,70,72],territory:['map',847,1166,70,72],carrot:['map',1026,522,47,83],rabbit:['pieces',392,127,29,54],city1:['pieces',123,555,111,105],city2:['pieces',280,545,116,117],city3:['pieces',428,525,152,146]
    },legend:[['rabbit','Your Rabbit'],['city1','1-tower City'],['city2','2-tower City'],['city3','3-tower City'],['wood','Forest · Wood'],['fish','Sea · Fish'],['carrots','Field · Carrots'],['carrot','Golden Carrot points']],memory:['territory','city2','carrot','carrot']},
    'les-charlatans-de-belcastel':{cover:'charlatans-cover.jpg',publisher:'Schmidt Spiele',source:'https://www.schmidtspiele.de/d%C3%A9tails/produit/les-charlatans-de-quedlinburg.html',sheets:{rules:['charlatans-reference-1.png',951,1270]},icons:{
      white1:['rules',65,967,54,57],white2:['rules',65,1042,54,57],white3:['rules',443,1128,49,50],orange1:['rules',326,1042,55,57],green1:['rules',118,967,54,57],green2:['rules',118,1042,55,57],blue:['rules',171,967,54,57],red:['rules',224,967,54,57],yellow:['rules',276,967,54,57],purple:['rules',329,967,54,57],black:['rules',380,967,54,57],ruby:['rules',779,817,21,25],flask:['rules',662,684,80,131],bag:['rules',738,612,180,175],event:['rules',818,410,111,123],pot:['rules',74,409,288,253]
    },legend:[['white1','White · explosion risk'],['orange1','Orange · pumpkin'],['green1','Green · spider'],['blue','Blue · crow skull'],['red','Red · toadstool'],['yellow','Yellow · mandrake'],['purple','Purple · ghost’s breath'],['black','Black · moth'],['ruby','Ruby'],['flask','Flask']],memory:['event','bag','ruby','green1']}
  };
  const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function icon(id,key,label=''){
    const game=data[id],crop=game?.icons[key];if(!crop)return '';
    const [sheet,x,y,width,height]=crop,[file,fullWidth,fullHeight]=game.sheets[sheet];
    const cropStyle=id==='skull-king'?` style="clip-path:inset(${100*y/fullHeight}% ${100*(fullWidth-x-width)/fullWidth}% ${100*(fullHeight-y-height)/fullHeight}% ${100*x/fullWidth}%)"`:'';
    return `<svg class="actual-game-icon" viewBox="${x} ${y} ${width} ${height}" ${label?`role="img" aria-label="${escape(label)}"`:'aria-hidden="true"'} preserveAspectRatio="xMidYMid meet"><image href="assets/${file}" width="${fullWidth}" height="${fullHeight}"${cropStyle}/></svg>`;
  }
  function cover(id,className='official-cover'){
    return `<img class="${className}" src="assets/${data[id].cover}" alt="${escape(data[id].publisher)} game box" width="240" height="220" decoding="async">`;
  }
  function gallery(game){const media=data[game.id];return `<details class="real-game-pieces"><summary>Recognize the real cards & pieces</summary><div class="real-pieces-body"><figure>${media.photo?`<img class="component-photo" src="assets/${media.photo}" alt="${escape(game.title)}: actual cards and pieces from the publisher" loading="lazy" width="900" height="600">`:`<div class="component-pot">${icon(game.id,'pot','Actual pot board from the rulebook')}</div>`}<figcaption>Publisher artwork · editions and language may vary</figcaption></figure><div><h3>Match these to your game</h3><div class="actual-symbol-legend">${media.legend.map(([key,label])=>`<figure>${icon(game.id,key)}<figcaption>${escape(label)}</figcaption></figure>`).join('')}</div></div></div><p class="art-credit">Game images © their respective publishers and artists. <a href="${media.source}" target="_blank" rel="noopener noreferrer">${escape(media.publisher)} · source & credits ↗</a></p></details>`;}
  function paint(root,id){
    if(id==='antiquity-quest')root.querySelectorAll('.aq-card:not(.has-game-art)').forEach(card=>{
      const value=card.querySelector('b')?.textContent;const key=card.classList.contains('treasure')?'treasure':value==='W'?'wild':value;
      if(data[id].icons[key]){card.classList.add('has-game-art');card.insertAdjacentHTML('afterbegin',icon(id,key,key==='treasure'?'Treasure card':`Antiquity ${value}`));}
    });
    if(id==='les-charlatans-de-belcastel')root.querySelectorAll('.quack-chip:not(.has-game-art)').forEach(chip=>{
      const value=chip.querySelector('b')?.textContent,color=['white','green','orange'].find(c=>chip.classList.contains(c)),key=color+value;
      if(data[id].icons[key]){chip.classList.add('has-game-art');chip.insertAdjacentHTML('afterbegin',icon(id,key));}
    });
    if(id==='bunny-kingdom')root.querySelectorAll('.map-cell b:not(.has-game-art)').forEach(symbol=>{
      const label=symbol.parentElement.querySelector('small:last-child')?.textContent||'';
      const key=/City.*2/.test(label)?'city2':/City.*1/.test(label)?'city1':/Wood|Forest/.test(label)?'wood':/Sea|Fish/.test(label)?'fish':/Field|Carrots/.test(label)?'carrots':/Plain|plain/.test(label)?'plain':null;
      if(key){symbol.classList.add('has-game-art');symbol.innerHTML=icon(id,key);}
    });
  }
  function enhance(game,markup,detail=false,section='setup'){
    const template=document.createElement('template');template.innerHTML=markup;
    if(!detail){const art=template.content.querySelector('.game-art');art.classList.add('publisher-art');art.innerHTML=cover(game.id);}
    else{
      const heading=template.content.querySelector('.game-heading>div');heading.classList.add('game-heading-copy');heading.insertAdjacentHTML('afterbegin',cover(game.id,'game-box-thumb'));
      const source=template.content.querySelector('.rule-source');source.insertAdjacentHTML('beforebegin',gallery(game));
      if(section==='setup')template.content.querySelector('.real-game-pieces').open=true;
      const symbols=template.content.querySelectorAll('.duo-symbol');symbols.forEach((symbol,i)=>{symbol.innerHTML=icon(game.id,['crab','boat','fish','shark'][i]);});
    }
    paint(template.content,game.id);return template.innerHTML;
  }
  function refreshLive(){const id=location.hash.slice(1).split('/')[0];if(data[id])paint(document.querySelector('main'),id);}
  // Preload source sheets so small card-print jobs have their artwork ready.
  for(const media of Object.values(data))for(const [file] of Object.values(media.sheets)){const img=new Image();img.src='assets/'+file;}
  return {data,icon,cover,gallery,enhance,paint,refreshLive};
})();
