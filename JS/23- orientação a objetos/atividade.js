//crie a classe contaBancaria que possui os parâmetros agencia, numero, tipo e saldo check
//dentro da contaBancaria, crie o método get e setter do saldo check
//dentro da contaBancaria, crie o método sacar e depositar check
//crie uma classe filha chamada contaCorrente que possui todos os parâmetros da contaBancaria mais o parâmetro cartaoCredito check
//ainda em contaCorrente crie o método get e setter de cartaoCredito check
//crie uma classe filha chamada contaPoupanca que possui todos os parâmetros da contaBancaria check
//crie uma classe filha chamada contaUniversitaria que possui todos os parâmetros da contaBancaria check
//faça com que o método sacar de contaUniversitaria apenas seja possível sacar valores menores que 500 reais check

class contaBancaria{
    constructor (agencia, numero, tipo, saldo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = saldo
    }
    get saldo(){
       return console.log(`seu saldo atual é ${this._saldo}`)
    }
    set mudarSaldo(muda){
         this._saldo = muda
        return console.log(`seu novo saldo é ${this._saldo}`)
        
    }

    saque(numero){
        let saldoAtual = this._saldo
        saldoAtual = saldoAtual - numero
        this._saldo = saldoAtual
        return console.log(`saque de ${numero} saldo atual ${this._saldo}`)
    }

    deposito(numero){
        let saldoAtual = this._saldo
        saldoAtual = saldoAtual + numero
        this._saldo = saldoAtual
        return console.log(`deposito de${numero} saldo atual ${this._saldo}`)
    }

    get credito(){
        return console.log(`o saldo do seu cartão de credito é ${this.cartãoCredito}`)
    }

    set mudarCredito(muda){
        this.cartãoCredito = muda
        return console.log(`novo saldo do credito ${this.cartãoCredito}`)
    }

}

const renata = new contaBancaria(1010,40012,"salario", 950)
renata.saldo
renata.mudarSaldo = 1000
renata.saque(500)
renata.deposito(250)

class contacorrente extends contaBancaria{
    constructor(agencia, numero, tipo, saldo, cartãoCredito){
        super(agencia, numero, tipo, saldo)
        this.cartãoCredito = cartãoCredito
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero, tipo, saldo){
        super(agencia, numero, tipo, saldo)
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero, tipo, saldoUniversitario){
        super(agencia, numero, tipo)
        this._saldoUniversitario = saldoUniversitario
    }
    set saque(numero){
        if (numero > 500){
            console.log('contas universitarias não podem sacar mais de 500 reais')
            return
        }
        let saldoAtual = this._saldoUniversitario
        this._saldoUniversitario = saldoAtual - numero
        return console.log(`seu saque foi de ${numero} reais e seu saque atual é de ${this._saldoUniversitario}`)
    }
}

let universitario = new contaUniversitaria(4002,8922,'universitaria',800)
universitario.saque = 600
universitario.saque = 400