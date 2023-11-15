/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("users_db");

// Insert a few documents into the sales collection.
// db.getCollection("users_collection").insertMany([
//   { firstName: "John", lastName: "Doe", email: "jdoe@email.com" },
//   { firstName: "Kyle", lastName: "Williams", email: "kwilliams@email.com" },
//   { firstName: "Matthew", lastName: "Hardin", email: "mhardin@email.com" },
//   { firstName: "Kevin", lastName: "Brown", email: "kbrown@email.com" },
//   { firstName: "Alyssa", lastName: "Baker", email: "abaker@email.com" },
//   { firstName: "Travis", lastName: "Simmons", email: "tsimmons@email.com" },
//   { firstName: "Erica", lastName: "Hardin", email: "ehardin@email.com" },
//   { firstName: "Chris", lastName: "Crowe", email: "ccrowe@email.com" },
// ]);

// Run a find command to get a user by their email.
const findUserByEmail = db
  .getCollection("users_collection")
  .find({
    email: "tsimmons@email.com",
  })
  .count();

// Print a message to the output window.
console.log(`${findUserByEmail}`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection("users_collection").aggregate([
  // Find all users with last name of Hardin.
  { $match: { lastName: "Hardin" } },
  // Group the users by their lastName.
  {
    $group: {
      _id: "$lastName", // Group by the 'lastName' field
      users: { $push: { firstName: "$firstName", lastName: "$lastName" } }, // Accumulate names
    },
  },
]);

db.getCollection("users_collection").find({});
