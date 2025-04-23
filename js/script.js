async function loadTables() {
  const linksResponse = await fetch('links.json');
  const layoutResponse = await fetch('layout.json');
  const links = await linksResponse.json();
  const layout = await layoutResponse.json();

  const grid = document.getElementById('table-grid');
  layout.forEach(row => {
    row.forEach(table => {
      const div = document.createElement('div');
      div.textContent = table;
      div.className = 'seat';

      if (links[table]) {
        div.classList.add('linked');
        div.onclick = () => window.location.href = links[table];
      } else {
        div.onclick = () => showForm(table);
      }
      grid.appendChild(div);
    });
  });
}

function showForm(seatNumber) {
  document.getElementById('seat-input').value = seatNumber;
  document.getElementById('form-container').style.display = 'block';
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

loadTables();