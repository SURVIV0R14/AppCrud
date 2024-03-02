function mostrarDatosPro() {
    const nombrePro = document.getElementById('nombre').value;
    const precioPro = document.getElementById('precio').value;
    const catePro = document.getElementsByName('Cat');

    let categoriaSeleccionada;
    catePro.forEach(function(categoria) {
        if (categoria.checked) {
            categoriaSeleccionada = categoria.value;
        }
    });

    let tabla = document.getElementById("tablaProId");
    let nuevaFila = tabla.insertRow(-1);

    let celdaNombre = nuevaFila.insertCell(0);
    let celdaPrecio = nuevaFila.insertCell(1);
    let celdaCat = nuevaFila.insertCell(2);
    celdaNombre.textContent = nombrePro;
    celdaPrecio.textContent = "$ "+precioPro;
    celdaCat.textContent = categoriaSeleccionada;
}
function mostrarDatosCli() {
    const nombreCli = document.getElementById('nomClient').value;
    const apeCli = document.getElementById('apeClient').value;
    const edadCli = document.getElementById('edadClient').value;
    const correoCli = document.getElementById('emailClient').value;

    let tabla = document.getElementById("tablaCliId");
    let nuevaFila = tabla.insertRow(-1);

    let celdaNombre = nuevaFila.insertCell(0);
    let celdaApe = nuevaFila.insertCell(1);
    let celdaedad = nuevaFila.insertCell(2);
    let celdacorreo = nuevaFila.insertCell(3);
    celdaNombre.textContent = nombreCli;
    celdaApe.textContent = apeCli;
    celdaedad.textContent = edadCli;
    celdacorreo.textContent = correoCli;
}
function mostrarDatosPe() {
    const codPe = document.getElementById('codPed').value;
    const direcPe = document.getElementById('DirecPed').value;
    const estaPe = document.getElementsByName('estado');

    let opcionSeleccionada;
    estaPe.forEach(function(estadi) {
        if (estadi.checked) {
            opcionSeleccionada = estadi.value;
        }
    });

    const fechaPe = document.getElementById('datePe').value;
    const LugarPe = document.getElementById('lugarPe').value;

    let tabla = document.getElementById('tablaPeId');
    let nuevaFila = tabla.insertRow(-1);

    let celdaCod = nuevaFila.insertCell(0);
    let celdaDirec = nuevaFila.insertCell(1);
    let celdaEsta = nuevaFila.insertCell(2);
    let celdaFecha = nuevaFila.insertCell(3);
    let celdaLugar = nuevaFila.insertCell(4);
    celdaCod.textContent = "#"+codPe;
    celdaDirec.textContent = direcPe;
    celdaFecha.textContent = fechaPe;
    celdaLugar.textContent = LugarPe;

    celdaEsta.textContent = opcionSeleccionada;
    if (opcionSeleccionada === 'ENTREGADO') {
        celdaEsta.classList.add('Entregado');
    } else if (opcionSeleccionada === 'NO ENTREGADO') {
        celdaEsta.classList.add('noEntregado');
    }
}
