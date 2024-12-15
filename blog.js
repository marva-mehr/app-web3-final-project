// Fetch data and dynamically render the blog content
async function fetchBlog() {
  try {
      const response = await fetch('blog.json'); // Replace with your API endpoint
      const data = await response.json();

      // Render featured post
      const featuredPost = document.querySelector('.featured-post');
      featuredPost.innerHTML = `
          <h2>Featured Post</h2>
          <article>
              <h3>${data.featuredPost.title}</h3>
              <p>${data.featuredPost.description}</p>
              <a href="${data.featuredPost.link}">Read More →</a>
              <img src="${data.featuredPost.image}" alt="${data.featuredPost.title}">
          </article>
      `;
      // JavaScript to add the "visible" class on scroll
document.addEventListener('scroll', () => {
  const image = document.querySelector('.featured-image');
  const rect = image.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
      image.classList.add('visible');
  }
});

      // Render latest posts
      const latestPosts = document.querySelector('.latest-posts');
      latestPosts.innerHTML = `
          <h2>Latest Posts</h2>
          ${data.latestPosts.map(post => `
              <article>
                  <h3>${post.title}</h3>
                  <p>${post.description}</p>
                  <a href="${post.link}">Explore Features →</a>
              </article>
          `).join('')}
      `;

      // Render spotlight
      const spotlight = document.querySelector('.spotlight');
      spotlight.innerHTML = `
          <h2>Spotlight</h2>
          <article>
              <h3>${data.spotlight.title}</h3>
              <p>${data.spotlight.description}</p>
              <a href="${data.spotlight.link}">Watch the Journey →</a>
              <img src="${data.spotlight.image}" alt="${data.spotlight.title}">
          </article>
      `;
      document.addEventListener('scroll', () => {
          const image = document.querySelector('.spotlight-image');
          const rect = image.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
              image.classList.add('visible');
          }
      });
  } catch (error) {
      console.error('Error fetching blog data:', error);
  }
}

// Initialize the API interaction
document.addEventListener('DOMContentLoaded', fetchBlogData);

// The base URL for Wikipedia's API
const wikiApiUrl = 'https://en.wikipedia.org/w/api.php';

// The term you want to search for
const searchTerm = 'Apple'; // You can replace 'Apple' with any search term (e.g., 'Technology', 'NASA', etc.)

// The HTML container where results will be displayed
const resultsContainer = document.getElementById('results');

// Function to fetch data from Wikipedia API
async function fetchWikipediaData(query) {
try {
  // API URL with parameters
  const response = await fetch(
    `${wikiApiUrl}?action=query&format=json&origin=*&list=search&srsearch=${encodeURIComponent(query)}`
  );

  // Check if the response is successful
  if (!response.ok) {
    throw new Error('Failed to fetch data from Wikipedia');
  }

  // Parse the response into JSON format
  const data = await response.json();

  // Call a function to display the results
  displayResults(data.query.search);
} catch (error) {
  // If there's an error, display it in the results container
  resultsContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
}
}

// Function to display the results on the webpage
function displayResults(results) {
if (results.length === 0) {
  // If no results were found
  resultsContainer.innerHTML = '<p>No results found.</p>';
  return;
}

// Generate HTML for each result
resultsContainer.innerHTML = results
  .map(
    (result) => `
      <article>
        <h3>
          <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(
            result.title
          )}" target="_blank">
            ${result.title}
          </a>
        </h3>
        <p>${result.snippet}...</p>
      </article>
    `
  )
  .join(''); // Join all the generated HTML strings into one
}

// Fetch data when the page loads
fetchWikipediaData(searchTerm);
