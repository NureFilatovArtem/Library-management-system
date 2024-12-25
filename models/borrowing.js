module.exports = (sequelize, DataTypes) => {
    const Borrowing = sequelize.define('Borrowing', {
      borrow_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      reader_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
      },
      book_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
      },
      borrow_date: { 
        type: DataTypes.DATE, 
        allowNull: false 
      },
      return_date: DataTypes.DATE,
    }, {
      tableName: 'borrowings',
      timestamps: false,
    });
  
    return Borrowing;
  };
  