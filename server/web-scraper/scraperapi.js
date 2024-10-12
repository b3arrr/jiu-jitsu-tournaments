const axios = require('axios');
const cheerio = require('cheerio');

// Function to scrape tournaments
async function scrapeTournaments() {
  try {
    // Fetch the page HTML
    const { data } = await axios.get('https://adcombat.com/');

    // Load the HTML into cheerio
    const $ = cheerio.load(data);

    // Select and extract the data
    const tournaments = [];

    // Look for h2 elements with the class 'fl-post-grid-title'
  
$('h2.fl-post-grid-title').each((index, element) => {
  const title = $(element).find('a').text(); // Extract the text (tournament title)
  const url = $(element).find('a').attr('href'); // Extract the href (URL)

  // Push the title and url into tournaments array at the correct index
  tournaments.push({ title, url });
});

$('span.fl-post-grid-date').each((index, element) => {
  const date = $(element).text(); // Extract the date text (use .text() instead of .find('a').text())

  // Add the date to the corresponding object in the tournaments array
  if (tournaments[index]) {
    tournaments[index].date = date; // Add the date to the existing object at the same index
  }
});

    // Log the scraped tournaments
    console.log(tournaments); // Add this log to see the scraped data

    return tournaments;
  } catch (error) {
    console.error('Error fetching tournament data:', error);
  }
}

// Test the scraping function by calling it
scrapeTournaments();

module.exports = scrapeTournaments;