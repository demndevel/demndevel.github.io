const birthdate = new Date("2007-01-27T10:00:00");

function updateAge() {
  const now = new Date();
  const ageInMilliseconds = now - birthdate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  let content = ageInYears.toString();

  const element = document.getElementById("ageDisplay");
  element.textContent = content.slice(0, 10);
}

setInterval(updateAge, 10);
updateAge();
