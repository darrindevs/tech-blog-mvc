
const { Post } = require('../models');

const postData = [
     {
      "title": "Post 1",
      "content": "Consequat yuccie officia letterpress aute pitchfork lumbersexual before they sold out in chartreuse gastropub ad brunch minim tempor.",
      "post_id": 1,
      "user_id": 1
    },
    {
      "title": "Post 2",
      "content": "Actually +1 normcore, tbh flannel mollit ad hell of velit. Hella quinoa consectetur ad chia green juice anim do tousled jean shorts. ",
      "post_id": 2,
      "user_id": 2
    },
    {
      "title": "Post 3",
      "content": "Taxidermy enim fanny pack non cronut cray activated charcoal fixie banjo flexitarian waistcoat lumbersexual tofu.",
      "post_id": 3,
      "user_id": 3
    },
    {
      "title": "Post 4",
      "content": " Kickstarter ullamco meggings cornhole street art pickled dreamcatcher in pabst cupidatat sustainable lumbersexual fanny pack kombucha.",
      "post_id": 4,
      "user_id": 1
    },
    {
      "title": "Post 5",
      "content": " Velit hammock gastropub single-origin coffee man braid kickstarter tbh.",
      "post_id": 5,
      "user_id": 2
    },
    {
      "title": "Post 6",
      "content": "Truffaut kogi umami cred, taiyaki man bun readymade wayfarers.",
      "post_id": 6,
      "user_id": 3
    },
  ];
  
  
  const seedPosts = () => Post.bulkCreate(postData);
  
  module.exports = seedPosts;