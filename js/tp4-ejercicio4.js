class Producto{
    constructor(codigoParam,nombreParam, precioParam){
        this.codigo = codigoParam;
        this.nombre = nombreParam;
        this.precio = precioParam;

        
    }
    mostrarDatos(){
        document.write(`<h2>Producto: ${this.nombre}</h2>
        <ul>
        <li>Codigo: ${this.codigo}</li>
        <li>Precio: ${this.precio}</li>
        </ul>`)
    }
}
const CocaCola = new Producto(`12345`, `Coca Cola`, `$1000`);
const Fanta = new Producto(`246810`, `Fanta`, `$1100`);
const Sprite = new Producto(`54321`, `Sprite`, `$1200`);

CocaCola.mostrarDatos();
Fanta.mostrarDatos();
Sprite.mostrarDatos();