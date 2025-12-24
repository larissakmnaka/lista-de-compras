const input = document.querySelector("input")
const form = document.querySelector("form")
const ul = document.querySelector(".list")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(input.value)
    
    ul.innerHTML = ul.innerHTML + `<li class="list-item">
                                        <span class="checkbox"></span>
                                        <span class="item-description">${input.value}</span>  
                                        <i class="trash fa-regular fa-trash-can"></i>              
                                    </li>`

    input.value = ""
})