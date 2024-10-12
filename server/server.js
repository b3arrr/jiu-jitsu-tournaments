const express = require('express');
const scraper = require('./web-scraper/scraperapi'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Allow CORS for the frontend to access the backend
const cors = require('cors');
app.use(cors());

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Route to fetch scraped data
app.get('/api/tournaments', async (req, res) => {
  try {
    const tournaments = await scraper(); // Assuming scraper is an async function
    res.json(tournaments); // Send back the scraped data
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tournament data', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
