# JHarmony | Developer Portfolio

**Live site:** [https://jharmony.github.io/developerFolio/](https://jharmony.github.io/developerFolio/)

A clean, responsive developer portfolio built with [developerFolio](https://github.com/saadpasta/developerFolio). Edit **`src/portfolio.js`** for your content; customize theme in **`src/_globalColor.scss`**.

---

## Portfolio sections

- Summary and About me  
- Skills  
- Work Experience (Arweave – IT Team Lead, Technical Lead, Community Manager)  
- Open Source Projects (GitHub pinned repos)  
- Big Projects & Campaigns (BazAR, PermaHub, Permabites IRL, etc.)  
- Achievements and Certifications  
- Contact me  
- Twitter Timeline  
- GitHub Profile  

---

## Getting started

**Requirements:** Node.js v10.16.0+, npm 6.9.0+, Git 2.17.1+

```bash
# Clone the repository
git clone https://github.com/Jharmony/developerFolio.git
cd developerFolio

# Copy env example (optional – for GitHub profile + pinned repos)
cp env.example .env
# Edit .env with REACT_APP_GITHUB_TOKEN and GITHUB_USERNAME if desired

# Install dependencies
npm install

# Start local dev server
npm start
```

Open **http://localhost:3000** to view. To match production base path, use **http://localhost:3000/developerFolio/** after a production build.

---

## Change and customize

- **Content:** Edit **`src/portfolio.js`** (greeting, experience, projects, certifications, skills, contact, etc.).
- **Experience logos:** Add company/project logos under **`src/assets/images/`** (e.g. `companyNameLogo.png`). In **`src/portfolio.js`**, set **`companylogo: require("./assets/images/companyNameLogo.png")`** for the matching entry in **`workExperiences.experience`**. Two roles currently use a placeholder (**`quoraLogo.png`**); replace those when you have the real logos.
- **SEO / meta:** Edit **`public/index.html`** (title, description, Open Graph, Twitter).
- **Theme:** Edit **`src/_globalColor.scss`** for global colors.
- **Animations:** Greeting uses Fade + wave emoji; the hero illustration uses Lottie when **`illustration.animated`** is true in **`src/portfolio.js`**. Lottie JSON files live in **`src/assets/lottie/`** (`landingPerson.json`, `splashAnimation.json`). Replace those files or adjust **`src/components/displayLottie/DisplayLottie.js`** to change animations.
- **Twitter:** Set **`twitterDetails.userName`** in **`src/portfolio.js`** (no `@`). Timeline height is set in **`src/containers/twitter-embed/twitter.js`** (e.g. 600 for more posts).

---

## Linking to GitHub (optional)

1. Create a [GitHub personal access token](https://github.com/settings/tokens) (no scopes).
2. Copy **`env.example`** to **`.env`** and set:
   - `REACT_APP_GITHUB_TOKEN = "your_token"`
   - `GITHUB_USERNAME = "your_username"`
   - `USE_GITHUB_DATA = "true"`
3. Set **`showGithubProfile`** in **`src/portfolio.js`** as needed.

Do not commit **`.env`** (it is in **`.gitignore`**).  
For **GitHub Actions** deploys, the workflow uses **`GITHUB_USERNAME`** and **`secrets.GITHUB_TOKEN`** automatically.

---

## Deployment (GitHub Pages)

1. **Homepage:** In **`package.json`**, **`homepage`** is set to **`https://jharmony.github.io/developerFolio/`**.
2. **GitHub Actions:** On push to **master** (and weekly / manual run), the workflow builds and deploys the **`build/`** folder to the **gh-pages** branch.
3. **GitHub Pages:** In repo **Settings → Pages**, set **Source** to **Deploy from a branch**, **Branch** to **gh-pages**, **Folder** to **/ (root)**.

Build locally:

```bash
npm run build
```

Output is in **`build/`**; the Action deploys that to **gh-pages**.

---

## Reference

- **`data/portfolio.json`** – Backup/reference of your content (experience, projects, certifications). The app reads from **`src/portfolio.js`**.
- Original template: [saadpasta/developerFolio](https://github.com/saadpasta/developerFolio)
