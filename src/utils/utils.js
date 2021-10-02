export const favoriteCountries = (countries) => {
  switch (countries) {
    case "Russia":
      return 1;
    case "US":
      return 2;
    case "New Zealand":
      return 3;
    case "India":
      return 4;
    case "Brazil":
      return 5;
    default:
      return 100;
  }
};
