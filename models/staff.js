module.exports = (sequelize, DataTypes) => {
    const Staff = sequelize.define('Staff', {
      staff_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      name: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      position: DataTypes.STRING,
      hire_date: { 
        type: DataTypes.DATE, 
        allowNull: false 
      },
    }, {
      tableName: 'staff',
      timestamps: false,
    });
  
    return Staff;
  };
  