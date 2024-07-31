function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  const age = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365.25));

  return age;
}

export default calculateAge;
