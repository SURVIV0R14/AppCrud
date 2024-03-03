var dataList = [];
var codePedidoForm = "";

function mostrarDatosPro() {
    const nombrePro = document.getElementById('nombre').value;
    const precioPro = document.getElementById('precio').value;
    const catePro = document.getElementsByName('Cat');

    let categoriaSeleccionada;
    catePro.forEach(function (categoria) {
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
    celdaPrecio.textContent = "$ " + precioPro;
    celdaCat.textContent = categoriaSeleccionada;

    document.getElementById('nombre').value = "";
    document.getElementById('precio').value = "";

    for (var i = 0; i < catePro.length; i++) {
        catePro[i].checked = false;
    }
}
function guardarDatosCli() {
    nombreCli = document.getElementById('nomClient').value;
    apeCli = document.getElementById('apeClient').value;
    edadCli = document.getElementById('edadClient').value;
    correoCli = document.getElementById('emailClient').value;

    this.dataList.push({
        nomClix: nomClient,
        apeClix: apeClient,
        edadClix: edadClient,
        emailClix: emailClient
    });
    this.insertarLineaCli(nomClient, apeClient, edadClient, emailClient);
}

function insertarLineaCli(nomClient, apeClient, edadClient, emailClient) {
    let tabla = document.getElementById("tablaCliId");
    let nuevaFila = tabla.insertRow(-1);

    nuevaFila.addEventListener('click', function () {

        document.getElementById('codPed').value = nomClient;
        document.getElementById('DirecPed').value = apeClient;
        document.getElementById('datePe').value = edadClient;
        document.getElementById('lugarPe').value = emailClient;

    });

    let celdaNombre = nuevaFila.insertCell(0);
    let celdaApe = nuevaFila.insertCell(1);
    let celdaedad = nuevaFila.insertCell(2);
    let celdacorreo = nuevaFila.insertCell(3);
    celdaNombre.textContent = nomClient;
    celdaApe.textContent = apeClient;
    celdaedad.textContent = edadClient;
    celdacorreo.textContent = emailClient;

    document.getElementById('nomClient').value = "";
    document.getElementById('apeClient').value = "";
    document.getElementById('edadClient').value = "";
    document.getElementById('emailClient').value = "";
}


function guardarDatosPe(codPe, direcPe, estaPe, opcionSeleccionada, fechaPe, LugarPe) {
    codPe = document.getElementById('codPed').value;
    direcPe = document.getElementById('DirecPed').value;
    estaPe = document.getElementsByName('estado');
    //let codPedido = mifuncion();

    estaPe.forEach(function (estadi) {
        if (estadi.checked) {
            opcionSeleccionada = estadi.value;
        }
    });

    fechaPe = document.getElementById('datePe').value;
    LugarPe = document.getElementById('lugarPe').value;

    this.dataList.push({
        codPex: codPe,
        DirecPedx: direcPe,
        estadox: opcionSeleccionada,
        datePex: fechaPe,
        lugarPex: LugarPe,
        //codPedidox:codPedido
    });
    this.insertarLineaPe(codPe, direcPe, fechaPe, LugarPe, opcionSeleccionada, estaPe);
}

function insertarLineaPe(codPe, direcPe, fechaPe, LugarPe, opcionSeleccionada, estaPe) {

    let tabla = document.getElementById('tablaPeId');
    let nuevaFila = tabla.insertRow(-1);

    nuevaFila.addEventListener('click', function () {

        document.getElementById('codPed').value = codPe;
        document.getElementById('DirecPed').value = direcPe;
        let listRadio = document.getElementsByName('estado');
        listRadio.forEach(function (radiob) {
            if (radiob.value === opcionSeleccionada) {
                radiob.checked = true;
            }
        });

        document.getElementById('datePe').value = fechaPe;
        document.getElementById('lugarPe').value = LugarPe;

    });



    let celdaCod = nuevaFila.insertCell(0);
    let celdaDirec = nuevaFila.insertCell(1);
    let celdaEsta = nuevaFila.insertCell(2);
    let celdaFecha = nuevaFila.insertCell(3);
    let celdaLugar = nuevaFila.insertCell(4);
    celdaCod.textContent = "#" + codPe;
    celdaDirec.textContent = direcPe;
    celdaFecha.textContent = fechaPe;
    celdaLugar.textContent = LugarPe;

    celdaEsta.textContent = opcionSeleccionada;
    if (opcionSeleccionada === 'ENTREGADO') {
        celdaEsta.classList.add('Entregado');
    } else if (opcionSeleccionada === 'NO ENTREGADO') {
        celdaEsta.classList.add('noEntregado');
    }

    document.getElementById('codPed').value = "";
    document.getElementById('DirecPed').value = "";
    document.getElementById('datePe').value = "";
    document.getElementById('lugarPe').value = "";

    for (var i = 0; i < estaPe.length; i++) {
        estaPe[i].checked = false;
    }

    console.log(dataList)
}


function guardarPe(row) {
    let codPe = "";
    let direcPe = "";
    let estaPe = "";
    let fechaPe = "";
    let LugarPe = "";
    let opcionSeleccionada = "";

    if (row) {
        codPe = row.codPex;
        direcPe = row.DirecPedx;
        estaPe = row.estadox;
        fechaPe = row.datePex;
        LugarPe = row.lugarPex;
        opcionSeleccionada = row.estadox;
        this.insertarLineaPe(codPe, direcPe, fechaPe, LugarPe, opcionSeleccionada, estaPe);
    } else {
        this.guardarDatosPe(codPe, direcPe, estaPe, opcionSeleccionada, fechaPe, LugarPe);

    }
    // this.insertarLinea(codPe,direcPe,fechaPe,LugarPe,opcionSeleccionada,estaPe);
}

function setData() {
    let tabla = document.getElementById('tablaPeId');
    var filas = tabla.querySelectorAll('tr:not(:first-child)');

    filas.forEach(function (fila) {
        fila.remove();
    });

    for (let i = 0; i < this.dataList.length; i++) {

        this.mostrarDatosPe(this.dataList[i]);


    }
}



