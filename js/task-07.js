/**
 * Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
 * и изменяет инлайн-стиль span#text обновляя свойство font-size. 
 * В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
 */

const inputSlider = document.getElementById("font-size-control");
const text = document.getElementById("text");

inputSlider.addEventListener("change", () => {
  text.style.fontSize = `${inputSlider.value}px`;
});
