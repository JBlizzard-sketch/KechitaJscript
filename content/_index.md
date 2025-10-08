---
title: "Kechita: Your Growth, Our Pride"
date: 2025-10-08
---
<section class="hero">
  <div class="hero-content">
    <h1 style="font-size: 3rem; margin-bottom: 20px;">Empowering Kenyan Dreams with Silky Loans</h1>
    <p style="font-size: 1.2rem; margin-bottom: 30px;">From jua kali hustles to big visions—Kechita fuels your pride with fast, flexible financing. [Edit: Tagline tweak]</p>
    <button onclick="document.querySelector('#loans').scrollIntoView({behavior:'smooth'})" style="margin-top: 20px;">Explore Loans</button>
  </div>
</section>

<section class="page-section" id="metrics">
  <h2>Our Impact in Numbers</h2>
  <div class="stats-grid">
    <div class="stat-card">8 Years Experience</div>
    <div class="stat-card">6,000+ Borrowers Empowered</div>
    <div class="stat-card">KES 150M+ Disbursed</div>
    <div class="stat-card">69% Women Borrowers</div>
    <!-- Add 6 more cards with hover details -->
  </div>
</section>

<section class="page-section" id="tips-grid">
  <h2>Quick Tips for Mwananchi</h2>
  <!-- JS populates 5 random tips -->
</section>

<div id="chat-modal" style="display:none; position:fixed; bottom:20px; right:20px; background:white; border-radius:10px; padding:20px; box-shadow:0 4px 20px rgba(0,0,0,0.2); width:300px;">
  <input id="query-input" placeholder="Ask about loans... e.g., Habari za BiashaBoost?" style="width: 100%; padding: 5px; margin-bottom: 10px;">
  <button onclick="sendQuery()" style="width: 100%; padding: 5px;">Send</button>
  <div id="response"></div>
</div>
