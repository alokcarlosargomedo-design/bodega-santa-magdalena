// Los datos que creamos en tu archivo datos.json
const datos = {
  "inventario": [
    { "id": "PROD001", "nombre": "Cuaderno Scribe", "stock": 50 },
    { "id": "PROD002", "nombre": "Lapicero Azul", "stock": 120 }
  ]
};

// Buscamos la tabla en la pantalla HTML
const tabla = document.getElementById("tabla-cuerpo");

// Pasito a pasito ponemos cada producto dentro de la tabla
datos.inventario.forEach(producto => {
    const fila = `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.stock}</td>
        </tr>
    `;
    tabla.innerHTML += fila;
});
