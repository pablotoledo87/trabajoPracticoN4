class Personas{
    constructor(nombreParam, edadPAram,profesionParam){
        this.nombre = nombreParam;
        this.edad = edadPAram;
        this.profesion = profesionParam;

       this.saludar= function(){
            document.write(`<h2>hola! ${this.nombre}</h2>`);
       };
       this.despedirse= function(){
        document.write(`<p>chau! ${this.nombre}</p>`);
   };


    }
}
const Sebastian = new Personas(`Sebastian Toledo`, `38`, `Instrumentista quirurgico`)
console.log(Sebastian)
Sebastian.saludar();
Sebastian.despedirse();

const Miriam = new Personas(`Miriam Toledo`, `45`, `Modista`)

console.log(Miriam)
Miriam.saludar();
Miriam.despedirse();