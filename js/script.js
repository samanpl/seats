async function loadTables() {
  const linksResponse = await fetch('links.json?nocache=' + new Date().getTime());
  const layoutResponse = await fetch('layout.json?nocache=' + new Date().getTime());
  const links = await linksResponse.json();
  const layout = await layoutResponse.json();

  const grid = document.getElementById('table-grid');
  let linkedCount = 0;
  let totalCount = 0;

  layout.forEach(row => {
    row.forEach(table => {
      const div = document.createElement('div');
      div.textContent = table;
      div.className = 'seat';
      totalCount++;
      
      if (links[table]) {
        div.classList.add('linked');
        div.onclick = () => window.open(links[table], '_blank');
        linkedCount++;
      } else {
        div.onclick = () => showForm(table);
      }
      grid.appendChild(div);
    });
  });
  const countText = `🟩 ${linkedCount} of ${totalCount} seats have links. 🟦 ${totalCount - linkedCount} need links.`;
  document.getElementById('seat-count').textContent = countText;
}

function showForm(seatNumber) {
  document.getElementById('seat-input').value = seatNumber;
  document.getElementById('form-container').style.display = 'block';
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

loadTables();