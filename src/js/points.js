export default function addPoints() {
  const cellsArr = Array.from(document.getElementsByClassName('cell'));
  const pointsCount = document.getElementById('count_points');
  const losingCount = document.getElementById('count_losing');
  for (let i = 0; i < cellsArr.length; i += 1) {
    const cell = document.getElementById(`cell${i}`);
    cell.addEventListener('click', () => {
      if (cell.classList.contains('cell_with_char')) {
        pointsCount.textContent = Number(pointsCount.textContent) + 1;
        cell.classList.remove('cell_with_char');
      } else {
        losingCount.textContent = Number(losingCount.textContent) + 1;
      }

      if(losingCount.textContent >= 5) {
        alert("Вы проиграли!")
      }
    });
  }
}
