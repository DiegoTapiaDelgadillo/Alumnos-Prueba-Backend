const { models } = require('../libs/sequelize');

class materiasServicios {
  constructor() {
    this.materias = [];
  }

  async crear(data) {
    const newMateria = await models.Materias.create(data);
    return newMateria;
  }

  async buscar() {
    const rta = await models.Materias.findAll();
    return rta;
  }

  async buscarUno(id) {
    const materia = await models.Materias.findByPk(id);
    if (!materia) {
      console.log('La materia no existe');
    }
    return materia;
  }

  async actualizar(id, cambios) {
    const materia = await this.buscarUno(id);
    const rta = await materia.update(cambios);
    return rta;
  }

  async borrar(id) {
    const materia = await models.Materias.findByPk(id);
    await materia.destroy();
    return { id };
  }
}
module.exports = materiasServicios;
