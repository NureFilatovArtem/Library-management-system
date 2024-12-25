module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      book_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      title: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      author: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      genre: DataTypes.STRING,
      publish_year: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      price: { 
        type: DataTypes.FLOAT, 
        allowNull: false 
      },
    }, {
      tableName: 'books',
      timestamps: false,
    });
  
    return Book;
  };
  