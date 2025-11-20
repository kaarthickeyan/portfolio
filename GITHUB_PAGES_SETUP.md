# GitHub Pages Setup - Quick Start

## ✅ Step-by-Step Setup

### Step 1: Go to Repository Settings
1. Open: https://github.com/kaarthickeyan/portfolio
2. Click **Settings** (top right)
3. In the left sidebar, click **Pages**

### Step 2: Configure GitHub Pages
In the **Pages** settings:

**Source**
- Select: **Deploy from a branch**

**Branch**
- Select the branch dropdown
- Choose: **gh-pages**
- Select folder: **/ (root)**
- Click **Save**

### Step 3: Watch GitHub Actions
1. Go to: https://github.com/kaarthickeyan/portfolio/actions
2. You should see "Deploy Portfolio to GitHub Pages" workflow
3. Wait for the green checkmark ✅

The workflow will:
- Build your React app
- Create the `gh-pages` branch automatically
- Deploy to GitHub Pages

**Expected time: 2-3 minutes**

### Step 4: Access Your Live Portfolio
Once the green checkmark appears:
```
https://kaarthickeyan.github.io/portfolio/
```

## 🔄 Future Updates

Every time you push to `main`:
```bash
git push origin main
```

GitHub Actions automatically:
1. Builds your portfolio
2. Updates the `gh-pages` branch
3. Deploys to your live site

**No manual steps needed!**

## 🆘 Troubleshooting

### If build still fails:
1. Check Actions tab for error details
2. Look for red X and click "Details"
3. Common issues:
   - Missing dependencies (check `package.json`)
   - TypeScript errors (check console output)
   - Port conflicts (shouldn't affect build)

### If page shows 404:
- Wait 5 minutes for GitHub Pages to update
- Hard refresh: `Ctrl+Shift+R` (Windows)
- Check that base path in `vite.config.js` is `/portfolio/`

### If gh-pages branch doesn't appear:
- Make sure Pages settings are saved
- Try manually triggering workflow:
  1. Go to Actions
  2. Click "Deploy Portfolio to GitHub Pages"
  3. Click "Run workflow" button
  4. Select **main** branch
  5. Click green "Run workflow"

## ✨ What Should Happen

**First deployment:**
- `gh-pages` branch created automatically
- Site available at `https://kaarthickeyan.github.io/portfolio/`
- All sections render correctly
- Animations smooth
- Dark theme applied

**After each push to main:**
- Automatic rebuild and deploy
- Live site updated within 2 minutes
- Previous deployments preserved (can rollback if needed)

---

Let me know once you've completed Step 1-2, and I'll help if anything goes wrong!
