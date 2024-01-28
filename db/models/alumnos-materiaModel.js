const { Model, DataTypes, Sequelize } = require('sequelize');
const { MATERIAS_TABLE } = require('./materiasModel');
const { ALUMNOS_TABLE } = require('./alumnosModel');

const ALUMNOS_MATERIA_TABLE = 'alumnos_materias';

const AlumnosMateriaSchema = {
  id_alumno_materia: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_materia: {
    field: 'id_materia',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: MATERIAS_TABLE,
      key: 'id_materia',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  id_alumno: {
    field: 'id_alumno',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: ALUMNOS_TABLE,
      key: 'id_alumno',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class AlumnosMateria extends Model {
  static associate(models) {
    this.belongsTo(models.Alumnos, {
      as: 'alumno',
      foreignKey: 'id_alumno',
    });
    this.belongsTo(models.Alumnos, {
      as: 'materia',
      foreignKey: 'id_materia',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ALUMNOS_MATERIA_TABLE,
      modelName: 'AlumnosMateria',
      timestamps: false,
    };
  }
}

module.exports = {
  ALUMNOS_MATERIA_TABLE,
  AlumnosMateriaSchema,
  AlumnosMateria,
};
