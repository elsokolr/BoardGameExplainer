# Publish Little Table with GitHub Pages

This app is a static website. GitHub Pages can serve it directly; no build command, server, dependencies, or API keys are needed.

## First publication

1. Create a **public** GitHub repository named `little-table` under your account. Leave the automatic README, license, and .gitignore options unchecked because the project already has its own files.
2. Upload the project files and the complete `assets` folder to the repository root. `index.html` must be directly at the root, not inside a second folder. If using the prepared ZIP, extract it first and upload its contents; uploading the ZIP itself will not publish the app.
3. Commit the upload to the `main` branch.
4. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then **main** and **/ (root)**. Click **Save**.
5. Wait for GitHub's Pages deployment to finish. The Pages settings will show the live address, normally `https://YOUR-USERNAME.github.io/little-table/`.

The included `.nojekyll` file tells GitHub to serve the files directly. The app uses relative asset links and hash navigation, so it works under the repository path without a router or rewrite configuration.

## Future updates

Commit changed files to `main`, including any new images in `assets`. GitHub Pages republishes the site automatically. Keep the entry file named `index.html` and preserve filename capitalization.

## What gets published

The app HTML, CSS, JavaScript, images, artwork credits, and project documentation are public. Saved games, wishlists, and language choices stay in each visitor's browser; they are not uploaded from your computer. Preferences made while opening the local file do not transfer to the published site's browser storage.

Keep credentials and personal files out of the repository. The project needs no environment variables. Publisher artwork retains its existing credits in `assets/SOURCES.md`; this is an independent guide.

## Check the live site

- Open the home page and all five games.
- Switch English / Français and reload to check the remembered language.
- Open **View memory card**, close it, and check mobile layout.
- Open a direct link such as `https://YOUR-USERNAME.github.io/little-table/#skull-king/rules`.
- Use the PDF links and print preview to check the reminders.

GitHub's instructions: [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
