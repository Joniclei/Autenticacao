// importando o service
//const ServicePetShop = require('../services/ServicePetShop.js');

// criando uma instância do service
const service = new (require('../services/ServicePetShop.js'));
const serviceCliente = new (require('../services/ServiceCliente.js'));

// criando a classe do controller
class ControllerPetShop {
  // criando o método para pegar um cachorro
  //
  async PegarUmCachorro(req, res) {
    try {
      /*console.log('req.params', req.params.id);
      console.log('Controller: olha aqui', service, "ate aqui");
*/
      const resultUmcachorro = await service.PegarUmCachorro(req.params.id);
      res.status(200).json({
        aquiequalquercoisa: resultUmcachorro, // Certifique-se de que 'result' contenha os dados do cachorro
      });
    }
    catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });
    }
  }

  async PegarTodosOsCachorros(req, res) {
    try {
      console.log('Controller: PegarTodosOsCachorros');
      const resultTodosCahorros = await service.PegarTodosCachorros();
      res.status(200).json({
        aquiequalquercoisa: resultTodosCahorros, // Certifique-se de que 'result' contenha os dados do cachorro
      });

    }
    catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });
    }
  }

  async PegarOscachorrosCliente(req, res) {

    try {
      console.log('Controller: PegarOscachorrosCliente');
      const resultTodosCahorros = await service.PegarOscachorrosCliente(req.params.id);
      const cliente = await serviceCliente.PegarUmCliente(req.params.id);
      res.status(200).json({
        cliente: cliente,
        cachorros: resultTodosCahorros // Certifique-se de que 'result' contenha os dados do cachorro

      });
    }
    catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });
    }
  }

  async AdicionarCachorro(req, res) {
    try {
      console.log('Controller: AdicionarCachorro');
      const cachorro = req.body;
      await service.AdicionarCachorro(cachorro);
      res.status(200).json({
        message: 'Cachorro Adicionado com sucesso!'

      });

    } catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });

    }
  }

  async AtualizarCachorro(req, res) {
    try {
      console.log('Controller: AtualizarCachorro');
      const cachorro = req.body;
      const id = req.params.id;
      await service.AtualizarCachorro(cachorro, id);
      res.status(200).json({
        message: 'Cachorro Atualizado com sucesso!'

      });

    } catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });

    }
  }
  async DeleteCachorro(req, res) {
    try {
      console.log('Controller: DeleteCachorro');
      const id = req.params.id;
      await service.DeletarCachorro(id);
      res.status(200).json({
        message: 'Cachorro Deletado com sucesso!'

      });

    } catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });

    }
  }

}

module.exports = ControllerPetShop;
