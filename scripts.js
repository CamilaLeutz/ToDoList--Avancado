const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

//funções
const saveTodo = (text) => { // a função que espera o título da tarefa
    const todo = document.createElement("div"); // criando o esqueleto da div
    todo.classList.add("todo"); // criando a div externa

    const todoTitle = document.createElement("h3"); // criando o titulo que é um h3
    todoTitle.innerText = text  // como vou receber esse titulo? ele vem pela função saveTodo com o value do input (inputValue)
    todo.appendChild(todoTitle);
    //uma vez a função criada podemos reutilizar ela

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>' // aqui como ja tem "" no meio do texto eu preciso colocar '' por fora
    // não vou mais acessar um texto aqui vai ser o icone do botão por isso usamos o inneHTML pois vira em forma de icone (nesse caso)
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>' 
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value = "";
    todoInput.focus()
}

//eventos
todoForm.addEventListener("submit", (e) => { // função de ouvir quando o botão de adc tarefas é acionado
    e.preventDefault(); // esse preventDefault impede o formulário de ser enviado pro backEnd

    const inputValue = todoInput.value; // aqui eu estou pegando o valor que o usuario vai digitar no campo do input

    if (inputValue) { // esse if pra garantir que o usuario não crie tarefas sem titulo (é uma validação)
        saveTodo(inputValue); // aqui é uma função que irá salvar o value do input
    }
})

document.addEventListener("click", (e) => { // aqui como eu não vou saber em qual botão a pessoa quer clicar, eu vou add a função de ouvir o documento todo
//para que eu consiga saber em qual botão o usuario vai clicar, quando clicado aquele botão executa a função
    const targetEl = e.target //aqui eu ja descubro qual elemento foi selecionado
    const parentEl = targetEl.closest("div") //elemento pai mais próximo selecionado 
    
    if(targetEl.classList.contains("finish-todo")){
        // aqui se ele for clicado esse botão tem a função de riscar a tarefa feita
    parentEl.classList.toggle("done")
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove()
    }

    if(targetEl.classList.contains("edit-todo")){
        console.log(Editou)
    }

    })
