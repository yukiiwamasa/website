// ranking.jsonを取得してランキングを表示
fetch('ranking.json')
  .then(response => response.json())
  .then(data => {
    const rankingContainer = document.getElementById('ranking');

    // score順にソート
    data.sort((a, b) => b.score - a.score);

    data.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'ranking-item';
      div.innerHTML = `
        <span>#${index + 1}</span>
        <a href="${item.url}" target="_blank">${item.title}</a>
        <span>スコア: ${item.score}</span>
      `;
      rankingContainer.appendChild(div);
    });
  })
  .catch(err => {
    console.error('ランキングデータの取得に失敗:', err);
  });
