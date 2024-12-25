Library Management System
Цей проєкт є веб-додатком для управління бібліотекою. Він дозволяє переглядати книги, читачів, працівників, обробляти дані та додавати нову інформацію.

🛠 Стек технологій
Node.js – серверна частина
Express.js – фреймворк для побудови RESTful API
HTML/CSS/JavaScript – клієнтська частина
PostgreSQL/MySQL – база даних

📋 Вимоги до запуску
Для запуску проєкту необхідно мати:

Node.js (версія 14 або вище) – Завантажити Node.js
Git – Завантажити Git
Postman (опціонально) для перевірки API – Завантажити Postman
Один з середовищ розробки (IntelijIdea, VS code, або інш.)

🚀 Інструкція із запуску
1. Клонування проєкту
Склонуйте репозиторій у свою локальну систему:
git clone https://github.com/your-username/library-management-system.git

Перейдіть у папку проекту
cd library-management-system

2. Встановлення залежностей
У кореневій папці проекту запустіть команду:
npm install

Налаштування бази даних

Створіть базу даних у вашому SQL-сервері (наприклад, MySQL або PostgreSQL).
В цьому проекті використовувася PostgreSQL.
Використайте SQL-файл, який знаходиться у папці /database (якщо є).

Налаштуйте доступ до бази даних у файлі .env
DB_HOST=localhost
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_PORT=5432

4. Запуск серверної частини (Back-End)
Запустіть сервер:
npm run dev або npm start

 Сервер буде доступний за адресою:
 http://localhost:3000 (/books ; /borrowings ; /readers ; /staff )
Приклад:
http://localhost:3000/books
Тепер можете відправити будь який HTTP request на сервер за допомогою Postman.

5. Запуск клієнтської частини (Front-End)
Для запуску клієнтської частини скористайтеся Live Server або відкрийте файл index.html у браузері.
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Author:
Artem Filatov
Student of Karel de Grote Hogeschool, Kharkiv National University of Radioelectronics (Computer Science)


