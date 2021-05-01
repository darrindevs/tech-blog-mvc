const { Comment } = require('../models');

const commentData = [
    {
        "content": "VHS readymade poke bushwick lyft listicle knausgaard crucifix labore. Glossier pop-up beard truffaut DIY hexagon yr fanny pack ethical fixie vinyl vexillologist seitan.",
        "comment_id": 1,
        "post_id": 1,
        "user_id": 2
      },
      {
          "content": " Lyft tempor farm-to-table +1 drinking vinegar etsy. Post-ironic enim literally hexagon, irure marfa lomo hammock magna flexitarian small batch mlkshk neutra.",
          "comment_id": 2,
          "post_id": 2,
          "user_id": 3
        },
        {
          "content": " Slow-carb gentrify bushwick, 8-bit photo booth green juice twee chicharrones. Enamel pin twee taxidermy lumbersexual woke subway tile thundercats. ",
          "comment_id": 3,
          "post_id": 3,
          "user_id": 1
        },
        {
          "content": "Salvia viral ullamco, deep v meditation in aliqua art party fam semiotics tilde drinking vinegar literally microdosing.",
          "comment_id": 4,
          "post_id": 4,
          "user_id": 3
        },
        {
          "content": "Vape eu asymmetrical irony woke bespoke. Velit in poutine pariatur listicle, banh mi vice tilde pinterest dolor laboris. Id brooklyn four loko, velit XOXO cliche celiac meditation.",
          "comment_id": 5,
          "post_id": 5,
          "user_id": 2
        },
    ];


const seedComments = () => Comment.bulkCreate(commentData);
    
module.exports = seedComments;
