use("zoo_db");


// db.animals.insertMany([
//     {kind: "tiger", weight: 300, name: "Alan", predatory: true},
//     {kind: "penguin", weight: 2, name: "Kovalsky", predatory: true},
//     {kind: "chicken", weight: 1, name: "Cipa", predatory: false},
//     {kind: "shark", weight: 400, name: "Sharp", predatory: false},
//     {kind: "shark", weight: 450, name: "John", predatory: false},
//     {kind: "panda", weight: 200, name: "Po", predatory: false},
//    ]);
   
// db.animals.updateMany({kind: "shark"}, {$set: {predatory: true}}); //-- обновляем акул (теперь они predatory)

// db.animals.updateMany({}, {$inc: {weight: 3}}); //-- обновляем всех (теперь вес у всех животных +3)

// db.animals.updateMany({}, {$rename: {weight: "kg"}}); //-- поменяли имя таблицы с weight на kg

// db.animals.updateOne({kind:"tiger"}, {$push: {foods: "wolf"}}); //-- накормили одного тигра волком

// db.animals.updateMany({ predatory: true }, { $set: { foods: ["fish", "squid"] } }); //-- накормили всех predatory

// db.animals.updateOne({kind: "tiger"}, {$pull: {foods: "squid"}}); //-- забрали у тигра squid (только у одного)

// db.animals.updateOne({kind: "chicken"}, {$unset: {predatory: ""}}); //-- у курицы удалили поле predatory (только у одной)

// db.animals.updateOne({_id: ObjectId("65f8180b976615623c9d2875")},{$set: {name: "Kovalsky 2"}}); //-- поменяли имя одного пингвина

// const pinguin = db.animals.findOne({kind: "penguin"}, {_id: 1});

// db.animals.updateOne({_id: ObjectId(pinguin._id)}, {$set: {name: "Kovalsky"}});

// db.animals.deleteOne({kind: "shark"}); //-- удалили одну акулу
// db.animals.deleteMany({kind: "shark"}); //-- удалили всех акул

db.animals.find()