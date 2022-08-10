/**
 * Напиши скрипт создания и очистки коллекции элементов. 
 * Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
 * после чего рендерится коллекция. 
 * При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. 
Используй готовую функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
тем самым удаляя все созданные элементы.
 */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divEl = document.getElementById("boxes");

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement("div");

    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.outline = "1px solid #000000";
    newDiv.style.marginBottom = "10px";

    divEl.append(newDiv);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  while (divEl.firstChild) {
    divEl.removeChild(divEl.firstChild);
  }
}

btnCreate.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
