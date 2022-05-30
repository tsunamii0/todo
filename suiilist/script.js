const input = document.querySelector('.inputlist')
const list = document.querySelector('.todolist')
const liHTML = document.getElementsByTagName('LI')

document.addEventListener('keypress', addToList)

console.log(localStorage.getItem('tasks'))


const tasksInLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];

tasksInLocalStorage.forEach(element => {
    createLi(element.value)
});
const Enter = 13
function createLi(textNode) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(textNode));
    list.appendChild(li);
    const lidel = document.createElement('p');
    lidel.appendChild(document.createTextNode('x'));
    li.appendChild(lidel)
}
function addToList(event){
    if(event.keyCode === Enter && input.value.length === 0){
        console.log('sui')
        input.classList.add('erroranim')
        setTimeout(() => {
            input.classList.remove('erroranim')
        }, 500);
    }
    if(event.keyCode === Enter && input.value.length > 0){
        createLi(input.value);
        tasksInLocalStorage.push({index: `${tasksInLocalStorage.length}`, value:input.value, isDone: false});
        localStorage.setItem("tasks", JSON.stringify(tasksInLocalStorage));
        input.value = "";
    }
}

function utilityFunction() {
    const parsingArr = JSON.parse(localStorage.get("todos"))
}


list.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('done')
    }
});

list.addEventListener('click', function(e) {
    if(e.target.tagName === 'P'){
        e.target.parentNode.style.display='none';
    }
});