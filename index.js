//1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropItemElem = document.querySelectorAll('.dropdown-item');

dropItemElem.forEach(elem => {
    elem.classList.add('super-dropdown');
});

//2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnElem = document.querySelector('.btn');
if (btnElem.classList.contains('btn-secondary')){
    btnElem.classList.remove('btn-secondary');
} else {
    btnElem.classList.add('btn-secondary');
}

//3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuElem = document.querySelector('.menu');
menuElem.classList.remove('dropdown-menu');


//4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
//`<a href="#">link</a>`
const dropdownDiv =document.querySelector('div', 'dropdown');
dropdownDiv.insertAdjacentHTML('afterbegin', '<a href="#">link</a>');

//5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const idElem = document.getElementById('dropdownMenuButton');
idElem.setAttribute('id', 'superDropdown');

//6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут //"aria-labelledby" равный "dropdownMenuButton" используя dataset.

const attsributeElem = document.querySelectorAll('[aria-labelledby="dropdownMenuButton"]');
console.log(attsributeElem);
attsributeElem.forEach(element => {
    element.dataset.add = '3';
})

//7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const typeElem = document.querySelector('.dropdown-toggle');
typeElem.removeAttribute('type');