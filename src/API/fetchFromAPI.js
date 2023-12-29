const fetchFromAPI = async () => {
  const namesANDurls = [];
  const uniqueRandomNumbers = new Set();
  const numberOFCharacters = 10;

    while (uniqueRandomNumbers.size < numberOFCharacters) {
      const random = Math.floor(Math.random() * 83) + 1;
      uniqueRandomNumbers.add(random);
    }

    for (const random of uniqueRandomNumbers) {

        try {
          const response = await fetch(`https://swapi.dev/api/people/${random}`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }

          const results = await response.json();
          const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${random}.jpg`;

          if (results.name !== undefined) {
            namesANDurls.push({ name: results.name, url: imageUrl });
          }
        } catch (error) {
          console.error('Error fetching Star Wars names:', error);
        }
    }

  return namesANDurls;
};

export default fetchFromAPI;
