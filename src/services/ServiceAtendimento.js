const RepositoryAtendimento = require('../repositories/RepositoryAtendimento.js');

const repository = new RepositoryAtendimento();

class ServiceAtendimento {

    async GetAtendimento(id) {

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
        return repository.GetAtendimento(id);

    }
    async GetAllAtendimento(){

        return repository.GelAllAtendimento();
    }


    async PostAtendimento(atendimento) {

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

            return repository.PostAtendimento(atendimento);

    }

    async PutAtendimento(atendimento, id) {
        return repository.PutAtendimentp(atendimento, id);
    }

    async DeleteAtendimento(id) {
        return repository.DeleteAtendimento(id);
    }

    async GetAtendimentoForCachorro(id) {
        return repository.GetAtendimentoForCachorro(id);
    }


}

module.exports = ServiceAtendimento;
