
const { Post } = require('../models');

const postData = [
     {
      "title": "Post 1",
      "content": "I'm baby bushwick DIY echo park, trust fund taxidermy vice activated charcoal tilde PBR&B. Portland everyday carry etsy master cleanse hell of, selvage chartreuse.",
      "post_id": 1,
      "user_id": 1
    },
    {
        "title": "Post 2",
        "content": "Post-ironic adaptogen pinterest neutra chicharrones kitsch next level leggings coloring book prism fingerstache stumptown pop-up. Tilde tumeric cloud bread retro ugh, keytar man braid kinfolk mumblecore pug art party snackwave. Dreamcatcher messenger bag hashtag sriracha marfa lomo meditation.",
        "post_id": 2,
        "user_id": 2
      },
      {
        "title": "Post 3",
        "content": "Plaid meditation williamsburg glossier kogi polaroid sustainable banh mi. Enamel pin master cleanse artisan keffiyeh hammock tousled. Sustainable craft beer readymade kale chips viral semiotics chartreuse knausgaard waistcoat ugh fixie heirloom helvetica tumeric chambray.",
        "post_id": 3,
        "user_id": 3
      },
      {
        "title": "Post 4",
        "content": " Yr try-hard offal, tumeric post-ironic intelligentsia kale chips blog lo-fi ugh. Paleo deep v etsy health goth narwhal keytar cred. Beard affogato kombucha synth. XOXO cred church-key bushwick.",
        "post_id": 4,
        "user_id": 1
      },
      {
        "title": "Post 5",
        "content": "Organic health goth retro kombucha semiotics brunch affogato paleo narwhal ethical. XOXO photo booth before they sold out slow-carb irony palo santo aesthetic adaptogen organic wolf sriracha offal tacos. ",
        "post_id": 5,
        "user_id": 2
      },
  ];
  
  
  const seedPosts = () => Post.bulkCreate(postData);
  
  module.exports = seedPosts;