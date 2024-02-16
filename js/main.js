const publicationsList = document.querySelector('.publications-list');
const searchBar = document.getElementById('search-bar');

// Replace this with your actual publication data
const publications = [
  { title: 'Managing scientific research publishing using Open Journal Systems', description: 'This is a description of publication 1.' },
  { title: 'Library As Publisher: A Successful Story of Indian Institute of Advanced Study Library, Shimla, description: 'This is a description of publication 2.' },
  { title: 'Bibliometric Mapping of Gender Disparity in Research Publications in India during 1999-2018: A Case Study of Shimla District, Himachal Pradesh', description: 'This is a description of publication 3.' },
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
