const axios = require('axios');
const cheerio = require('cheerio');

// Function to scrape tournaments
async function scrapeTournaments() {
  try {
    // Fetch the page HTML
    const { data } = await axios.get('https://adcombat.com/adcc-events/');

    // Load the HTML into cheerio
    const $ = cheerio.load(data);


    // Find each event's container using the class 'rw-event-details align-items-center'
    const tournaments = []; // Ensure tournaments array is defined

    $('.rw-event-details.align-items-center').each((index, element) => {
        const title = $(element).find('h2.entry-title a').text(); // Extract the tournament title
        const url = $(element).find('h2.entry-title a').attr('href'); // Extract the tournament URL
        const location = $(element).find('p.rw-event-location').text().trim(); // Extract the location
        const organization = $(element).find('p strong:contains("Organized By:")').parent().text().replace('Organized By:', '').trim(); // Extract the organization
    
        // Extract date information from the corresponding element
        const dateElement = $('.rw-event-date.align-items-center').eq(index); // Get the corresponding date element
        const month = dateElement.find('.rw-date-month').text();
        const day = dateElement.find('.rw-date-day').text();
        const year = dateElement.find('.rw-date-year').text();
    
        const date = month + ' ' + day + ' ' + year; // Combine the date components
    
        // Push the extracted details into the tournaments array
        tournaments.push({ title, url, date, location, organization });
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
