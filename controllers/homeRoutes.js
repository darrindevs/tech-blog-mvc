//* ✅ set up home routes 
const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');


// * get all posts on homepage 
router.get('/', async (req, res) => {
  try {
    //* Get all posts and JOIN with users and comments
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
            model: Comment,
            include: {
                model: User,
            }
          },
      ],
    });

    //* Set up the data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    //* render posts on 'homepage' as defined in handlebars
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// * get posts by id
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const post = postData.get({ plain: true });
    // ✅ add post.handlebars to views 
    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
