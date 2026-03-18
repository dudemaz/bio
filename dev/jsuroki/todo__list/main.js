
const input = document.getElementById('input__info');
const button__sumbit = document.getElementById('button__sumbit');
const todo__action = document.getElementById('todo__action');
//


let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];
function save() {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}
function renderTask(id, text,state) {
    let div = document.createElement('div');
    let li = document.createElement('li');
    let button__delete = document.createElement('button');
    let button__done = document.createElement('button');
    
    div.dataset.id = id;
    li.textContent = text;
    button__delete.textContent = 'Удалить';
    button__done.textContent = 'Готово';
    if(state){
        li.classList.add('completed')
    }

    button__delete.onclick = () => {
        tasks = tasks.filter(t => t.id !== id);
        save()
        div.remove();
    };
    
    button__done.onclick = () => {
        li.classList.toggle('completed');
    let task = tasks.find(t => t.id === id);
    if (task) {
        task.state = li.classList.contains('completed');
        save()
    }
    };

    div.append(li, button__done, button__delete);
    todo__action.append(div);
}

tasks.forEach(element => {
    renderTask(element.id, element.text,element.state);
});

button__sumbit.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value.trim() === '') return;
    
    const uuid = crypto.randomUUID();
    const val = input.value;
    const state = false; 
    tasks.push({ id: uuid, text: val, state: state});
    save()

    renderTask(uuid, val, state);
    
    input.value = '';
});
