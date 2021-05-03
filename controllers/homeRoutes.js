//* ✅ set up home routes 
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


// * get all posts on homepage 
router.get('/', async (req, res) => {
  var postData = [];
  try {
    //* Get all posts and JOIN with users and comments
    postData = await Post.findAll({
      include: 
      [{all: true, nested: true}]
    });
  } catch (err) {
    res.status(500).json(err.message);
  }

//* Set up the data so the template can read it
  const posts = postData.map((post) => post.toJSON());
    //console.log(posts);
    //* render posts on 'homepage' as defined in handlebars
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
});



//* If user is already logged in and they access /login redirect to /dashboard 
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
    // otherwise render login 
    res.render('login'); // from handlebars
  });

module.exports = router;
