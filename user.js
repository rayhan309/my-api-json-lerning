const loadUser = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displyPost(data)
    })
}
const displyPost = posts => {
    const container = document.getElementById("card-container")
    container.innerHTML = "";
    posts.forEach(element => {
        const div = document.createElement('div')
        div.innerHTML = `  
    <div class="border-2 border-gray-300 shadow-xl rounded-xl h-full">
        <h1 class="text-center text-[1.25rem] font-bold text-gray-700 mt-1">Name: ${element.name}</h1>
        <div class="m-2 p-2 flex flex-col md:flex-row justify-around">
            <div>
                <!-- address -->
                 <p class="text-center text-[1rem] font-bold text-[#8b8383]">Address:</p>
                <p class="text-[1rem] text-center font-bold text-[#454545]">atreet: ${element.address.street}</p>
                <p class="text-[1rem] text-center font-bold text-[#454545]">city: ${element.address.city}</p>
                <!-- ago -->
                <p class="text-[1rem] text-center font-bold text-[#454545]">lng: ${element.address.geo.lng}</p>
            </div>
            <div class="mx-3 my-2">
                <!-- contace -->
                 <p class="text-center text-[1rem] font-bold text-[#8b8383]">Contace:</p>
                 <p class="text-[1rem] text-center font-bold text-[#454545]">phone: ${element.phone}</p>
                 <p class="text-[1rem] text-center font-bold text-[#454545]">website: ${element.website}</p>
            </div>
            <div>
                <!-- company -->
                <p class="text-center text-[1rem] font-bold text-[#8b8383]">Company:</p>
                 <p class="text-[1rem] text-center font-bold text-[#454545]">name: ${element.company.name}</p>
                 <p class="text-[1rem] text-center font-bold text-[#454545]">bs: ${element.company.bs}</p>
            </div>
        </div>
        <p class="text-center text-[1rem] font-semibold text-gray-500 mb-2">Email: ${element.email}</p>
     </div>`
     container.appendChild(div)
    });
}
loadUser()