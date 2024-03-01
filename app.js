function capturarDatos(){
    const nombrePro = document.getElementById('nombre').value;
    const precioPro = document.getElementById('precio').value;
    const categoAli = document.getElementById('Alimentos').value;
    const categoObj = document.getElementById('Objetos').value;
    const categoCom = document.getElementById('Computadoras').value;

    

    const Todos = nombrePro+precioPro+categoAli+categoObj+categoCom;
    console.log(Todos)
}