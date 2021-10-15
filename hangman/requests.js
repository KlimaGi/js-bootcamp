const getPuzzle = (wordCount, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback("And error has taken place", undefined);
    }
  });
  request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
};

const getCountry = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest();

  countryRequest.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const country = data.find(
        (country) => country.alpha2Code === countryCode
      );
      callback(undefined, country);
    } else if (e.target.readyState === 4) {
      callback("Unable to fetch data", undefined);
    }
  });
  countryRequest.open(
    "GET",
    `http://api.countrylayer.com/v2/all?access_key=90ced09cfc89936b70bfedf2ec75789b`
  );
  countryRequest.send();
};
