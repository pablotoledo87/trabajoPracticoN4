class Rectangulo{
    constructor(altoParam, anchoParam){
        this.alto = altoParam;
        this.ancho= anchoParam;

        this.perimetro = function(){
            this.perimetro = this.alto *4;
        };
        this.area = function(){
            this.area = this.alto * this.ancho;
        };

    }
}
