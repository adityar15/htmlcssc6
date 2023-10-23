const API_URL = "https://api.github.com/users"

window.addEventListener("load", ()=>{
    const form = document.querySelector("#search-form")
    form.addEventListener("submit", searchGithub)
})

function searchGithub(event)
{
    event.preventDefault()
    const formData = new FormData(event.target)
    const {username} = Object.fromEntries(formData.entries())

// checks for the blank username   
    if(username == "")
    {
        alert("Enter a valid Git username")
        return
    }

    fetch(`${API_URL}/${username}`).then( (response) => response.json() ).then(data =>{

        // checks for the blank as well as incorrect username from the server
        if(data.message && data.message == "Not Found")
        {
            alert("You entered a wrong username")
            return
        }

        const img = document.querySelector("#userimage")
        img.setAttribute("src", data.avatar_url)

        const h2 = document.querySelector("#name")
        h2.innerHTML = data.name

        const span = document.querySelector("#username")
        span.innerHTML = data.login

        const ul = document.querySelector("#content-list")
        ul.innerHTML = ""
        ul.appendChild(createListItem(`<span>Public Repos: </span> <span>${data.public_repos}</span>`))
        ul.appendChild(createListItem(`<span>Followers: </span> <span>${data.followers}</span>`))

    })
    
}

function createListItem(html)
{
    const li = document.createElement("li")
    li.innerHTML = html
    return li
}
