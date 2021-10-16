const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
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
      return country;
    });
};

const getLocation = () => {
  return fetch("https://ipinfo.io/json?token=5f0c0945dc4c21").then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch location");
      }
    }
  );
};
