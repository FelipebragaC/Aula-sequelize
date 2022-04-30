'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Turma, { foreignKey: 'docente_id' })
      Pessoas.hasMany(models.Matriculas, { foreignKey: 'estudante_id' });
    
  }
}
Pessoas.init({
  Nome: DataTypes.STRING,
  Ativo: DataTypes.BOOLEAN,
  Email: DataTypes.STRING,
  Role: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Pessoas',
});
return Pessoas;
};