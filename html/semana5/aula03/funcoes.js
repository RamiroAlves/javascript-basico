function efetuarPagamento(total){
    if(total<= saldo){
        return Promise.resolve('Compra autorizada!');
    } else {
        return Promise.reject('Transação interrompida, saldo insuficiente.');
    }
}

let saldo = 100;

efetuarPagamento(200)
    .then(result => console.log('Promise resolved: ' + result))
    .catch(error => console.log('Promise reject: ' + error))

console.log('processando...');    