// Get button and data container elements
const fetchDataButton = document.getElementById('fetchDataButton');
const dataContainer = document.getElementById('dataContainer');

async function fetchData() {
  try {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Failed to fetch data');
    
    const posts = await response.json();

    dataContainer.innerHTML = posts.slice(0, 5).map(post => `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `).join('');
  } catch (error) {
    dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

fetchDataButton.addEventListener('click', fetchData);
