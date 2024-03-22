use("cars_db");

// db.cars.insertMany([
//     {
//       _id: 1,
//       brand: "BMW",
//       price: 20000,
//       model: "X5",
//       year: 2015,
//       horsepower: 300
//     },
//     {
//       _id: 2,
//       brand: "Toyota",
//       price: 18000,
//       model: "Camry",
//       year: 2015,
//       horsepower: 250
//     },
//     {
//       _id: 3,
//       brand: "Mercedes",
//       price: 25000,
//       model: "E-Class",
//       year: 2017,
//       horsepower: 350
//     },
//     {
//       _id: 4,
//       brand: "Audi",
//       price: 22000,
//       model: "A4",
//       year: 2016,
//       horsepower: 280
//     },
//     {
//       _id: 5,
//       brand: "Ford",
//       price: 17000,
//       model: "Focus",
//       year: 2015,
//       horsepower: 200
//     },
//     {
//       _id: 6,
//       brand: "BMW",
//       price: 23000,
//       model: "X3",
//       year: 2018,
//       horsepower: 280
//     },
//     {
//       _id: 7,
//       brand: "Chevrolet",
//       price: 20000,
//       model: "Camaro",
//       year: 2017,
//       horsepower: 320
//     },
//     {
//       _id: 8,
//       brand: "Hyundai",
//       price: 21000,
//       model: "Elantra",
//       year: 2019,
//       horsepower: 200
//     },
//     {
//       _id: 9,
//       brand: "BMW",
//       price: 27000,
//       model: "M5",
//       year: 2019,
//       horsepower: 600
//     },
//     {
//       _id: 10,
//       brand: "Volkswagen",
//       price: 19000,
//       model: "Golf",
//       year: 2018,
//       horsepower: 180
//     }
//   ]);

// db.cars.aggregate([
//           {$group: {
//             _id: "$brand",
//             averagePrice: {$avg: "$price"},
//         }}
// ]);

// db.cars.aggregate([
//       {$group: {
//         _id: "$year",
//         averagePrice: {$avg: "$price"},
//     }}
// ]);

// db.cars.aggregate([
//       {$group: {
//         _id: "$brand",
//         maxHP: {$max: "$horsepower"},
//     }}
// ]);

// db.cars.aggregate([
//     {$sort: {price: 1}},
//     {$limit: 3}
// ]);

// db.cars.aggregate([
//      {$match: {brand: "BMW"}},
//      {$sort: {price: -1}},
//      {$limit: 3}
//  ]);

// db.cars.aggregate([
//     {$match: {brand: "BMW"}},
//     {$sample: { size: 1 }}
// ]);

// db.owners.insertMany([
//     {
//       owner: "Ivanov Ivan",
//       phone: "1234567",
//       cars: [1, 2, 10]
//     },
//     {
//       owner: "Petrov Petr",
//       phone: "2345678",
//       cars: [3, 9]
//     },
//     {
//       owner: "Sidorov Sidor",
//       phone: "3456789",
//       cars: [4, 5]
//     },
//     {
//       owner: "Smirnov Smir",
//       phone: "4567890",
//       cars: [6, 7, 8]
//     }
//   ]);

// db.owners.aggregate([
//     {
//       $lookup: {
//         from: "cars",
//         localField: "cars",
//         foreignField: "_id",
//         as: "cars"
//       }
//     }
//   ]);

// db.owners.aggregate([
//     {
//       $lookup: {
//         from: "cars",
//         localField: "cars",
//         foreignField: "_id",
//         as: "cars"
//       }
//     },
//     {
//       $match: { "cars.price": { $gt: 20000 } }
//     }
//   ]);

// db.owners.aggregate([
//     {
//       $lookup: {
//         from: "cars",
//         localField: "cars",
//         foreignField: "_id",
//         as: "cars"
//       }
//     },
//     {
//       $unwind: "$cars"
//     },
//     {
//       $match: { "cars.price": { $gt: 20000 } }
//     },
//     {
//       $group: {
//         _id: "$owner",
//         avgPrice: { $avg: "$cars.price" }
//       }
//     }
//   ]);