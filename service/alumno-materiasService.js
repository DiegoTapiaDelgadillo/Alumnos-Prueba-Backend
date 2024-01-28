const { models } = require('../libs/sequelize');

class alumnosMateriaServicios {
  constructor() {
    this.alumnosMateria = [];
  }

  async crear(data) {
    const newAlumno = await models.AlumnosMateria.create(data);
    return newAlumno;
  }

  async buscar() {
    const rta = await models.AlumnosMateria.findAll();
    return rta;
  }

  async buscarUno(id) {
    const alumno = await models.AlumnosMateria.findByPk(id, {
      include: ['materias'],
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
    const alumno = await models.AlumnosMateria.findByPk(id);
    await alumno.destroy();
    return { id };
  }
}
module.exports = alumnosMateriaServicios;
