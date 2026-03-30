# INSPIRE STUDIO — Direction Artistique

> Document de reference pour toutes les nouvelles pages du site.
> A respecter systematiquement pour garantir la coherence visuelle.

---

## 1. IDENTITE DE MARQUE

**Positionnement** : Location premium de salles a Paris (Oberkampf 11e + Alesia 14e) pour la danse, le yoga, le bien-etre et les pratiques artistiques. L'univers est feminin-elegant, lumineux, chaleureux — jamais froid ni corporate.

**Ton editorial** : Bienveillant, inspire, poetique mais sans exces. Phrases courtes et elegantes. On tutoie la beaute du mouvement, on vouvoie le client.

**Mot-cle recurrent** : *"inspirer"* — les espaces inspirent, les pratiques inspirent, la lumiere inspire.

---

## 2. PALETTE DE COULEURS

| Token CSS | Valeur | Usage |
|---|---|---|
| `--color-accent` | `#e573c0` (rose) | Couleur signature — CTA, accents, titres italiques, badges |
| `--color-accent-light` | `#f0a3d8` | Hover links footer, etats survoles legers |
| `--color-accent-dark` | `#c95aa3` | Hover boutons primaires |
| `--color-accent-bg` | `rgba(229,115,192,0.08)` | Fonds subtils de badges, icones features |
| `--color-bg` | `#faf9f7` (creme chaud) | Fond principal du body |
| `--color-bg-alt` | `#f4f2ef` | Fond de sections alternees |
| `--color-white` | `#ffffff` | Cards, sections contrastees |
| `--color-text` | `#1a1a1a` | Texte principal |
| `--color-text-secondary` | `#6b6b6b` | Sous-titres, descriptions |
| `--color-text-light` | `#999999` | Labels, eyebrows, meta-info |
| `--color-border` | `rgba(0,0,0,0.08)` | Bordures tres subtiles |

**Regle importante** : Le rose `#e573c0` est la seule couleur vive. Ne JAMAIS introduire de bleu, vert, violet ou autre couleur vive. Le site tire son elegance de la monochromie rose + neutres chauds.

