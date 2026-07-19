// Base de datos temporal
let datos = {
  "inventario": [
    { "id": "PROD001", "nombre": "Cuaderno Scribe", "stock": 50 },
    { "id": "PROD002", "nombre": "Lapicero Azul", "stock": 120 }
  ],
  "deudores": [
    { "nombre": "Juan Perez", "telefono": "982 054 321", "monto": "S/15.00" }
  ]
};

// Función para cambiar de pantalla
function irA(idPantalla) {
    document.getElementById('pantalla-login').classList.add('oculto');
    document.getElementById('pantalla-menu').classList.add('oculto');
    document.getElementById('pantalla-inventario').classList.add('oculto');
    document.getElementById('pantalla-ventas').classList.add('oculto');
    document.getElementById('pantalla-deudores').classList.add('oculto');
    
    document.getElementById(idPantalla).classList.remove('oculto');
}

// Función para simular el Inicio de Sesión de la Pantalla 1
function iniciarSesion() {
    const usuario = document.getElementById("login-usuario").value;
    const clave = document.getElementById("login-clave").value;

    if(usuario !== "" && clave !== "") {
        irA('pantalla-menu'); // Si escribe algo, entra al menú
    } else {
        alert("Por favor, escribe un usuario y una clave.");
    }
}

// Función para pintar el Inventario en la tabla
function cargarInventario() {
    const tablaInventario = document.getElementById("tabla-inventario-cuerpo");
    tablaInventario.innerHTML = ""; // Limpiamos la tabla primero
    datos.inventario.forEach(producto => {
        tablaInventario.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.stock}</td>
            </tr>
        `;
    });
}

// Función para AGREGAR un producto desde la app
function agregarProductoNuevo() {
    const nombre = document.getElementById("nuevo-nombre").value;
    const stock = document.getElementById("nuevo-stock").value;

    if(nombre !== "" && stock !== "") {
        // Añadimos el nuevo producto a nuestra lista
        datos.inventario.push({
            "id": "PROD" + (datos.inventario.length + 1),
            "nombre": nombre,
            "stock": parseInt(stock)
        });
        
        // Volvemos a cargar la tabla para que aparezca el nuevo
        cargarInventario();
        
        // Limpiamos las cajitas de texto
        document.getElementById("nuevo-nombre").value = "";
        document.getElementById("nuevo-stock").value = "";
    } else {
        alert("Llena ambos campos para agregar el producto.");
    }
}

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
                ${deudor.monto}
            </div>
        </div>
    `;
});

// Iniciamos cargando el inventario por defecto
cargarInventario();
