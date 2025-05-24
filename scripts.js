// Array of artworks metadata: media type assigned for demo purposes
const artworksCount = 100;
const artworks = Array.from({ length: artworksCount }, (_, i) => ({
  id: i + 1,
  title: `Artwork ${i + 1}`,
  // Assign media type cyclically for demo (you can update or fetch dynamically)
  media: i % 3 === 0 ? 'Digital' : i % 3 === 1 ? 'Traditional' : 'Mixed Media',
  src: `artworks/artwork${i + 1}.jpg`,
}));

const artworksContainer = document.getElementById('artworks');
const filterButtons = document.querySelectorAll('.filter-btn');
const modeToggleBtn = document.getElementById('mode-toggle');

// Function to render artworks filtered by media type
function renderArtworks(filter = 'All') {
  artworksContainer.innerHTML = '';

  const filtered = filter === 'All' ? artworks : artworks.filter(a => a.media === filter);

  filtered.forEach(({ id, title, media, src }) => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = src;
    img.alt = title;
    img.loading = 'lazy';

    const caption = document.createElement('figcaption');
    caption.innerHTML = `${title}<br><em>${media}</em>`;

    figure.appendChild(img);
    figure.appendChild(caption);
    artworksContainer.appendChild(figure);
  });
}

// Initialize gallery with all artworks
renderArtworks();

// Filter button event listeners
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderArtworks(btn.dataset.filter);
  });
});

// Dark/Light mode toggle
function setDarkMode(isDark) {
  if
    
