function paginationBullets(total, bulletsNumber, activeNumber) {
  const bullets = [];
  if (bulletsNumber === 1) {
    bullets.push({
      number: String(activeNumber),
      isActive: true,
      btn: true,
    });
    return bullets;
  }

  if (total < bulletsNumber) {
    for (let i = 0; i < total; i++) {
      bullets.push({
        number: String(i + 1),
        isActive: i + 1 === activeNumber,
        btn: true,
      });
    }
  } else {
    const diff = total - activeNumber;
    if (diff > bulletsNumber - 1) {
      for (let i = 0; i < bulletsNumber - 1; i++) {
        bullets.push({
          number: String(i + activeNumber),
          isActive: i + activeNumber === activeNumber,
          btn: true,
        });
      }
      bullets.push({
        number: "...",
        isActive: false,
        btn: false,
      });
    } else if (diff === bulletsNumber - 1) {
      for (let i = total - diff; i <= total; i++) {
        bullets.push({
          number: String(i),
          isActive: i === activeNumber,
          btn: true,
        });
      }
    } else {
      bullets.push({
        number: "...",
        isActive: false,
        btn: false,
      });
      for (let i = total - bulletsNumber + 2; i <= total; i++) {
        bullets.push({
          number: String(i),
          isActive: i === activeNumber,
          btn: true,
        });
      }
    }
  }

  return bullets;
}

export default paginationBullets;