> **Note** : Certaines pages utilisent `#e83e8c` en inline style (un rose plus vif/fuchsia). Privilegier `var(--color-accent)` (#e573c0) pour rester coherent, mais le #e83e8c est accepte dans les contextes a fort impact (hero, boutons CTA sur fond sombre).

---

## 3. TYPOGRAPHIE

### Polices
- **Titres** : `Playfair Display` (serif, elegant, editorial)
- **Corps** : `DM Sans` (sans-serif, moderne, lisible)

### Hierarchie typographique

| Element | Font | Taille | Poids | Style |
|---|---|---|---|---|
| Hero titre (h1) | Playfair Display | `clamp(48px, 10vw, 100px)` | 500 | Mot accent en *italique rose* |
| Section titre (h2) | Playfair Display | `clamp(32px, 5vw, 48px)` | 500 | Mot-cle en `<em>` rose italique |
| Card titre (h3) | Playfair Display | 20-28px | 600 | Normal |
| Eyebrow / label | DM Sans | 11-12px | 500-700 | UPPERCASE, letter-spacing 2-4px |
| Corps | DM Sans | 14-17px | 400 | line-height 1.7 |
| Bouton | DM Sans | 13px | 600 | UPPERCASE, letter-spacing 1px |

### Pattern titre signature
Toujours ecrire les gros titres en 2 niveaux :
1. **Eyebrow** : petit texte uppercase en rose `--color-accent` (ex: "Notre philosophie")
2. **Titre** : avec un mot en *italique rose* via `<em>` (ex: "Pourquoi *Inspire Studio* ?")

---

## 4. COMPOSANTS RECURRENTS

### Header (fixe, identique sur toutes les pages)
- Position fixed, hauteur 72px (60px au scroll)
- Fond semi-transparent + backdrop-filter blur(20px)
- Logo : "INSPIRE" noir + "STUDIO" rose
- Nav desktop > 1024px, burger mobile < 1024px
- CTA "Reserver" = pill rose arrondi 100px

### Boutons
- `.btn-primary` : fond rose, texte blanc, border-radius 100px (pill), ombre rose
- `.btn-outline` : bordure noire, fond transparent, hover inverse (fond noir, texte blanc)
- Toujours UPPERCASE, 13px, letter-spacing 1px
- Hover = translateY(-2px) pour l'effet flottant

### Cards
- Fond blanc `--color-white`
- Bordure 1px `--color-border`
- Border-radius `--radius-lg` (20px)
- Hover : translateY(-4 a -6px) + box-shadow elargie + bordure rosee subtile
- Padding interne genereux (32-40px)

### Section pattern
```
.section {
    padding: 100px 0;       /* mobile */
    padding: 140px 0;       /* desktop (768px+) */
}
```
- Alternance de fonds : `--color-bg` / `--color-white` / `--color-bg-alt`
- Chaque section commence par un `.section-header` centre (eyebrow + titre + sous-titre)

### Footer (identique sur toutes les pages)
- Fond sombre `--color-text` (#1a1a1a)
- Grid 3 colonnes : brand + nav + contact
- Icones SVG stroke pour adresse/email/tel/horaires
- Copyright en bas

---

## 5. ANIMATIONS & MICRO-INTERACTIONS

### Scroll Reveal
- Classe `.reveal` sur tous les elements a animer
- Apparition : opacity 0 -> 1, translateY(40px -> 0)
- Timing : 0.8s cubic-bezier(0.22, 1, 0.36, 1)
- Stagger enfants : +80-100ms par item via transition-delay
- IntersectionObserver avec threshold 0.1

### Transitions globales
```css
--transition-base:   0.3s cubic-bezier(0.4, 0, 0.2, 1);     /* interactions standard */
--transition-smooth:  0.6s cubic-bezier(0.22, 1, 0.36, 1);    /* ouvertures, reveals */
--transition-spring:  0.5s cubic-bezier(0.34, 1.56, 0.64, 1); /* rebonds subtils */
```

### Hover cards
Toujours un leger souleve + ombre elargie :
```css
transform: translateY(-4px);
box-shadow: 0 12px 40px var(--color-shadow);
border-color: rgba(229, 115, 192, 0.15);
```

### Liens avec fleche
Pattern `partner-link` : gap qui s'elargit au hover (6px -> 12px), fleche translateX(4px).

---

## 6. GRILLES & LAYOUT

### Container
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 24px;
```

### Breakpoints
| Point | Cible |
|---|---|
| < 600px | Mobile portrait |
| 600px | Grids 2 colonnes |
| 768px | Tablette / sections padding 140px |
| 900px | Seuil pour sidebars |
| 960px | Grids 3 colonnes |
| 1024px | Nav desktop visible |
| 1100px | Cards partenaires 3 colonnes |

### Border-radius
```css
--radius-sm:  8px;    /* inputs, petits elements */
--radius-md:  12px;   /* galeries, sliders */
--radius-lg:  20px;   /* cards principales */
--radius-xl:  28px;   /* gros containers */
```

---

## 7. IMAGES & MEDIAS

- Photos de salles : luminosite elevee, tons chauds naturels, mise en valeur de l'espace vide et de la lumiere
- Object-fit: cover pour les vignettes, contain pour les sliders plein ecran
- Hover sur galeries : scale(1.05) en 0.5s
- Sliders : boutons ronds blancs avec ombre, fleches Unicode, compteur en pill
- Pas d'icones externes (pas de FontAwesome) — tout en SVG inline stroke

---

## 8. STRUCTURE HTML COMMUNE

Chaque page doit suivre cette structure :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- meta, fonts Google (DM Sans + Playfair Display), styles.css -->
</head>
<body>
    <header class="site-header" id="site-header">...</header>
    <main>
        <!-- Hero propre a la page -->
        <!-- Sections de contenu -->
    </main>
    <footer class="site-footer" id="footer">...</footer>
    <script src="scripts.js"></script>
</body>
</html>
```

### Navigation (a mettre a jour sur toutes les pages) :
- Accueil → `index.html`
- Nos salles → `salles.html`
- Inspire Studio → (page a creer)
- Tarifs → `tarifs.html`
- Contact → `index.html#footer`
- Reserver → (CTA rose, lien a definir)

---

## 9. REGLES CSS A RESPECTER

1. **Privilegier les CSS custom properties** (`var(--color-accent)`) plutot que les valeurs en dur
2. **Eviter les styles inline** autant que possible — les pages salles.html et salle1.html en abusent, les prochaines pages doivent aller dans `styles.css`
3. **Mobile-first** : ecrire les styles mobiles d'abord, enrichir via media queries min-width
4. **Pas de frameworks** : CSS pur, pas de Bootstrap, Tailwind, etc.
5. **Pas de librairies JS** : vanilla JS uniquement
6. **SVG inline** pour toutes les icones, stroke style, pas de fill

---

## 10. ESPRIT GENERAL

> Le site Inspire Studio doit donner l'impression d'une galerie d'art
> qui accueille des danseurs. Chaque page est une respiration :
> beaucoup d'espace blanc, des touches de rose comme un accent de
> couleur dans un tableau, une typographie serif elegante qui contraste
> avec la modernite du sans-serif, et des animations douces qui
> accompagnent sans distraire.

**Mots-cles visuels** : luminosite, espace, douceur, fluidite, elegance parisienne, chaleur humaine.

**A eviter** : surcharge visuelle, couleurs froides, effets agressifs, textures lourdes, typographies fantaisie.
