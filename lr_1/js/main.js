const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

var liList = Array.from(document.querySelectorAll('#text'));

function submitForm(evt) {
  evt.preventDefault(evt);
  const elem = document.createElement("li");
  const positionNubmer = input1.value;
  elem.id = 'text';
  elem.textContent = input2.value;
  liList[positionNubmer - 1].insertAdjacentHTML("afterend",
    ` <li id="text">${input2.value}</li>`);
  liList = Array.from(document.querySelectorAll('#text'));
}

button1.addEventListener('click', submitForm);

function submitForm2(evt) {
    evt.preventDefault(evt);
    const elem = document.createElement("li");
    const positionNubmer = input1.value;
    elem.textContent = input2.value;
    liList[positionNubmer - 1].insertAdjacentHTML('beforeend', 
      ` <ol><li>${input2.value}</li></ol>`);
}

button2.addEventListener('click', submitForm2);
