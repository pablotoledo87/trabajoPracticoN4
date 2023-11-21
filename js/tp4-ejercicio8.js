class Personas{
    constructor(nombreParam, edadPAram,profesionParam){
        this.nombre = nombreParam;
        this.edad = edadPAram;
        this.profesion = profesionParam;

       this.saludar= function(){
            document.write(`hola! ${this.nombre}`);
       };
       this.despedirse= function(){
        document.write(`chau! ${this.nombre}`);
   };


    }
}
const Sebastian = new Personas(`Sebastian Toledo`, `38`, `Instrumentista quirurgico`)
console.log(Sebastian)
Personas.saludar();
Personas.despedirse();

const Miriam = new Personas(`Miriam Toledo`, `45`, `Modista`)

console.log(Miriam)
Personas.saludar();
Personas.despedirse();