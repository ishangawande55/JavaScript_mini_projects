  // Fetch data from the JSON file
  fetch('travel_recommendation_api.json')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
  })
  .then(data => {
      console.log('Fetched data:', data); // Log the data to the console
      displayRecommendations(data); // Call a function to display the data
  })
  .catch(error => console.error('There has been a problem with your fetch operation:', error));

// Function to display travel recommendations
function displayRecommendations(data) {
  const recommendationsDiv = document.getElementById('recommendations');
  recommendationsDiv.innerHTML = ''; // Clear any existing content

  // Display countries and their cities
  data.countries.forEach(country => {
      country.cities.forEach(city => {
          const placeDiv = document.createElement('div');
          placeDiv.className = 'place';

          const placeName = document.createElement('h2');
          placeName.textContent = city.name;

          const placeImage = document.createElement('img');
          placeImage.src = city.imageUrl;
          placeImage.alt = city.name;

          const placeDescription = document.createElement('p');
          placeDescription.textContent = city.description;

          placeDiv.appendChild(placeName);
          placeDiv.appendChild(placeImage);
          placeDiv.appendChild(placeDescription);

          recommendationsDiv.appendChild(placeDiv);
      });
  });

  // Display temples
  data.temples.forEach(temple => {
      const placeDiv = document.createElement('div');
      placeDiv.className = 'place';

      const placeName = document.createElement('h2');
      placeName.textContent = temple.name;

      const placeImage = document.createElement('img');
      placeImage.src = temple.imageUrl;
      placeImage.alt = temple.name;

      const placeDescription = document.createElement('p');
      placeDescription.textContent = temple.description;

      placeDiv.appendChild(placeName);
      placeDiv.appendChild(placeImage);
      placeDiv.appendChild(placeDescription);

      recommendationsDiv.appendChild(placeDiv);
  });

  // Display beaches
  data.beaches.forEach(beach => {
      const placeDiv = document.createElement('div');
      placeDiv.className = 'place';

      const placeName = document.createElement('h2');
      placeName.textContent = beach.name;

      const placeImage = document.createElement('img');
      placeImage.src = beach.imageUrl;
      placeImage.alt = beach.name;

      const placeDescription = document.createElement('p');
      placeDescription.textContent = beach.description;

      placeDiv.appendChild(placeName);
      placeDiv.appendChild(placeImage);
      placeDiv.appendChild(placeDescription);

      recommendationsDiv.appendChild(placeDiv);
  });
}
