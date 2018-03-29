var Servicios = {
    server: "http://google.cl",
    getSuma: function(a, b){
        return a + b;
    },
    setValor: setValorFn
};

function setValorFn( valor ){
    console.log(valor);
}

module.exports = Servicios;

