/**
 * Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
 * подставляет его текущее значение в span#name-output. 
 * Если инпут пустой, в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
 */

const refs = {
  userName: document.querySelector("#name-output"),
  input: document.querySelector("#name-input"),
};

const inputName = refs.input.addEventListener("input", onInputName);

function onInputName(event) {
  if (event.currentTarget.value === "") {
    refs.userName.textContent = "Anonymous";
  } else {
    refs.userName.textContent = refs.input.value;
  }
}
