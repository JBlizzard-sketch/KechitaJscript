# KechitaJscript

# Kechita POC Static Site

## Overview
A silky-smooth, modern Hugo site for Kechita, a Kenyan micro-lending company. Built as a proof-of-concept (POC) for Netlify free tier deployment.

## Setup
1. Install Hugo: `pkg install hugo` (Termux) or download from hugo.io.
2. Clone repo: `git clone https://github.com/yourusername/kechita-poc.git`.
3. Navigate: `cd kechita-poc`.
4. Test: `hugo server` (local at http://localhost:1313).
5. Deploy: Push to GitHub, link to Netlify (build: `hugo --gc --minify`, publish: `public`).

## Features
- 15 pages with rich content.
- Groq chat (optional, add API key to .env).
- Smooth navigation, modern UI.

## Environment Variables
- Create `.env` file with:
