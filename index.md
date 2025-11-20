---
layout: home
---

<script>
const birthdate = new Date('2004-02-27T00:00:00');

function floatToHex(floatValue) {
  const intPart = Math.floor(floatValue);
  const fracPart = floatValue - intPart;
  
  const intHex = intPart.toString(16).toUpperCase();
  
  let fracHex = '';
  let frac = fracPart;
  for (let i = 0; i < 8; i++) {
    frac *= 16;
    const digit = Math.floor(frac);
    fracHex += digit.toString(16).toUpperCase();
    frac -= digit;
  }
  
  return `0x${intHex}.${fracHex}`;
}

function updateAge() {
  const now = new Date();
  const ageInMilliseconds = now - birthdate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  
  document.getElementById('ageDisplay').textContent = floatToHex(ageInYears);
}

setInterval(updateAge, 10);
updateAge();
</script>

[webring](https://otomir23.me/webring): [prev](https://webring.otomir23.me/25/prev), [next](https://webring.otomir23.me/25/next)
