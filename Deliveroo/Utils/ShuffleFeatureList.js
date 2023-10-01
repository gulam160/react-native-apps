export const shuffleData = (data, n) => {
  const shuffledArrays = [];

  for (let k = 0; k < 3; k++) {
    let shuffledData = [...data];

    for (let i = n - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = shuffledData[i];
      shuffledData[i] = shuffledData[j];
      shuffledData[j] = temp;
    }

    shuffledArrays.push(shuffledData);
  }

  return shuffledArrays;
};
