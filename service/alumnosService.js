const { models } = require('../libs/sequelize');

class alumnosServicios {
  constructor() {
    this.alumnos = [];
  }

  async crear(data) {
    const newAlumno = await models.Alumnos.create(data);
    return newAlumno;
  }

  async buscar() {
    const rta = await models.Alumnos.findAll();
    return rta;
  }

  async buscarUno(id) {
    const alumno = await models.Alumnos.findByPk(id, {
      include: ['alumno_materia'],
    });
    if (!alumno) {
      console.log('La materia no existe');
    }
    return alumno;
  }

  async actualizar(id, cambios) {
    const alumno = await this.buscarUno(id);
    const rta = await alumno.update(cambios);
    return rta;
  }

  async borrar(id) {
    const alumno = await models.Alumnos.findByPk(id);
    await alumno.destroy();
    return { id };
  }
}
module.exports = alumnosServicios;
