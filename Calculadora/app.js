function calcular() {
    let valor = document.getElementById("temperatura").value;
    let faren = parseFloat(valor);

    let celsius = (faren - 32 ) * 5/9 ;

    alert("La temperatura es " + celsius);
}