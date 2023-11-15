const cuenta ={
    titular : "Alex",
    valorInicial: 0,
    añadirSaldo(agregarSaldo){
        this.valorInicial = this.valorInicial + agregarSaldo,
        document.write(`Su saldo es: ${this.valorInicial}`)
    },
    quitarSaldo(sustraerSaldo){
        this.valorInicial = this.valorInicial + sustraerSaldo,
        document.write(`Su saldo es: ${this.valorInicial}`)
    },


}
console.log(cuenta);
document.write(`<h1>Titular: ${cuenta.titular}</h1>`)

document.write(`<p>Valor inicial: ${cuenta.valorInicial}</p>`)
document.write(`<p>${cuenta.añadirSaldo()};<p>`)
document.write(`<p>${cuenta.quitarSaldo()};<p>`)

document.write(`<p>Su saldo actual es: ${cuenta.valorInicial}</p>`)