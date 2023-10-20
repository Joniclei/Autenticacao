const service = new (require('../services/ServiceAtendimento.js'));

const serviceCachorro = new (require('../services/ServicePetShop.js'));


class ControllerAtendimento {
  // criando o método para pegar um cachorro
  //
  async GetAtendimento(req, res) {
    try {
      const resultUmAtendimento = await service.GetAtendimento(req.params.id);
      const resultCachorro = await serviceCachorro.PegarUmCachorro(req.params.id);
      res.status(200).json({
        Consulta: resultUmAtendimento,
        Cachorro: resultCachorro.nome,
         //
      });
    }
    catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });
    }
  }

  async GelAllAtendimento(req, res) {
    try {
      console.log('Controller: Pegar Todos os Atendimento');
      const resultTodosAtendimentos = await service.GetAllAtendimento();
      res.status(200).json({
        Consulta: resultTodosAtendimentos,
      });

    }
    catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });
    }
  }


  async PostAtendimento(req, res) {
    try {
      console.log('Controller: AdicionarAtendimento');
      const atendimento = req.body;
      await service.PostAtendimento(atendimento);
      res.status(200).json({
        message: 'Atendimento Adicionado com sucesso!'

      });

    } catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });

    }
  }

  async PutAtendimento(req, res) {
    try {
      console.log('Controller: PutAtendimento');
      const atendimento = req.body;
      const id = req.params.id;
      await service.PutAtendimento(atendimento, id);
      res.status(200).json({
        message: 'Atendimento Atualizado com sucesso!'

      });

    } catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });

    }
  }
  async DeleteAtendimento(req, res) {
    try {
      console.log('Controller: DeleteAtendimento');
      const id = req.params.id;
      await service.DeleteAtendimento(id);
      res.status(200).json({
        message: 'Atendimento Deletado com sucesso!'

      });

    } catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });

    }
  }

  async GetAtendimentoForCachorro(req, res) {
    try {
      console.log('Controller: GetAtendimentoForCachorro');
      const resultTodosAtendimentos = await service.GetAtendimentoForCachorro(req.params.id );
      const cachorro = await serviceCachorro.PegarUmCachorro(req.params.id);
      res.status(200).json({
        cachorro: cachorro,
        aquiequalquercoisa:resultTodosAtendimentos,
      });

    }
    catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });
    }
  }

}

module.exports = ControllerAtendimento;
