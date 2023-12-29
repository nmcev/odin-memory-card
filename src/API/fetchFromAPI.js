const fetchFromAPI = async () => {
  const namesANDurls = [];
  const maxRetries = 3;
  const uniqueRandomNumbers = new Set();

  try {
    while (uniqueRandomNumbers.size < 8) {
      const random = Math.floor(Math.random() * 83) + 1;
      uniqueRandomNumbers.add(random);
    }

    for (const random of uniqueRandomNumbers) {
      let retryCount = 0;
      let success = false;

      while (!success && retryCount < maxRetries) {
        try {
          const response = await fetch(`https://swapi.dev/api/people/${random}`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }

          const results = await response.json();
          const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${random}.jpg`;

          if (results.name !== undefined) {
            namesANDurls.push({ name: results.name, url: imageUrl });
            success = true;
          }
        } catch (error) {
          console.error('Error fetching Star Wars names:', error);
          retryCount++;
        }
      }
    }

    return namesANDurls;
  } catch (error) {
    console.error('Error fetching Star Wars names:', error);
    return [];
  }
};

export default fetchFromAPI;
