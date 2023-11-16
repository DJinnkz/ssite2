

// const list = document.getElementById('list')
const list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener('input', (event) => {
    console.log(event.target.value)

    const value = event.target.value.toLowerCase()

    const filteredUsers = USERS.filter((user) => user.name.toLowerCase().includes(value))

    render(filteredUsers)



})



// function hideAddressBar() {
//     if(!window.location.hash) {
//       if(document.height < window.outerHeight)
//         document.body.style.height = (window.outerHeight + 50) + 'px';
//       setTimeout( function(){ 
//           window.scrollTo(0, 1); 
//           document.body.style.height = 'auto'; 
//         }, 50 );
//     }
//   }

async function start() {

    //hideAddressBar()

    list.innerHTML = 'loading...'
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        // setTimeout(() => {
        console.log('timeout')
        USERS = data
        render(data)
        // }, 2000)

    } catch (error) {
        list.style.color = 'red'
        list.innerHTML = error.message
    }
}


function render(users = []) {

    if (users.length === 0) {
        list.innerHTML = 'Not match'
        return
    }

    try {
        const html = users.map(toHTML).join('')
        list.innerHTML = html

    } catch (error) {
        console.log(error.message)
    }
}


function toHTML(user) {
    return `<li class="list-group-item">${user.name}</li>`
}


start()


