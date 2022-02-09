function addPoints() {
  const cellsArr = Array.from(document.getElementsByClassName('cell'));
  const pointsCount = document.getElementById('count_points');
  const losingCount = document.getElementById('count_losing');
  for (let i = 0; i < cellsArr.length; i += 1) {
    const cell = Array.from(document.getElementsByClassName('cell'));
    cell[i].addEventListener('click', () => {
      if (cell[i].classList.contains('cell_with_char')) {
        pointsCount.textContent = Number(pointsCount.textContent) + 1;
        if(Number(pointsCount.textContent) === 15) {
          alert('Вы победили!');
          pointsCount.textContent = 0;
          losingCount.textContent = 0;
      }
      } else {
        losingCount.textContent = Number(losingCount.textContent) + 1;
        if (Number(losingCount.textContent) === 5) {
          alert('Игра завершена! Вы проиграли');
          pointsCount.textContent = 0;
          losingCount.textContent = 0;
        }
      }
    });
  }
}


addPoints();
