function numberOfChirps (num, string, chirpArray) {

  if (string === void(0)) {
    string = "chirp";
  }

  if (chirpArray === void(0)) {
    chirpArray = [];
  }

  if (num % 1 === 0 && num >= 0) {
    if (num < 0) {
      return -1;
    } else if (num === 0) {
      return chirpArray.join(" ");
    } else {
      chirpArray.push(string);
      console.log(chirpArray);
      return numberOfChirps(num - 1, string, chirpArray);
    }
  }
  else {
    return "Please enter a positive integer";
  }
}
