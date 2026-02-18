# DeFi Assist website

Static HTML5 website for the DeFi Assist Google Sheets&trade; add-on.

## Pages

- `index.html` - product landing page with install CTA
- `privacy-policy.html` - Privacy Policy (text preserved from source)
- `terms-of-service.html` - Terms of Service (text preserved from source)
- `support.html` - FAQ and support page

## Local preview

Any static server works, for example:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy to GitHub Pages

1. Push this repository to GitHub with default branch `main`.
2. In GitHub repo settings, enable Pages and select **GitHub Actions** as source.
3. Push to `main` to trigger `.github/workflows/deploy.yml`.
4. The site will be published automatically.
