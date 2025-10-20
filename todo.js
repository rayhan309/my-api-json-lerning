const loadTodos = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displyPost(data)
    })
}

// displyPost
const displyPost = todos => {
    const container = document.getElementById("card-container");
    container.innerHTML = "";
    todos.forEach(todo => {
        const div = document.createElement('div')
        div.innerHTML = `
    <div class="p-3 border-2 border-gray-400 shadow-lg h-full flex items-center gap-3 mt-4">
        <p class="text-[1rem] font-semibold text-gray-600">${todo.completed == true ? "✅" : "❌"}</p>
        <h1 class="text-[1rem] font-bold text-[#433c3c]">${todo.title}</h1>
    </div>`
    container.appendChild(div)
    })
}
loadTodos()