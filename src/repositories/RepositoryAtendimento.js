const ModelAtendimento = require('../models/ModelAtendimento');


class RepositoryPetShop {

  async GetAtendimento( id ) {
    return ModelAtendimento.findOne({
      where: {id }
    })
  }

  async GelAllAtendimento() {
    return ModelAtendimento.findAll();
  }


  async PostAtendimento(cachorro) {
    await ModelAtendimento.create(cachorro);
  }

  async PutAtendimentp(cachorro, id) {
    await ModelAtendimento.update(cachorro, {
      where: { id },
    });
  }

  async DeleteAtendimento(id) {
    await ModelAtendimento.destroy({
      where: { id },
    });
  }

  async GetAtendimentoForCachorro(id) {
    return ModelAtendimento.findAll({
      where: { id_cachorro : id }
    })
  }



}

module.exports = RepositoryPetShop;
