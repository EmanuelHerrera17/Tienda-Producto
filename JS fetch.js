document.getElementById('cargarUsuarios').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => {
        const tablaUsuarios = document.getElementById('tablaUsuarios');
        tablaUsuarios.innerHTML = ''; // Limpiar tabla
        data.forEach(usuario => {
            const fila = `
            <tr>
                <td>${usuario.name}</td>
                <td>${usuario.email}</td>
                <td>${usuario.company.name}</td>
            </tr>`;
            tablaUsuarios.innerHTML += fila;
        });
    })
    .catch(error => console.error('Error:', error));
});