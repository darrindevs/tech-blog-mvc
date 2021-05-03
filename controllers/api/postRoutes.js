const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
      const postData = await Post.findAll({
          include: [
              User,
              {
                  model: Comment,
                  include: [User],
                },
            ]
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
    //* Set up the data so the template can read it
  const posts = postData.map((post) => post.toJSON());
  console.log(posts);
  //* render posts on 'post' as defined in handlebars
  res.render('post', { 
    posts, 
    logged_in: req.session.logged_in 
  });
});

router.get('/:id', withAuth, async (req, res) => {
  try {
      const postData = await Post.findByPk({
          where: {
              id: req.params.id
          },
          include: [
              User,
                {
                    model: Comment,
                    include: [User],
                },
            ]
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
  try {
      const data = req.body;
      data.user_id = req.session.user_id;
      const postData = await Post.create(data);
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
});


router.put('/:id', withAuth, async (req, res) => {
  try {
      const postData = await Post.update(req.body, {
            where: {
                id: req.params.id
            },
        })
      if (!postData) {
            res.status(404).json({ message: 'This Post does not exist' });
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
      const postData = await Post.update({
            where: {
                id: req.params.id
            },
        })
        if (!postData) {
            res.status(404).json({ message: 'This Post does not exist' });
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;