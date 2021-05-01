//* ✅ set up model dependencies 
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  //? can the comment belong to both user and post?
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

  Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });

module.exports = { User, Post, Comment };
