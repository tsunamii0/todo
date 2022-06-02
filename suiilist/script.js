const input = document.querySelector('.inputlist')
const list = document.querySelector('.todolist')

document.addEventListener('keypress', addToList)

let fullList = []

const Enter = 13

function addToList(e){
    if(e.keyCode === Enter && input.value.length === 0){
        console.log('sui')
        input.classList.add('erroranim')
        setTimeout(() => {
            input.classList.remove('erroranim')
        }, 500);
    }
    if(e.keyCode === Enter && input.value.length > 0){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        list.appendChild(li);
        fullList.push(input.value)
        console.log(fullList)
        input.value = ''
        JSON.stringify(fullList)
        localStorage.setItem('tasks', JSON.stringify(fullList));
    }
}

const tasksInLocalStorage = JSON.parse(localStorage.getItem('tasks'));

tasksInLocalStorage.forEach(element => {
            const li = document.createElement('li');
        li.appendChild(document.createTextNode(element));
        list.appendChild(li);
        fullList.push(element)
        });