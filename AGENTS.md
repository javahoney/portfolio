## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Charte graphique

### Typographie
- Titre : Instrument Serif, graisse 400, letter-spacing -0.04em (H1 : -0.05em, voir Échelle typographique)
  - Instrument Serif n'existe sur Google Fonts qu'en graisse 400 (regular) — pas de 600/semibold, contrairement à l'ancienne police (Cormorant Garamond). Tous les titres sont donc en 400 malgré le `font-weight: 600` historique retiré partout ; ne pas réintroduire un `font-weight` supérieur à 400 sur cette police, ça n'aurait aucun effet réel (poids inexistant, pas de fallback synthétique fiable).
- Corps / texte courant : Montserrat, graisse 500, letter-spacing -0.03em
- Sur fond clair (#FAFAFA) : les titres sont en couleur primaire #00259E
- Sur fond foncé (#00259E) : les titres sont en blanc #FFFFFF
- Sur fond clair (#FAFAFA) : le texte courant (corps) est en #333333
- Montserrat italic disponible en deux graisses pour l'emphase ponctuelle : 300 italic (light italic) et 600 italic (bold italic — jamais 700, voir règle gras lourd ci-dessous). Chargées via Google Fonts (`Montserrat:ital,wght@0,500;0,600;1,300;1,600`). Pas d'usage actuel sur le site (utilisé un temps sur le hero de `pme-techniques.astro`, retiré depuis) — disponible si besoin futur.

### Échelle typographique
- H1 : Instrument Serif 400 — 3.5 à 4.5rem desktop, line-height 1.02-1.05, **letter-spacing -0.05em** (plus serré que les autres titres, exception à la règle -0.04em)
- H2 : Instrument Serif 400 — 2.25 à 3rem, line-height 1.05-1.08, letter-spacing -0.04em
- H3 : Instrument Serif 400 — 1.5rem, line-height 1.1-1.15, letter-spacing -0.04em
- Corps : Montserrat 500 — 1rem, line-height 1.6
- Petit texte / légendes : Montserrat 500 — 0.875rem, line-height 1.5
- Eyebrow / surtitres : Montserrat 500, 0.75rem, MAJUSCULES, letter-spacing +0.12em (exception à la règle -0.04/-0.03, réservée à cet usage)
- Jamais de gras lourd (700+) nulle part

### Couleurs
- Primaire : #00259E (bleu foncé) — fond des sections fortes, texte/titres blancs par-dessus, aussi couleur des titres, fond des boutons/navlinks standards (fond clair) et texte des boutons secondaires
- Secondaire : #ECF7E4 (vert très pâle) — hover des boutons/navlinks sur fond foncé (voir Boutons et CTA), fond des badges/icônes d'accent (ex. option-card__badge, scope-bullet--check) — jamais en fond de section ou bloc de texte
- Fond principal : #FAFAFA
- Fond secondaire : #00259E → texte et titres en blanc (#FFFFFF) par-dessus
  - Les grandes sections en fond #00259E (hero de page, footer) utilisent un dégradé incliné très léger plutôt qu'un aplat : `linear-gradient(135deg, #00259e 0%, #001e7e 100%)` (le second ton est le même bleu ~20% plus foncé déjà utilisé pour le hover des boutons primaires). Usage actuel : le hero de chaque page (`.pt-hero`, `.rt-hero`, `.hp-hero`, `.mb-header`) et `.footer` (composant partagé `Footer.astro`).
- Texte courant (corps) : #333333 sur fond clair #FAFAFA
- Texte secondaire : #B1BCE0 — réservé aux textes ≥1.125rem ou décoratifs (numérotation, index)
- Gris hairline : #e5e5e5 — bordures fines, filets de séparation, séparateurs de listes et cadres (tableaux, cartes)

### Forme
- Radius : 0, aucun arrondi nulle part (boutons, cartes, cadres, images)
- Séparateurs (losange) : petit carré tourné à 45° à la place des tirets/points médians entre éléments d'une ligne. Couleur contextuelle : bleu #00259E sur fond clair, blanc sur fond bleu
- Lignes de séparation horizontales : couleur primaire #00259E, épaisseur 2px

### Espacement et mise en page
- Échelle d'espacement : multiples de 8px (8/16/24/40/64/96/160)
- Entre sections : 96 à 160px
- Largeur max du contenu : 1400px centré, padding 48px desktop / 12px mobile
- Images : formats généreux, gap resserré (16px) entre elles dans une même grille

### Boutons et CTA
Base commune (toutes variantes) : Montserrat 600, 0.875rem, MAJUSCULES, letter-spacing +0.08em, padding 12px 24px, radius 0, transition 0.2-0.3s ease-out.

- **Bouton primaire / CTA — fond clair** (classe `.btn--primary`) : à utiliser quand le bouton repose sur un fond clair (#FAFAFA) ou sans fond de section défini. Fond #00259E, texte blanc. Hover : fond #001E7E (bleu ~20% plus foncé), texte blanc inchangé.
- **Bouton primaire / CTA — fond foncé** (classe `.btn--on-dark`) : à utiliser quand le bouton repose sur une section à fond #00259E (ou proche) — sinon le bouton `.btn--primary` devient invisible (bleu sur bleu). Fond blanc #FFFFFF, texte #00259E. Hover : fond #ECF7E4 (vert clair), texte #00259E inchangé (jamais blanc, pour rester lisible sur fond clair).
  - Cas d'usage actuel : CTA du hero de chaque page à fond foncé (`index.astro`, `pme-techniques.astro`, `redaction-technique.astro`, `marque-blanche.astro`).
  - Même logique pour les boutons icône seule sur fond foncé (icônes réseaux `.footer__social` dans `Footer.astro`, fond bleu partout) : fond blanc/icône #00259E au repos, fond #ECF7E4/icône #00259E au hover — jamais de hover à #00259E, qui se fondrait dans le fond de section.
- Bouton secondaire : fond blanc plein #FFFFFF (jamais transparent), bordure 1px #00259E, texte #00259E, quel que soit le fond. Hover : fond #00259E, texte blanc, bordure #00259E.

### Navigation
- Navlinks : même principe que les boutons primaires, avec les deux mêmes variantes selon le fond — plus petit : 0.75rem, padding 8px 16px.
  - **Fond clair** (classe `.navlink`) : fond #00259E, texte blanc. Hover : fond #001E7E, texte blanc.
  - **Fond foncé** (classe `.navlink--on-dark`) : fond blanc #FFFFFF, texte #00259E. Hover : fond #ECF7E4, texte #00259E.
- **Navbar** (composant `Topbar.astro`, utilisé sur **toutes** les pages, y compris `404.astro` et `projets/[slug].astro`) : nom "Alexandre Lobo" à gauche (petites capitales simulées via `.small-caps-first` + `.small-caps-rest` — la première lettre reste en taille normale, le reste du mot est réduit et mis en majuscules ; `.small-caps-first` n'a volontairement aucune règle CSS), liens de nav + bouton "Écrire" groupés à droite (`.topbar__actions`).
  - Props : `href` (mailto du bouton CTA, obligatoire), `label` (texte du bouton, défaut "Écrire"), `variant` (`"on-dark"` par défaut ou `"on-light"` — pilote `.navlink--on-dark` vs `.navlink`, à choisir selon le fond de la section qui contient la navbar), `links` (tableau `{label, href}[]`, défaut = les 3 liens du site : Sites web → `/pme-techniques`, Rédaction technique → `/redaction-technique`, Projets → `/projets`). Ne pas redéclarer ce tableau dans chaque page : le défaut suffit, `links` ne sert qu'à override.
  - Les liens de nav sont stylés comme des boutons (même classe que le CTA), pas comme du texte simple — décision explicite pour un rendu plus affirmé qu'un lien texte + losanges.
  - Sur mobile (`≤640px`) : `.topbar__navlinks` passe en `display: none`, seuls le nom et le bouton CTA restent visibles — il n'existe pas de menu burger sur ce site ; si une 4e page de contenu s'ajoute un jour au point de rendre ce choix insuffisant, prévoir un menu mobile plutôt que d'empiler plus de boutons.

### Liens texte (dans le corps)
- Couleur #00259E, soulignement fin (underline-offset 3-4px), hover : soulignement plus épais

### Badges (classe globale `.badge`, définie dans `Layout.astro`)
Remplace l'eyebrow pour les libellés courts et isolés (mot-clé unique, label de section) — pas pour les lignes de type breadcrumb qui mélangent plusieurs segments de texte avec des losanges (celles-ci restent en `.eyebrow` classique). Pas de trait/ligne décoratif devant le badge.
- Forme : rectangle légèrement arrondi, border-radius 6px, padding 3px 8px
- Texte : Montserrat 600 (jamais 700, voir règle gras lourd), 0.875rem, MAJUSCULES, letter-spacing +0.04em, couleur blanche, centré
  - `font-variant-caps: all-small-caps` appliqué en plus, mais **sans effet visuel réel** : Montserrat n'a pas de glyphes small-caps (feature OpenType `smcp`), et le texte est déjà entièrement en majuscules (text-transform: uppercase) donc il n'y a pas de bas-de-casse à convertir. De vraies small-caps ne sont pas réalisables avec cette police — seule la mise en majuscules classique s'applique.
- Fond : bleu primaire plein (#00259E), fixe — badge pensé pour un fond clair (#FAFAFA). Pas encore de variante fond foncé à ce jour (aucun badge actuel n'est posé sur une section bleue) — au besoin, créer `.badge--on-dark` sur le modèle de l'ancienne version (fond #ECF7E4, texte #1A2B6B), par cohérence avec `.btn--on-dark` / `.navlink--on-dark`.
- Reflet : un halo blanc (`::before`, dégradé transparent → blanc 90% → transparent, `mix-blend-mode: screen`) glisse par-dessus de gauche à droite via `left`, contenu par `overflow: hidden` sur le badge. Passage (~1.5s) puis pause (~3.5s) hors du cadre, boucle infinie (cycle total 5s). Le halo est garanti invisible au repos car sa position de pause (`left: 125%`) le place entièrement hors des bornes du badge — contrairement à l'ancienne implémentation en `background-position`/`background-size` qui laissait un trait blanc résiduel visible au repos.
- Usage actuel : `CompactLabel.astro` (eyebrows de section, ex. "Solution", "Offres", "Travaux"), la liste de types de contenu de `redaction-technique.astro` (`.rt-badge-row`), et le petit bouton "Voir" de la citation scientifique sur la home (`.hp-citation__badge`, un `<a class="badge">` cliquable — le badge peut être un lien, pas seulement un span statique).
- **Exception fond vert** : `.rt-badge-row--green .badge` (section "Ce que je rédige" de `redaction-technique.astro`) override le fond en #ECF7E4 / texte #00259E, scopée à cette page uniquement via une classe locale — décision explicite ponctuelle, ne pas généraliser sans le demander (voir "Ne jamais introduire une couleur hors charte" ; ici #ECF7E4 reste dans la charte, seul son usage en fond de badge est une exception documentée).

### Icônes SVG
Pas d'animation/reflet sur les icônes — testé, abandonné après plusieurs allers-retours infructueux (voir historique). En revanche, traitement couleur en dégradé (statique) via masque CSS, pas de flat color :
- Icônes fournies en fichiers dans `src/icons/` (fond de badge arrondi + glyphe blanc intégrés au dessin, `fill="white"` sur tous les paths). Importées via `import xUrl from "../icons/x-icon.svg?url"`, jamais inlinées en JSX/markup brut.
- Appliquées en `mask-image` (+ `-webkit-mask-image`) sur un élément avec `background: <dégradé>` — classes utilitaires globales `.icon-mask` (`mask-size/position/repeat`) + `.icon-mask--on-dark` / `.icon-mask--on-light` (le dégradé lui-même), définies dans `Layout.astro`.
  - **Piège CSS important** : `mask-image: url(var(--x))` est invalide (un `var()` ne peut pas être substitué à l'intérieur d'un `url()` non quoté — la tokenisation de `url()` a lieu avant la substitution). Il faut que la custom property contienne déjà `url(...)` en entier : construire la valeur en JS (`` `url("${iconUrl}")` ``) et la passer telle quelle via `define:vars`, puis référencer simplement `mask-image: var(--x)` en CSS.
- Dégradé sur fond sombre (`.icon-mask--on-dark`) : `linear-gradient(90deg, #ffffff 0%, #ecf7e4 10%, #ecf7e4 90%, #ffffff 100%)`.
- Dégradé sur fond clair (`.icon-mask--on-light`) : `linear-gradient(90deg, #4f69b8 0%, #00259e 100%)`.
- Usage actuel : icônes du H1 du hero de `pme-techniques.astro` (web + atome, atome incliné à 4°), et les 6 icônes des cards problème/solution (`concurrence`, `roi`, `retard`, `structure`, `parcours`, `univers`).
- **Règle importante** : ne jamais modifier/retirer des paths d'une icône fournie par l'utilisateur, même si une forme semble être un artefact indésirable (ex. un fond de badge intégré au dessin) — c'est un contenu fourni, pas du code à corriger. Vérifier visuellement et demander confirmation avant tout changement de ce type.

### Cards et hover (cards cliquables)
Pattern répété sur toutes les grilles de cards cliquables ou à mise en avant parallèle (`.pt-card`, `.rt-card`, `.hp-door`) : un reflet diagonal, subtil et rapide traverse la card au survol.
- `position: relative; overflow: hidden` sur la card, un `::before` en `position: absolute` (bande de 40% de largeur, `left: -60%` au repos) avec `background: linear-gradient(135deg, rgba(0,37,158,0) 0%, rgba(0,37,158,0.025) 50%, rgba(0,37,158,0) 100%)` — l'angle 135deg donne la diagonale, l'opacité très faible (0.025) le côté subtil (fond de card blanc sur fond de page à peine plus gris, donc un reflet trop marqué jure).
- Au hover, `animation: <nom>-shine 0.35s ease-out` anime `left` de `-60%` à `120%` — un seul passage rapide, pas de boucle (contrairement au reflet du badge qui boucle en continu).
- Chaque page qui l'utilise redéfinit son propre `@keyframes` (`card-shine`, `rt-card-shine`, `hp-door-shine`) plutôt que de partager une seule keyframe globale — ce n'est pas un oubli : les noms sont scopés par page comme le reste du CSS Astro, dupliquer 8 lignes de keyframes est moins risqué que sortir une seule animation globale que toutes les pages devraient importer.
- Sur les cards qui sont aussi des liens (`.pt-offer--link`, `.hp-door`), le hover ajoute en plus un soulignement du titre et un `border-color: #00259e` — le reflet seul ne suffit pas à signaler la cliquabilité.
- Ne pas ajouter ce hover à des cards non cliquables (ex. `.option-card` de `marque-blanche.astro`, `.rt-pricing-item`) : un effet de survol sur un élément non actionnable induit en erreur sur l'affordance.

### Images
- Aucun arrondi, aucune ombre, aucune bordure
- Pas de filtre par défaut, traitement uniforme par projet autorisé mais jamais mixé sur une même page
- Hover sur images cliquables : léger zoom interne (scale 1.03, transition 0.4s)
- **Toute image de contenu (photos de projets, portraits) doit vivre dans `src/assets/` et être affichée via `<Image />` de `astro:assets`, jamais dans `public/` en `<img src="/images/...">`.** Seule exception : `photo-profil.png` reste dans `public/images/` car `Layout.astro` en a besoin comme URL brute pour la balise `og:image` par défaut (voir section SEO) — la migrer casserait ce fallback sans bénéfice réel vu sa taille déjà modeste.
  - Les images de projets (`src/content/projects/*.md`) utilisent le schema `image()` de la collection (`content.config.ts`) : `mainImage`/`galleryImages` sont des chemins relatifs au fichier markdown (ex. `../../assets/projects/gemilio-main.webp`), résolus en `ImageMetadata` par Astro — pas des strings brutes. Toute page qui les affiche importe `{ Image } from "astro:assets"` et passe l'objet directement à `<Image src={... } alt={...} width={...} />` (un seul `width` suffit, Astro déduit la hauteur depuis les proportions de la source).
  - `<Image>` compresse et redimensionne automatiquement au build (vérifié : deux images à 1,2 Mo ramenées à 113–149 Ko sans étape manuelle) — c'est le gain principal de cette convention, à ne pas contourner en revenant à un `<img>` brut par facilité.
  - `loading="lazy"` sur toutes les images hors-écran (grilles, galeries) ; `loading="eager"` uniquement sur l'image principale d'une page projet (probable LCP).
  - Pour l'URL d'une image de projet utilisée hors `<Image>` (ex. `og:image`, structured data), utiliser `.src` sur l'objet (`project.mainImage.src`), jamais l'objet entier tel quel.

### Animations et interactions
- Registre sobre et lent : transitions 0.2-0.4s, easing ease-out
- Autorisé : fondu à l'apparition au scroll, hovers définis ci-dessus
- Interdit : rebonds, parallaxe agressive, rotations, confettis, curseurs custom

### Principes d'application
- Ne jamais introduire une couleur hors charte sans accord explicite
- #ECF7E4 réservée au hover des boutons/navlinks sur fond foncé et aux badges/icônes d'accent — jamais en fond de section ou bloc de texte
- Sur fond #FAFAFA : titres en #00259E, corps en #333333, boutons/navlinks en variante fond clair (`.btn--primary` / `.navlink`)
- Sur fond #00259E : titres et corps en blanc, boutons/CTA en variante fond foncé (`.btn--on-dark`, blanc/#00259E), et boutons secondaires qui restent blancs
- Le letter-spacing -0.04 s'applique aux titres, -0.03 au corps de texte

## Accessibilité : hiérarchie des titres

Chaque section (`<section>`) doit contenir exactement un titre de niveau h2 dans le flux du document, même quand le design ne prévoit pas de gros titre serif visible pour cette section. Beaucoup de sections n'affichent qu'un `CompactLabel` (un badge, pas un titre sémantique) suivi directement de contenu en h3 (cards, questions FAQ) — sans h2 réel entre les deux, l'outline de la page saute un niveau, ce qui pénalise le SEO et les lecteurs d'écran.
- **Pattern retenu** : quand le design ne veut pas de titre visible, ajouter un h2 invisible (classe globale `.sr-only`, définie dans `Layout.astro` — clip-rect classique, retire l'élément du flux visuel sans le retirer du DOM/de l'outline).
- `CompactLabel.astro` accepte une prop `srHeading` (boolean, défaut `false`) : si `true`, il rend en plus `<h2 class="sr-only">{text}</h2>` juste après le badge, avec le même texte. **Toujours utiliser cette prop plutôt que d'écrire le h2 à la main** quand le texte du h2 est identique à celui du badge (cas le plus courant : `<CompactLabel text="Questions" srHeading />`) — n'écrire un `<h2 class="sr-only">` à la main que si son texte diffère de celui du badge (ex. section "Deux portes" de la home, qui n'a pas de `CompactLabel` du tout).
- Quand une section a déjà un titre visible mais que celui-ci est un `<p>` stylé pour ressembler à un h2 (ex. anciens `.pt-contact__heading`, `.hp-contact__heading`, `.mb-cta__heading`) : c'est un bug, pas un choix — remplacer le tag par `<h2>` (le style ne change pas, seule la sémantique est corrigée).
- Ne jamais utiliser `.sr-only` pour cacher un titre qui devrait être visible pour des raisons de contenu — c'est un correctif d'accessibilité pour du texte déjà considéré "assez dit" visuellement par le badge, pas un moyen de bourrer des mots-clés invisibles.

## SEO

`Layout.astro` centralise le head de toutes les pages — les ajustements SEO doivent passer par ses props, pas être dupliqués page par page.
- **Props disponibles** : `title` (obligatoire), `description`, `image` (chemin absolu depuis la racine du site, ex. `/images/photo-profil.png`, ou `.src` d'un objet `ImageMetadata` pour une image de projet (ex. `project.mainImage.src`) — **jamais** une URL déjà absolue ni l'objet `ImageMetadata` entier ; `Layout.astro` résout lui-même la string en URL complète via `new URL(image, Astro.site)` pour `og:image`/`twitter:image`), `structuredData` (objet ou JSON déjà sérialisé, injecté en `<script type="application/ld+json">`), `noindex` (boolean, défaut `false`).
- `image` a un défaut site-wide (`/images/photo-profil.png`) si la page n'en fournit pas — donc `og:image`/`twitter:image` sont toujours présents, jamais vides. Override `image` sur les pages où un autre visuel est plus pertinent que le portrait (ex. `projets.astro` utilise l'image du premier projet du portfolio).
- Balises générées automatiquement pour chaque page : `title`, `meta description` (si fournie), `canonical` (sauf si `noindex`), `og:type`/`og:site_name`/`og:url`/`og:title`/`og:description`/`og:image`, `twitter:card` (`summary_large_image`)/`twitter:title`/`twitter:description`/`twitter:image`. Ne pas les recopier manuellement dans une page.
- `noindex` ajoute `<meta name="robots" content="noindex, nofollow">` et supprime le `<link rel="canonical">` (pas de canonical pertinent pour une page qui ne doit pas être indexée). Utilisé sur `404.astro` uniquement à ce jour.
- `structuredData` : chaque page de service a un schema Schema.org adapté — `Person` (home), `Service` (`pme-techniques.astro`, `redaction-technique.astro`, `marque-blanche.astro`), `CollectionPage`/`ItemList` (`projets.astro`), `CreativeWork` (`projets/[slug].astro`). Toute nouvelle page "service" ou "offre" doit suivre ce même principe plutôt que de laisser `structuredData` vide.
- **Longueurs cibles** (pour éviter la troncature dans les résultats de recherche) : title ≤ ~60 caractères, description ≤ ~155 caractères. Vérifier `[...str].length` (pas `str.length`, à cause des caractères accentués) avant de valider un nouveau title/description.
- Sitemap (`@astrojs/sitemap`, configuré dans `astro.config.mjs` avec `site: 'https://alexandre-lobo.com'`) et `robots.txt` sont déjà en place et n'ont pas besoin d'intervention — le sitemap exclut déjà `/404` automatiquement, pas de filtre à ajouter.
- Chaque image de contenu (galeries projets, photo de profil) a un `alt` descriptif — à maintenir sur toute nouvelle image ajoutée.

## Opportunités de refactor (état des lieux)

- **Fait** : `Topbar.astro` extrait en composant partagé (nom + navlinks + CTA) réutilisé sur toutes les pages avec des valeurs par défaut centralisées (`DEFAULT_LINKS`) — c'était la seule vraie duplication identique à 100 % avant extraction.
- **Fait** : `CompactLabel.astro` porte maintenant la logique du h2 invisible (`srHeading`) au lieu que chaque page répète `<CompactLabel /><h2 class="sr-only">` avec le même texte.
- **Envisagé puis écarté — pas de composant `<Hero>` ou `<Card>` partagé** : les 4 héros de page (`.pt-hero`, `.rt-hero`, `.hp-hero`, `.mb-header`) et les grilles de cards (`.pt-card`, `.rt-card`, `.hp-door`, `.option-card`, `.rt-pricing-item`) se ressemblent visuellement mais diffèrent chacun sur un point structurel (présence d'un sous-titre, d'un CTA, d'un eyebrow, d'un hover, d'une icône…). Les factoriser demanderait soit un composant à props nombreuses et conditionnelles, soit une classe globale trop générique pour rester lisible — les deux vont à l'encontre du principe du projet de préférer un peu de répétition à une abstraction prématurée. À reconsidérer seulement si une 5e ou 6e page reprend exactement la même forme sans variation.
- **Dette mineure connue, non bloquante** : plusieurs pages (`pme-techniques.astro`, `redaction-technique.astro`, `index.astro`, `marque-blanche.astro`) redéfinissent des règles de titre/corps quasi identiques sous des préfixes différents (`.pt-h2`, `.rt-h2`, `.hp-h2`, `.mb-header__title`, `.pt-body`, `.rt-body`, `.hp-body`…) — dupliquées à l'identique par page plutôt que globalisées, pour la même raison que ci-dessus (chaque page doit pouvoir dévier sans toucher aux autres). Si une règle typographique de base change (ex. `line-height` du corps de texte), il faut la répercuter manuellement dans chaque fichier concerné — pas de mécanisme de synchronisation automatique aujourd'hui.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Notes de contenu

- La home (`src/pages/index.astro`) présente un aperçu de 4 projets choisis à la main (Gemilio, Yann Mokoko, Le Pari's, Quiet Details) — pas les 4 premiers par `order`. Le portfolio complet reste sur `/projets`.
