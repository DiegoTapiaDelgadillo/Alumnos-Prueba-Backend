const { Model, DataTypes, Sequelize } = require('sequelize');

const MATERIAS_TABLE = 'materias';

const MateriasSchema = {
  id_materia: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre_materia: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
};

class Materias extends Model {
  static associate(models) {
    this.hasMany(models.AlumnosMateria, {
      as: 'alumno_materia',
      foreignKey: 'id_materia',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MATERIAS_TABLE,
      modelName: 'Materias',
      timestamps: false,
    };
  }
}

module.exports = { MATERIAS_TABLE, MateriasSchema, Materias };
