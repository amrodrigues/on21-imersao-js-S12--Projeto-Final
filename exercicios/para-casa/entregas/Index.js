const { registerMessage } = require('./Helpers');
const{ Carro , CarroAplicativo} = require('./Carro/Carro');
const {Estacionamento} = require('./Estacionamento/Estacionamento');
const {Vagas} = require('./Vagas/Vagas');
const register = require('./Registro');
const {CarroVaga} = require('./CarroVaga/CarroVaga');

registerMessage('initialTime', '');

carro1 = new Carro('Corsa', 'PQW1123');

CarroAplicativo0 = new CarroAplicativo();
CarroAplicativo1 = new CarroAplicativo('foto', 'Corsa', 'PQW9812', 'Anna') ;
CarroAplicativo2 = new CarroAplicativo('foto', 'Astra', 'XDE9412', 'Fernanda') ;
CarroAplicativo3 = new CarroAplicativo('foto', 'Punto', 'ABD5678', 'Carol') ;
CarroAplicativo4 = new CarroAplicativo('foto', 'Onix', 'ERD2108', 'Priscila') ;


CarroAplicativo1.validaCarroAplicativo(CarroAplicativo1);
CarroAplicativo1.validaCarroAplicativo(CarroAplicativo2);
CarroAplicativo1.validaCarroAplicativo(CarroAplicativo3);

CarroAplicativo1.validaCarroAplicativo(carro1);

const vagas1 = new Vagas(50,2,2,4);

const estacionamento1 = new Estacionamento('Guanabara' ,100);

const carroVaga1 = new CarroVaga (vagas1 , CarroAplicativo1);
const carroVaga2 = new CarroVaga (vagas1 , CarroAplicativo2);
const carroVaga3 = new CarroVaga (vagas1 , CarroAplicativo3);
const carroVaga4 = new CarroVaga (vagas1 , CarroAplicativo4);

carroVaga1.confirmaCarroVaga();
carroVaga2.confirmaCarroVaga();
carroVaga3.confirmaCarroVaga();
carroVaga1.removeCarroVaga();
carroVaga2.removeCarroVaga();

carroVaga4.confirmaCarroVaga();
vagas1.addVagaAplicativo(2);
carroVaga3.confirmaCarroVaga();

registerMessage('finalTime', '');
console.log(register)