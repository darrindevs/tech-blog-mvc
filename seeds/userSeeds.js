const { User } = require('../models');

const userData = [
  {
    "name": "Darrin",
    "email": "hello@darrin.dev",
    "password": "password12345"
  },
  {
    "name": "Zeke",
    "email": "zeke@gmail.com",
    "password": "password12345"
  },
  {
    "name": "Fletch",
    "email": "fletch@gmail.com",
    "password": "password12345"
  },
  {
    "name": "Rondo",
    "email": "rondo@gmail.com",
    "password": "password12345"
  },
  {
    "name": "Kaya",
    "email": "kaya@gmail.com",
    "password": "password12345"
  },
  {
    "name": "Yuki",
    "email": "yuki@gmail.com",
    "password": "password12345"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;