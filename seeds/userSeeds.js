const { User } = require('../models');

const userData = [
  {
    "name": "Darrin",
    "email": "hello@darrin.dev",
    "password": "password12345"
  },
  {
    "name": "Zack",
    "email": "zack@gmail.com",
    "password": "password12345"
  },
  {
    "name": "Finn",
    "email": "finn@gmail.com",
    "password": "password12345"
  },
];

const seedUsers = () => Post.bulkCreate(userData);

module.exports = seedUsers;