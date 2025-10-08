document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('chat-toggle');
  const modal = document.getElementById('chat-modal');
  const TIPS = [
    { title: "Start Small", content: "KES 5k can kickstart your stock—grow step by step!", extra: "Track weekly sales to adjust!" },
    { title: "Anza Kidogo", content: "KES 5k inaweza kuanza duka lako—kua polepole!", extra: "Fanya bajeti ya kila wiki!" },
    // Add 23 more bilingual tips (e.g., budget, M-Pesa use) up to 25
  ];
  const toggleTips = (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      const shuffled = [...TIPS].sort(() => 0.5 - Math.random()).slice(0, 5);
      container.innerHTML = shuffled.map(tip => `
        <div class="card">${tip.title}: ${tip.content} <button @click="expanded = !expanded">More</button></div>
      `).join('');
    }
  };
  toggle?.addEventListener('click', () => { modal.style.display = modal.style.display === 'none' ? 'block' : 'none'; });
  toggleTips('tips-grid');
  toggleTips('resources-tips');

  window.sendQuery = async () => {
    const input = document.getElementById('query-input');
    const responseDiv = document.getElementById('response');
    if (!input.value) return;
    const langHint = input.value.includes('sahili') || input.value.includes('Swahili') ? 'Kiswahili' : 'English';
    const prompt = `Kechita: Kenyan micro-loans for entrepreneurs, up to KES 50k, low rates, quick approval. Services: Quick Micro-Loans, Mobile Money Integration, etc. (see site). Tone: Sweet, supportive. Lang: ${langHint}. Query: ${input.value}. <200 words.`;
    if (typeof GROQ_API_KEY !== 'undefined' && GROQ_API_KEY) {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${GROQ_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: 'llama3-8b-8192', messages: [{ role: 'user', content: prompt }], max_tokens: 300 })
        });
        const data = await res.json();
        responseDiv.innerHTML = `<p>${data.choices[0].message.content}</p>`;
      } catch (e) { responseDiv.innerHTML = '<p>Sawa, error—try again!</p>'; }
    } else {
      responseDiv.innerHTML = '<p>Chat requires a Groq API key (add to .env). Ask us via phone instead!</p>';
    }
    input.value = '';
  };
});
