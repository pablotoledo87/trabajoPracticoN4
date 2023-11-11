const auto = {
    marca: "Ford",
    color: "gris",
    Modelo: "2018",
    Titular: "Toledo Juan Pablo",
    Encender: function(){
        Document.write("Auto encendido");
    },
    Apagar: function(){
        Document.write("Auto apagado");
    }
}
console.log(auto);

document.write(`<h1>Propietario: ${auto.Titular}</h1>`)
document.write(`<h3>Marca: ${auto.marca}</h3>`)
document.write(`<h3>Modelo: ${auto.Modelo}</h3>`)
document.write(`<h3>Color: ${auto.color}</h3>`)