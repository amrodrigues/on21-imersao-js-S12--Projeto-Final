const { registerMessage } = require('../Helpers');

class Vagas{
    constructor(vagas ,vagaAplicativo, vagaBloqueada){
        this.vagas = vagas;
       this.vagaAplicativo = vagaAplicativo;
       this.vagaBloqueada = vagaBloqueada;

       registerMessage('qtdVaga', ` A quantidade de vagas para Aplicativo é ${this.vagaAplicativo}`)
       
    }

   
    updateVagaAplicativo()
    {
        if (this.vagaAplicativo != 0){
          return this.vagaAplicativo-- ;
    }
    else
    {
        registerMessage('qtdVaga', ` Não há vagas disponível para o carro de Aplicativo`)
    
         return 'N'}
    }

    addVagaAplicativo(qtdVaga)
    {
        if (typeof qtdVaga === 'string' || typeof qtdVaga === 'boolean') {
            throw new Error("O campo quantidade não é numérico");
          }
          else{
        return this.vagaAplicativo = qtdVaga; }
    }
    validaVagaAplicativo(){
                                                                                                                                                                                                                                                                                                                if (this.vagaAplicativo != 0){
            return 'S'
        }
        else
        { 
            registerMessage('vaga', `Não tem vaga de Estacionamento disponível no momento`);
  
            return 'N'
      
    }
    }
   }
   
   module.exports = { Vagas };