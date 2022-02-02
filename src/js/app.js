// TODO: write your code here
export default function randomGame() {
  const cellArr = Array.from(document.getElementsByClassName('cell'));
  const arrLength = cellArr.length;
  const activeIndex = cellArr.findIndex((cell) => cell.classList.contains('cell_with_char'));
  cellArr[activeIndex].classList.remove('cell_with_char');
  let activation = Math.floor(Math.random() * arrLength);
  if (activeIndex === activation) {
    activation = +1;
  }
  cellArr[activation].classList.add('cell_with_char');
}

setInterval(randomGame, 1000);
