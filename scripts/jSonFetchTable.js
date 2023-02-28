const API_URL = "https://jsonplaceholder.typicode.com/users";

// fetch(API_URL)
// .then((response) => response.json())
// .then((response) => console.log(response[0]))

async function loadData () 
{

    const tableBody = document.getElementById ("tableBody");
    const request = await fetch (API_URL);
    const users = await request.json();

    for (let user of users ){
        const tableRow = document.createElement("tr")
        tableRow.id=`user_${user.id}`

        tableRow.innerHTML =`
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
        <td>
        <button onclick=deleteUser(${user.id})>
        Delete
        </button>
        </td>

        <td>
        <button onclick= ColorUser(${user.id})>Color </button>
        </td>

        <td>
        <button onclick= restoreUserDetails(${user.id})>Restore</button>
        </td>
        `

        tableBody.appendChild(tableRow.cloneNode(true));
    }

}



function deleteUser (id){
    const userRow = document.getElementById(`user_${id}`)
    userRow.classList.add("delete")
}

function ColorUser (id) {
    const userRow = document.getElementById(`user_${id}`)
    userRow.classList.add('color')
    
}

function restoreUserDetails (id) {
    const userRow = document.getElementById(`user_${id}`)
    const tableBody = document.getElementById ("tableBody");
tableBody.appendChild(userRow);
    
}