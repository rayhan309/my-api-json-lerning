const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayPost(data)
    })
}

// dispay post 
const displayPost = posts => {
    // step no: 1
    const container = document.getElementById("card-container");
    container.innerHTML = ""
    posts.forEach(post => {
        // step no: 2
        const div = document.createElement('div');
        div.innerHTML = `
         <div class="border-2 border-gray-400 shadow-xl h-full p-3">
            <h1 class="text-[1.25rem] text-gray-900 font-bold my-2">${post.title}</h1>
            <p class="text-[1rem] text-gray-700 font-medium">${post.body}</p>
        </div>
        `
        // step no: 3
        container.appendChild(div)
    })
}

loadPost()