const { Model, DataTypes, Sequelize } = require('sequelize');

const ALUMNOS_TABLE = 'alumnos';

const AlumnosSchema = {
  id_alumno: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre_alumno: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  apellido_alumno: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  correo_alumno: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  telefono_alumno: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
};

class Alumnos extends Model {
  static associate(models) {
    this.hasMany(models.AlumnosMateria, {
      as: 'alumno_materia',
      foreignKey: 'id_alumno',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ALUMNOS_TABLE,
      modelName: 'Alumnos',
      timestamps: false,
    };
  }
}

module.exports = { ALUMNOS_TABLE, AlumnosSchema, Alumnos };
