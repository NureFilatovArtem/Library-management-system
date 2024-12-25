module.exports = (sequelize, DataTypes) => {
    const Reader = sequelize.define('Reader', {
      reader_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      name: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
      },
    }, {
      tableName: 'readers',
      timestamps: false,
    });
  
    return Reader;
  };
  