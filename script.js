// Nuestra base de datos local simulada basada en tu JSON
const datos = {
  "inventario": [
    { "id": "PROD001", "nombre": "Cuaderno Scribe", "stock": 50 },
    { "id": "PROD002", "nombre": "Lapicero Azul", "stock": 120 }
  ],
  "deudores": [
    { "nombre": "Juan Perez", "telefono": "982 054 321", "monto": "S/15.00" },
    { "nombre": "Maria Fernandez", "telefono": "912 345 678", "monto": "S/8.50" }
  ]
};

// Función mágica pasito a pasito para cambiar de pantalla
function irA(idPantalla) {
    // Ocultamos todas las pantallas primero
    document.getElementById('pantalla-menu').classList.add('oculto');
    document.getElementById('pantalla-inventario').classList.add('oculto');
    document.getElementById('pantalla-ventas').classList.add('oculto');
    document.getElementById('pantalla-deudores').classList.add('oculto');
    
    // Mostramos solo la pantalla que queremos abrir
    document.getElementById(idPantalla).classList.remove('oculto');
}

// Cargar Datos del Inventario en la tabla
const tablaInventario = document.getElementById("tabla-inventario-cuerpo");
datos.inventario.forEach(producto => {
    tablaInventario.innerHTML += `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.stock}</td>
        </tr>
    `;
});

// Cargar Datos de los Deudores
const contenedorDeudores = document.getElementById("lista-deudores");
document.getElementById("contador-deudores").innerText = datos.deudores.length;

datos.deudores.forEach(deudor => {
    contenedorDeudores.innerHTML += `
        <div class="tarjeta-deudor">
            <div>
                <strong>${deudor.nombre}</strong><br>
                <small style="color:gray;">Telf: ${deudor.telefono}</small>
            </div>
            <div style="text-align:right; color: red; font-weight:bold;">
                ${deudor.monto}<br><small style="color:gray; font-weight:normal;">Pendiente</small>
            </div>
        </div>
    `;
});
