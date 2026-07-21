## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Charte graphique

### Typographie
- Titre : Cormorant Garamond, graisse 600, letter-spacing -0.04em
- Corps / texte courant : Montserrat, graisse 500, letter-spacing -0.03em
- Sur fond clair (#FAFAFA) : les titres sont en couleur primaire #00259E
- Sur fond foncé (#00259E) : les titres sont en blanc #FFFFFF
- Sur fond clair (#FAFAFA) : le texte courant (corps) est en #333333

### Échelle typographique
- H1 : Cormorant Garamond 600 — 3.5 à 4.5rem desktop, line-height 1.02-1.05
- H2 : Cormorant Garamond 600 — 2.25 à 3rem, line-height 1.05-1.08
- H3 : Cormorant Garamond 600 — 1.5rem, line-height 1.1-1.15
- Corps : Montserrat 500 — 1rem, line-height 1.6
- Petit texte / légendes : Montserrat 500 — 0.875rem, line-height 1.5
- Eyebrow / surtitres : Montserrat 500, 0.75rem, MAJUSCULES, letter-spacing +0.12em (exception à la règle -0.04/-0.03, réservée à cet usage)
- Jamais de gras lourd (700+) nulle part

### Couleurs
- Primaire : #00259E (bleu foncé) — fond des sections fortes, texte/titres blancs par-dessus, aussi couleur des titres et boutons secondaires sur fond clair
- Secondaire : #ECF7E4 (vert très pâle) — fond des boutons primaires/CTA et navlinks, sur n'importe quel fond de section
- Fond principal : #FAFAFA
- Fond secondaire : #00259E → texte et titres en blanc (#FFFFFF) par-dessus
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
- Bouton primaire / CTA : fond #ECF7E4, texte #00259E, Montserrat 600, 0.875rem, MAJUSCULES, letter-spacing +0.08em, padding 12px 24px, quel que soit le fond
- Bouton secondaire : fond blanc plein #FFFFFF (jamais transparent), bordure 1px #00259E, texte #00259E, quel que soit le fond
- Hover (tous boutons) : fond #00259E, texte blanc, bordure #00259E, transition 0.2-0.3s ease-out

### Navigation
- Navlinks : même style que bouton primaire mais plus petit — 0.75rem, padding 8px 16px
- Hover navlinks : fond #00259E, texte blanc

### Liens texte (dans le corps)
- Couleur #00259E, soulignement fin (underline-offset 3-4px), hover : soulignement plus épais

### Images
- Aucun arrondi, aucune ombre, aucune bordure
- Pas de filtre par défaut, traitement uniforme par projet autorisé mais jamais mixé sur une même page
- Hover sur images cliquables : léger zoom interne (scale 1.03, transition 0.4s)

### Animations et interactions
- Registre sobre et lent : transitions 0.2-0.4s, easing ease-out
- Autorisé : fondu à l'apparition au scroll, hovers définis ci-dessus
- Interdit : rebonds, parallaxe agressive, rotations, confettis, curseurs custom

### Principes d'application
- Ne jamais introduire une couleur hors charte sans accord explicite
- #ECF7E4 réservée aux boutons primaires/CTA et navlinks — jamais en fond de section ou bloc de texte
- Sur fond #FAFAFA : titres en #00259E, corps en #333333
- Sur fond #00259E : titres et corps en blanc, sauf boutons/CTA qui restent #ECF7E4/#00259E, et boutons secondaires qui restent blancs
- Le letter-spacing -0.04 s'applique aux titres, -0.03 au corps de texte

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Roadmap / Évolutions prévues

### Home page en page de vente (pas encore planifié, juste noté)
Idée à explorer plus tard : transformer la home page en véritable
page de vente (landing page orientée conversion/prise de contact),
et déplacer le portfolio complet (tous les projets) vers une page
secondaire dédiée (ex. /projets ou /portfolio).
- La home garderait 0 à 4 projets en aperçu (nombre exact à
  déterminer), ou aucun visuel de projet du tout — à la place, un
  bouton clair du type "Voir mes projets" qui renvoie vers la page
  secondaire.
- Pas encore de brief détaillé sur le contenu de cette nouvelle home
  (accroche, preuve sociale, CTA) — à définir quand on s'y attaquera.
- Aucune urgence, juste une intention à ne pas perdre.
