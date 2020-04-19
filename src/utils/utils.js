export const favoriteCountries = (countries) => {
  switch (countries) {
    case "China":
      return 1;
    case "Italy":
      return 2;
    case "New Zealand":
      return 3;
    case "Russia":
      return 4;
    case "Spain":
      return 5;
    case "US":
      return 6;
    default:
      return 100;
  }
};
