// Switch to database
use("students");

// 1. Insert a single document
db.students.insertOne({ name: "Alice", age: 25 });

// 2. Insert multiple documents
db.students.insertMany([
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
]);

// 3. Find all documents
db.students.find({});

// 4. Find documents where name is 'Alice'
db.students.find({ name: "Alice" });

// 5. Find age > 30
db.students.find({ age: { $gt: 30 } });

// 6. Find age < 30
db.students.find({ age: { $lt: 30 } });

// 7. Multiple conditions (AND)
db.students.find({ name: "Alice", age: { $gt: 20 } });
