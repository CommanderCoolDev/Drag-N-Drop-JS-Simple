"use strict";
const item = document.querySelector('.item'),
    placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

placeholders.forEach(item => {
    item.addEventListener('dragover', dragover);
    item.addEventListener('dragenter', dragenter);
    item.addEventListener('dragleave', dragleave);
    item.addEventListener('drop', drop);
});

function dragStart(event) {
event.target.classList.add('hold');
setTimeout(() => event.target.classList.add('hide'), 0);



}

function dragEnd(event) {
        event.target.classList.remove('hold', 'hide');
   
}

function dragover (e) {
   e.preventDefault();
}
function dragenter (e) {
    e.target.classList.add('hovered');

}
function dragleave (e) {
    e.target.classList.remove('hovered');

}
function drop (e) {
    e.target.append(item);
    e.target.classList.remove('hovered');

}
