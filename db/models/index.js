const { Materias, MateriasSchema } = require('./../models/materiasModel');
const { Alumnos, AlumnosSchema } = require('./../models/alumnosModel');
const {
  AlumnosMateria,
  AlumnosMateriaSchema,
} = require('./../models/alumnos-materiaModel');

function setupModels(sequelize) {
  Materias.init(MateriasSchema, Materias.config(sequelize));
  Alumnos.init(AlumnosSchema, Alumnos.config(sequelize));
  AlumnosMateria.init(AlumnosMateriaSchema, AlumnosMateria.config(sequelize));
  //assocites
  Materias.associate(sequelize.models);
  Alumnos.associate(sequelize.models);
  AlumnosMateria.associate(sequelize.models);
}

module.exports = setupModels;
