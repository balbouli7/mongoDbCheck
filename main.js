// db.contactlist.insertMany([
//     { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
//     { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
//     { lastName: "Emilie", firstName: "Brouge", email: "emilie.b@gmail.com", age: 40 },
//     { lastName: "Alex", firstName: "Brown", age: 4 },
//     { lastName: "Denzel", firstName: "Washington", age: 3 }
//   ]);
  
// var one =db.contactlist.find({_id:ObjectId("676f414c739f10282c79a1b6")})
// print(one)

// var adult =db.contactlist.find({age:{$gt:18}})
// print(adult)

// var ahAdult = db.contactlist.find({
//     age: { $gt: 18 },
//     $or: [
//       { firstName:"ah"},
//       { lastName:"ah"}
//       ]
//     });
// print(ahAdult)

// var up= db.contactlist.updateOne(
//     {"firstName":"Seif"},
//     {$set:{
//         firstName:"Anis"
//     }}
// )
// print(up)

// var up= db.contactlist.findOneAndUpdate(
//     {"firstName":"Seif"},
//     {$set:{
//         firstName:"Anis"
//     }},
//     {returndocument:"after"}
// )
// print(up)

// var del=db.contactlist.deleteMany({
//     age:{$lt:5}
// })
// print(del)


var all =db.contactlist.find()
print(all)