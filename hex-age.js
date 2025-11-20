const birthdate = new Date("2007-01-27T10:00:00");

function floatToHex(floatValue) {
  const intPart = Math.floor(floatValue);
  const fracPart = floatValue - intPart;

  const intHex = intPart.toString(16).toUpperCase();

  let fracHex = "";
  let frac = fracPart;
  for (let i = 0; i < 8; i++) {
    frac *= 16;
    const digit = Math.floor(frac);
    fracHex += digit.toString(16).toUpperCase();
    frac -= digit;
  }

  return { hex: `0x${intHex}.${fracHex}`, fracPart };
}

function fracToColor(hex) {
  console.log(hex.slice(5, 11));
  return `#${hex.slice(5, 11)}`;
}

function updateAge() {
  const now = new Date();
  const ageInMilliseconds = now - birthdate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  const { hex, fracPart } = floatToHex(ageInYears);
  const color = fracToColor(hex);

  const element = document.getElementById('ageDisplay');
  const squareElement = document.getElementById("ageColorSquare");
  element.textContent = hex
  squareElement.style.backgroundColor = color;
}

setInterval(updateAge, 10);
updateAge();
