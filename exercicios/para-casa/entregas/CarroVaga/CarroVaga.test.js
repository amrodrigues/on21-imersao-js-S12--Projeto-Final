const { CarroVaga } = require('./CarroVaga');
const { Carro, CarroAplicativo } = require('../Carro/Carro');
const { Vagas } = require('../Vagas/Vagas');


describe("Validar a Classe CarroVaga ", () => {
  const CarroAplicativo1 = new CarroAplicativo('foto', 'Corsa', 'PQW9812', 'Anna');
  const vaga1 = new Vagas(50, 2, 2, 4);
  const carro1 = new Carro('Corsa', 'PQW1123');
  const carroVaga1 = new CarroVaga(vaga1, CarroAplicativo1)


  test("verificar se vaga1 é instância da Class Vaga , retornando true", () => {
    expect(vaga1 instanceof Vagas).toBe(true);

  });

  test("verificar se CarroAplicativo1 é instância da Class CarroAplicativo , retornando true", () => {
    expect(CarroAplicativo1 instanceof CarroAplicativo).toBe(true);

  });

  test("verificar se carroVaga2 é um objeto CarroVaga, passando o carro comum, retornando {}}", () => {
    const carroVaga2 = new CarroVaga(vaga1, carro1)
    expect(carroVaga2).toEqual({});
  });

  test("verificar se o método confirmaCarroVaga , retornando true", () => {
    expect(carroVaga1.confirmaCarroVaga()).toBe(true);

  });
 
  
});



