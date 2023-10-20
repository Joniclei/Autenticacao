const RepositoryPetShop = require('../repositories/RepositoryPetShop.js');

const repository = new RepositoryPetShop();

class ServicePetShop {

    // criando o método para pegar um cachorro
    async PegarUmCachorro(id) {

        /*if(!cachorros){
            throw new Error('Não foi enviada  para adicionar');
        }
         else if(!pessoa.nome){
            throw new Error('Não foi enviado o nome da pessoa');
        } else if(!pessoa.email){
            throw new Error('Não foi enviado o email da pessoa');
        } else if(!pessoa.senha){
            throw new Error('Não foi enviado o senha da pessoa');
        }
        */

        // passa para o repository o id do cachorro a ser pego
        return repository.PegarUmCachorro(id);

    }
    async PegarTodosCachorros(){

        return repository.PegarTodosCachorros();
    }

    async PegarOscachorrosCliente (id) {

         return repository.PegarOscachorrosCliente(id);
    }

    async AdicionarCachorro(cachorro) {

            /*if(!cachorro){
                throw new Error('Não foi enviada  para adicionar');
            }
            else if(!cachorro.nome){
                throw new Error('Não foi enviado o nome do cachorro');
            } else if(!cachorro.raca){
                throw new Error('Não foi enviado o raca do cachorro');
            } else if(!cachorro.idade){
                throw new Error('Não foi enviado o idade do cachorro');
            } else if(!cachorro.id_cliente){
                throw new Error('Não foi enviado o id_cliente do cachorro');
            }
            */

            return repository.CriarCachorro(cachorro);

    }

    async AtualizarCachorro(cachorro, id) {
        return repository.AtualizarCachorro(cachorro, id);
    }

    async DeletarCachorro(id) {
        return repository.DeletarCachorro(id);
    }


}

module.exports = ServicePetShop;
