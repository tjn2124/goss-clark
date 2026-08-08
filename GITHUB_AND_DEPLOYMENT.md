# Goss Clark Author Website — GitHub & Deployment Notes

This repository contains the source for the Goss Clark author website.

## Recommended first step: GitHub

1. Create a new private GitHub repository (for example `goss-clark-author`).
2. Upload/push the contents of this folder to the repository root.
3. Do **not** commit `.env` files, `node_modules`, `.next`, `dist`, or other generated output. The included `.gitignore` already excludes them.

## Local requirements

The current project declares Node.js `>=22.13.0` in `package.json`.

## Important hosting note

The current codebase was generated using a Cloudflare/OpenAI `vinext` starter and includes Cloudflare-specific build tooling (`wrangler`, `vinext`, `@cloudflare/vite-plugin`, and project build scripts).

That means it is safe to store in GitHub as-is, but it should **not be assumed to be a drop-in Netlify project yet**.

Before deploying to Netlify, choose one of these paths:

- **Minimal conversion to standard Next.js** — recommended if Netlify is the target host.
- **Deploy using its existing Cloudflare-oriented build setup** — potentially the lowest-code-change route.

The visual site/content can be preserved either way.

## Main editable website files

- `app/page.tsx` — main homepage/content
- `app/layout.tsx` — document layout / metadata
- `app/globals.css` — primary site styling
- `public/` — static images/assets

Additional route folders under `app/` contain the Books, About, and Journal pages.

## Future CMS plan

A later phase can move editable content (books, biography, journal posts, images, purchase links) out of React components and into a headless CMS such as Sanity, while retaining the current design.

## Book sales

A lightweight first version can use retailer links or Stripe-hosted checkout/payment links. A full cart/storefront is not required unless the author needs inventory, multi-item carts, discounts, and more advanced fulfillment.
