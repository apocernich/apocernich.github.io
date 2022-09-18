function inputpyBLtoRGBArray() {
  let p = parseFloat(document.getElementById('colorp').value);
  let y = parseFloat(document.getElementById('colory').value);
  let pyB = parseFloat(document.getElementById('colorpyB').value);
  let L = parseFloat(document.getElementById('colorL').value);
  if (0 > (p, y, pyB, L) || (p, y, pyB, L) > 1) {
    alert('All fields must be between 0 and 1');
    return;
  } else {
    colorConverterPyToRGB(p, y, pyB, L);
  }
}

function inputRGBtopyBLArray() {
  let R = parseFloat(document.getElementById('colorR').value);
  let G = parseFloat(document.getElementById('colorG').value);
  let rgbB = parseFloat(document.getElementById('colorrgbB').value);
  if (0 > (R, G, rgbB) || (R, G, rgbB) > 1) {
    alert('All fields must be between 0 and 1');
    return;
  } else {
    colorConverterRGBToPy(R, G, rgbB);
  }
}

const colorConverterRGBToPy = (R, G, B) => {
  let startingColorArray = [R, G, B];
  let endingColorArray = [];
  for (let i = 0; i < startingColorArray.length; i++) {
    endingColorArray[i] = (
      (1 /
        (startingColorArray[0] +
          startingColorArray[1] +
          startingColorArray[2])) *
      startingColorArray[i]
    ).toFixed(3);
  }
  endingColorArray[3] = Math.max(...startingColorArray);

  document.getElementById(
    'output'
  ).textContent = `pyBL value: (${endingColorArray[0]},${endingColorArray[1]},${endingColorArray[2]},${endingColorArray[3]})`;
};

const colorConverterPyToRGB = (p, y, B, L) => {
  let startingColorArray = [p, y, B, L];
  let endingColorArray = [];
  const endingColorArrayAtRGB = 3;
  for (let i = 0; i < endingColorArrayAtRGB; i++) {
    endingColorArray[i] = (
      (startingColorArray[3] /
        Math.max(
          startingColorArray[0],
          startingColorArray[1],
          startingColorArray[2]
        )) *
      startingColorArray[i]
    ).toFixed(3);
  }
  document.getElementById(
    'output'
  ).textContent = `RGB value: (${endingColorArray[0]},${endingColorArray[1]},${endingColorArray[2]})`;
};
