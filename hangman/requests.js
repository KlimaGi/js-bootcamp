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

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountry(location.country);
  return country;
};

const getCountry = async (countryCode) => {
  const response = await fetch(
    `http://api.countrylayer.com/v2/all?access_key=738ffcc7f6772197d5522950fd2ee5c8`
  );
  if (response.status === 200) {
    const data = await response.json();
    const country = data.find((country) => country.alpha2Code === countryCode);
    return country;
  } else {
    throw new Error("Unable to fetch country");
  }
};

const getLocation = async () => {
  const response = await fetch("https://ipinfo.io/json?token=5f0c0945dc4c21");

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to get the current location");
  }
};
