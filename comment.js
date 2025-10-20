const loadComment = () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displyPost(data)
    })
}
const displyPost = comments => {
    const container = document.getElementById("card-container");
    container.innerHTML = ""
    comments.forEach(element => {
        const div = document.createElement("div");
        div.innerHTML = `    
    <div class="border-2 border-gray-300 shadow-xl text-center mt-3 h-full rounded-2xl">
        <h1 class="text-[1.25rem] text-[#634c4c] font-bold my-3">${element.name}</h1>
        <p class="text-[1rem] text-[#504c4c] font-bold">${element.body}</p>
        <p class="text-[1rem] text-[#aca6a6] font-semibold my-3">${element.email}</p>
    </div>`
    container.appendChild(div)
    });
}
loadComment()