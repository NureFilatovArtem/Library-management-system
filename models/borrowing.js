module.exports = (sequelize, DataTypes) => {
    const Borrowing = sequelize.define(
      'Borrowing',
      {
        borrow_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        reader_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'readers', // Имя таблицы
            key: 'reader_id', // Поле внешнего ключа
          },
        },
        book_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'books', // Имя таблицы
            key: 'book_id', // Поле внешнего ключа
          },
        },
        borrow_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        return_date: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'borrowings',
        timestamps: false,
      }
    );
  
    // Определение связей
    Borrowing.associate = (models) => {
      Borrowing.belongsTo(models.Reader, {
        foreignKey: 'reader_id',
        as: 'reader',
      });
      Borrowing.belongsTo(models.Book, {
        foreignKey: 'book_id',
        as: 'book',
      });
    };
  
    return Borrowing;
  };