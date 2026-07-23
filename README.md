# Julia Dannerth — Master Floral Portfolio

A static, GitHub Pages–ready portfolio containing HTML, CSS, JavaScript, optimized WebP images, and résumé artwork.

## Publish with GitHub Pages

1. Create a new public GitHub repository, such as `floral-portfolio`.
2. Upload **the contents of this folder** to the repository root. `index.html` must be at the top level.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide the live website URL after deployment.

## Updating the live website

Upload the revised files to the same repository and commit the changes. GitHub Pages will rebuild the same URL, so your QR code will not need to change.

## Project structure

- `index.html` — portfolio content and study records
- `assets/css/styles.css` — all visual styling
- `assets/js/site.js` — navigation, active-study highlighting, and image viewer
- `assets/images/studies/` — optimized portfolio photographs
- `assets/images/resume/` — résumé image

## Adding a new study

1. Add an optimized image to `assets/images/studies/`.
2. Duplicate a study `<article>` in `index.html`.
3. Update its ID, `data-study` number, image path, alternative text, study label, and flower list.
4. The desktop and mobile study navigation lists are generated automatically from the `data-study` elements.

## Current contact

- Email: jdannerth@gmail.com
- Instagram: intentionally omitted until available


## Editorial gallery update

- Selected Work is collapsed by default and expands only when clicked.
- Studies I–II and IV–V are paired side by side.
- Studies III, VI, VIII, and IX use full editorial widths.
- Study VII remains a three-image event spread with the Sip & See note.
- Study IX no longer includes technique or Oasis notes.
- All study captions use the same image / study number / flower-list system.
