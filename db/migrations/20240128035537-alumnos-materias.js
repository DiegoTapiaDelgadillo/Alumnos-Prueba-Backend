'use strict';

const { MateriasSchema, MATERIAS_TABLE } = require('./../models/materiasModel');
const { AlumnosSchema, ALUMNOS_TABLE } = require('./../models/alumnosModel');
const {
  AlumnosMateriaSchema,
  ALUMNOS_MATERIA_TABLE,
} = require('./../models/alumnos-materiaModel');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(MATERIAS_TABLE, MateriasSchema);
    await queryInterface.createTable(ALUMNOS_TABLE, AlumnosSchema);
    await queryInterface.createTable(
      ALUMNOS_MATERIA_TABLE,
      AlumnosMateriaSchema
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable(MATERIAS_TABLE);
    await queryInterface.dropTable(ALUMNOS_TABLE);
    await queryInterface.dropTable(ALUMNOS_MATERIA_TABLE);
  },
};
