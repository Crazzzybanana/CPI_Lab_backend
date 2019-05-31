'use strict';
module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define('status', {
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING
  }, {});
  status.associate = function(models) {
    status.belongsTo(models.act);
  };
  return status;
};
