const { CarroAplicativo } = require('../Carro/Carro');
const { Vagas } = require('../Vagas/Vagas');
const { registerMessage } = require('../Helpers');

class CarroVaga {
    constructor(vaga, carroAplicativo) {
        if (vaga instanceof Vagas && carroAplicativo instanceof CarroAplicativo) {
            this.vaga = vaga;
            this.carroAplicativo = carroAplicativo;

        }
        else {
            return 'Um dos parâmetros não está correto'
        }
    }

    confirmaCarroVaga() {
        if (this.vaga.validaVagaAplicativo() === 'S') {
            registerMessage('vaga', `O carroAplicativo ${this.carroAplicativo.placa}  foi adicionado ao Estacionamento`);
            this.vaga.updateVagaAplicativo();
            registerMessage('qtdVaga', ` A quantidade de vagas para Aplicativo é ${this.vaga.vagaAplicativo}`)
            return true;
        }
    }
    removeCarroVaga() {
            registerMessage('vaga', `O carroAplicativo ${this.carroAplicativo.placa}  saiu do Estacionamento`);
            this.vaga.addVagaAplicativo(+1);
            registerMessage('qtdVaga', ` A quantidade de vagas para Aplicativo é ${this.vaga.vagaAplicativo}`)
            return true;
     
    }

}



module.exports = { CarroVaga };