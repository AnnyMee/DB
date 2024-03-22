use("school_db"); //создаём таблицу
// db.users.insertOne({ name: "Anny"}); // добавляем в таблицу

// db.users.insertMany([{ name: "Anny", age: 29, city: "Berlin"},
//                    {name: "Vladimir", age: 29, city: "Berlin"}]);

// db.users.find();
db.users.find().limit(2);