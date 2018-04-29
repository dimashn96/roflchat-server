export const config = {

  server: {
    port: 3000,
    path: {
      api: '../build/router'
    }
  },
  db: {
    name: 'roflchat',
    uri: 'mongodb://localhost:27017/roflchat',
    collections: {
      users: 'users'
    }
  },
  auth: {
    secret: 'TTTTOOOOPPPPSSSSEEEECCCCRRRREEEETTTT'
  }

};
