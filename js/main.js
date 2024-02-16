const publicationsList = document.querySelector('.publications-list');
const searchBar = document.getElementById('search-bar');

// Replace this with your actual publication data
const publications = [
  { title: 'Publication 1', description: 'This is a description of publication 1.' },
  { title: 'Publication 2', description: 'This is a description of publication 2.' },
  { title: 'Publication 3', description: 'This is a description of publication 3.' },
];

function renderPublications(filteredPublications) {
  publicationsList.innerHTML = '';

  filteredPublications.forEach(publication => {
    const publicationElement = document.createElement('div');
    publicationElement.classList.add('publication');

    const titleElement = document.createElement('h3');
    titleElement.textContent = publication.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = publication.description;

    publicationElement.appendChild(titleElement);
    publicationElement.appendChild(descriptionElement);

    publicationsList.appendChild(publicationElement);
  });
}

searchBar.addEventListener('keyup', () => {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredPublications = publications.filter(publication => {
    return publication.title.toLowerCase().includes(searchTerm) || publication.description.toLowerCase().includes(searchTerm);
  });

  renderPublications(filteredPublications);
});

renderPublications(publications); // Render all publications initially
