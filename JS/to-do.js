const inputBox = document.getElementById('input-text');
const listContainer = document.getElementById('list-container');

document.getElementById('addButton').addEventListener('click', function () {
    if (inputBox.value == '') {
        alert('write something')
    }
    else {
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
});

listContainer.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
    }
});



