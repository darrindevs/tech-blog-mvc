//* ✅ set up seeding dependencies 
const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userSeeds');
const projectData = require('./postSeeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n--- DATABASE SYNCED ---\n');

  await seedUsers();
  console.log('\n--- USERS SEEDED ---\n');

  await seedPosts();
  console.log('\n--- POSTS SEEDED ---\n');

  await seedComments();
  console.log('\n--- COMMENTS SEEDED ---\n');
  
  process.exit(0);
};

seedDatabase();
