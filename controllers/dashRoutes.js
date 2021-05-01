//* ✅ set up dashboard routes 
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//* Use withAuth helper to prevent access to dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        //include: [{ model: Post }],
      });
      const user = userData.get({ plain: true });
      res.render('dashboard', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;