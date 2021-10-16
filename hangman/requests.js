const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch puzzle");
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};

const getCountry = (countryCode) => {
  return fetch(
    `http://api.countrylayer.com/v2/all?access_key=90ced09cfc89936b70bfedf2ec75789b`
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch country");
      }
    })
    .then((data) => {
      const country = data.find(
        (country) => country.alpha2Code === countryCode
      );
      return country.name;
    });
};
