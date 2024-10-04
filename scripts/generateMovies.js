const fs = require('fs');

// Function to generate random strings
function generateRandomString(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function to generate movie items
function generateMovies(imageUrl, thumbnailUrl) {
  const movies = [];

  for (let i = 0; i < 1000; i++) {
    const movie = {
      id: i + 1,
      name: generateRandomString(10), // Random name with 10 characters
      description: generateRandomString(50), // Random description with 50 characters
      imageUrl: imageUrl,
      thumbnailUrl: thumbnailUrl,
    };
    movies.push(movie);
  }

  return movies;
}

// Function to write JSON file
function writeMoviesToFile(imageUrl, thumbnailUrl, outputFileName) {
  const movieList = generateMovies(imageUrl, thumbnailUrl);

  // Convert the movie list to JSON
  const jsonData = JSON.stringify(movieList, null, 2);

  // Write the JSON data to a file
  fs.writeFile(outputFileName, jsonData, 'utf8', err => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Movies written to ${outputFileName}`);
    }
  });
}

// Example usage
const imageUrl =
  'https://cdn.galaxycine.vn/media/2024/8/13/transformers-500_1723544375976.jpg';
const thumbnailUrl =
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/sharedimages/2024/09/transformers-one-2024-film-official-poster.jpg';

const outputFileName = 'movies.json'; // Output file name

writeMoviesToFile(imageUrl, thumbnailUrl, outputFileName);
