# Delete Button — The Bin Eats The Label

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/delete-button-bin-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Responsive, runnable recreation of the supplied 7.6-second screen recording.

## Run locally
Open `index.html` in a modern browser. No npm install, bundler or build step is required.

Optional:
```bash
python3 -m http.server 8000
```
Visit `http://localhost:8000`.

## Interactions
- Two independently interactive Delete buttons: red and charcoal.
- On click, the pill morphs into a circular bin/disc.
- Each letter in “Delete” animates down into the bin.
- SVG trash lid lifts, fill level rises, and a circular SVG progress ring draws around the bin.
- Completion state, toast feedback, then the button resets for another run.
- Reset both buttons control.

## Video source extraction
The `source-extracts/` folder preserves the readable fragments from the three code panels:
- `index.html.fragment`: `.gulp`, `.gulp__body`, `.gulp__face`, `.gulp__btn`, `.gulp__icon`, `.gulp__can`, `.gulp__clip`, `.gulp__lid`, `.gulp__fill`, `.gulp__bin`, `[data-label]`.
- `app.css.fragment`: registered `@property --p`, fill translate formula `calc(46px - var(--p) * 29px)`, synchronized `clip-path` transition `.44s`, ring `stroke-dasharray: 0 100`, `gulp-draw` ending at `92 100`.
- `app.js.fragment`: `animationend` handler for `gulp-fly`, `landed / chars.length` progress, and the visible request/eat/full/pending sequence.

Only partial source code is legible in the video; these are faithful transcriptions of readable portions. The rest of the runnable project is reconstructed with vanilla HTML/CSS/JS to reproduce the observed interaction.

## Important
This is a front-end interaction demo. The request is simulated; it does not call a server or delete real data.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
