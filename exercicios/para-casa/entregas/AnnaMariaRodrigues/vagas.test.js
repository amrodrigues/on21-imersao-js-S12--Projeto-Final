const {Vagas} = require('./vagas')


describe ("Validar a Classe Vaga " , () =>{
    const vagas1 = new Vagas(50,2,2,4);


    test("verificar se a vaga reservada para o carro de aplicativo está livre", () => {
        const vagaLiberada = 'S';
        expect(vagas1.validaVagaAplicativo()).toEqual(vagaLiberada);
      });


      test("verificar se a vaga reservada para o carro de aplicativo está bloqueado", () => {
        const vagas2 = new Vagas(50,0,2,4);
        const vagaLiberada = 'N';
        expect(vagas2.validaVagaAplicativo()).toEqual(vagaLiberada);
      });

      test("atualiza a quantidade de vagas para o carro de aplicativo, retirando uma vaga , para 1", () => {
        vagas1.updateVagaAplicativo();
        expect(vagas1.updateVagaAplicativo()).toEqual(1);
      });


      test("verificar se tem vagas de aplicativo disponível, sendo que todas já foram utilizada, retornando 'N'", () => {
        const vagaLiberada = 'N';
        vagas1.updateVagaAplicativo();
        vagas1.updateVagaAplicativo();
        
        expect(vagas1.updateVagaAplicativo()).toEqual(vagaLiberada);
      });

      test("atualiza a quantidade de vagas para o carro de aplicativo,adicionando novas vagas, retornando 2", () => {
        //vagas1.updateVagaAplicativo();
        expect(vagas1.addVagaAplicativo(2)).toEqual(2);
      });

      test("atualiza a quantidade de vagas para o carro de aplicativo, adicionando uma string, retornando O campo quantidade não é numérico", () => {
        //vagas1.updateVagaAplicativo();
        expect(() => vagas1.addVagaAplicativo('Teste')).toThrow("O campo quantidade não é numérico");
      });
    });

 

  