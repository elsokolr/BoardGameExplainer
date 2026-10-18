# Little Table

A cozy, responsive board game explainer app with Antiquity Quest (Grandpa Beck’s Games), Sea Salt & Paper (Bombyx), Bunny Kingdom (IELLO), Skull King, and Les Charlatans de Belcastel (Schmidt Spiele).

## Open the app

Open `index.html` directly in a modern browser. No installation, build step, server, or API key is required. You can also serve this folder using your editor's static preview server.

## Publish on the web

Public app: **[Open Little Table](https://elsokolr.github.io/BoardGameExplainer/)**.

Source: [elsokolr/BoardGameExplainer](https://github.com/elsokolr/BoardGameExplainer). GitHub Pages serves the `main` branch, root folder. Push changes to `main` to publish updates automatically. No build command or API keys are needed; `.nojekyll` is included. See [the publishing steps](DEPLOYMENT.md).

## Included

- Home, game library, saved games, how it works, and settings navigation.
- Responsive layout with a collapsible mobile menu.
- One **Français / English** button in the top bar, showing only the selected language. The choice is saved on this device and applies to all five game guides, setup controls, interactive examples, dictionaries, memory cards, and app-guide printing. Official publisher documents and the words printed on game artwork retain their original language. Player selections and example state survive language switches.
- Searchable library with five games, guide-type filters, and independent saved-game controls.
- Interactive setup checklist with individual/partner mode, player counts, and round length.
- Learn-to-play, quick reminder, collection examples, and scoring views.
- Personal wishlist: add and remove game ideas, with duplicate prevention.
- Daylight/evening appearance, larger text, and reduced-motion preferences.
- Browser-local persistence, keyboard focus indicators, dialog labels, and status announcements.

The wishlist stores ideas only; it does not create guides or send requests to a service. Saved games, preferences, and wishlist ideas persist on this device. Setup checklist progress lasts for the current visit and resets when setup options change.

## Files

- `index.html`: app shell and wishlist dialog.
- `styles.css`: responsive styles, themes, and accessibility preferences.
- `app.js`: navigation, views, wishlist, and preferences.
- `antiquity-quest.js`: game guide, interactive setup, and collection examples.
- `sea-salt-paper.js`: base-game guide, setup checklist, and Stop/Last Chance examples.
- `bunny-kingdom.js`: original base-game guide, player-count setup, and fief-scoring examples.
- `charlatans.js` / `charlatans.css`: Les Charlatans de Belcastel (The Quacks of Quedlinburg), Set 1 ingredient reference, and explosion-counting examples.
- `game-resources.js`: per-game searchable dictionaries, official PDF links, and full-guide print export.
- `game-french.js`: authored French explanations, dictionaries, and pocket reminders for every game.
- `game-language.js` / `game-language.css`: remembered language choice, localized guide rendering, and a single compact language switch. Both languages work offline.
- `skull-king.js` / `skull-king.css`: Skull King core-game setup, interactive trick examples, and standard-scoring calculator.
- `game.css`: responsive library card and game-guide styles.
- `game-media.js` / `game-media.css`: authentic covers, component galleries, card/piece symbols, and reminder artwork.

Game covers, component photos, and selected symbols use actual publisher artwork stored in `assets/`. Simplified layouts remain original schematics. See [artwork sources and credits](assets/SOURCES.md). Optional Google Fonts fall back to system sans-serif when offline. The game guides and artwork work offline; external source links need internet access.

## PDFs and vocabulary

Each game has **Dictionary** and **PDF & print** tabs, plus links on its library card. Dictionary search matches both terms and definitions and stays within the selected game.

Bunny Kingdom also has **Counting made easy**: territory/fief/kingdom definitions, a terrain reference, step-by-step counting, and an interactive example that joins two fiefs. This lesson is included in its printable guide.

Each game's **Quick reminder** starts with a compact visual memory card. **Print / Save memory card** prints only that card at 90 × 130 mm on A6 paper (or larger, at actual size). The card uses labeled symbols, a central rule/formula, four action reminders, and a short exception note. It is a refresher, not a replacement for the full rules. The same print option is available under **PDF & print**. Browser paper and scale settings may override the requested print size.

**View memory card** opens a larger, readable card inside the app, available from every game section, Quick reminder, and PDF & print. It follows your English/French choice and works offline. Keep it open while playing; use the close button, Escape, or **Back to the guide** to return to the same section. On small screens the card scrolls while the close button stays visible. No printing or external viewer is required.

**Open official PDF** opens that game's publisher-hosted rulebook (French and English options for Les Charlatans) in a new tab; the browser PDF viewer can download it. **Print / Save guide as PDF** opens the browser print window with setup, rules (including expanded details), quick reminder, scoring, and the complete dictionary. Select **Save as PDF** to save the app guide. The app guide uses current setup selections and works offline; official PDFs require internet access.

## Rule sources

Skull King was checked October 16, 2026 against the current English rulebook (copyright 2012, 2021, 2024) linked from [Grandpa Beck’s official rules page](https://www.grandpabecksgames.com/pages/skull-king). Includes the 70-card core game, 2–8-player setup, Graybeard’s two-player ghost, suit and character interactions, exact-bid scoring and capture bonuses, a 21-term dictionary, official PDF, printable guide, and pocket memory card. The eight-player hand limit is eight cards, including rounds 9 and 10; zero-bid scores use cards dealt. Advanced cards, Pirate abilities, Rascal scoring, and the separate expansion are excluded.

Antiquity Quest mechanics were checked October 16, 2026 against the [publisher’s rules and FAQ](https://www.grandpabecksgames.com/pages/antiquity-quest) and its [linked rulebook](https://cdn.shopify.com/s/files/1/0565/3230/4053/files/aq_rulebook_optimized.pdf?v=1652992513), copyright 2014, 2021. The guide is an independent explanation, not an official or endorsed publication.

Setup and quick reminder use basic rules. Partner differences and optional advanced rules are labeled in Learn to play. Time estimates follow the rulebook (20–30 minutes for one round; 60–90 for three), rather than the shorter estimate on the product listing. The linked rulebook’s component counts differ from some older listings; the guide avoids relying on edition-specific character-card counts.

Sea Salt & Paper was checked October 16, 2026 against [Bombyx’s English rulebook (EN-3)](https://studiobombyx.com/assets/SSAP_rulebook_EN-3.pdf) and [publisher page](https://studiobombyx.com/en/jeu/sea-salt-paper/). The guide covers the 58-card base game only, with all card-family scoring, duo effects, Mermaid scoring, round-end choices, and player-dependent targets. Extra Salt and Extra Pepper are expansions and are not included. Searching “Sea Salt & Pepper” also finds the base game.

Bunny Kingdom was checked October 16, 2026 against [IELLO’s 2017 English rulebook](https://iellogames.com/wp-content/uploads/2017/09/Bunny-Kingdom-Rules-EN-Light.pdf) and [publisher page](https://iellogames.com/jeux/bunny-kingdom/). It covers the original base game, including the separate two-player Reserve/draft rules, building restrictions, Camp priority, Sky Towers, Lava Flows, four Harvests, and final Parchment scoring. The guide includes a 24-term dictionary, official PDF link, and app-guide printing. Bunny Kingdom Town and the In the Sky / Bunny Express expansions are excluded. The official PDF is approximately 18 MB.

Les Charlatans de Belcastel was checked October 16, 2026 against Schmidt’s [French manual and supplement](https://www.schmidtspiele.de/files/Retail/72dpi_PNG/88194_Les_Charlatans_de_Quedlingburg_Manuel%2BSupplement_FR.pdf), [English rules](https://www.schmidtspiele.de/files/Retail/72dpi_PNG/88220_Quack_rules_english_2024.pdf), and [publisher-authored ingredient almanac hosted by Tabletopia](https://c.tabletopia.com/games/the-quacks-of-quedlinburg/rules/88220-quacksalber-quacks-almanac-gb/en). The English explanations use the standard pot side and Book Set 1 only. Includes all Set 1 ingredient effects and prices, interactive white-total examples (6/7/8), setup for 2–4 players, nine-round milestones, evaluation, 20 bilingual vocabulary entries, French and English PDFs, and a printable pocket card. Expansions, alternate book sets, and test-tube-side rules are excluded.
