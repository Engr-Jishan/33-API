
// function(loadClick) {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => console.log(json))
// }

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data));
}

function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(fex => console.log(fex));
}

function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(albums => console.log(albums));
}