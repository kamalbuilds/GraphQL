const { UserList } = require('./data');
const books =require('./data')
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      users(){
        return UserList;
      }
    },
  };

  module.exports = { resolvers };