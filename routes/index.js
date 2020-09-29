const router = require('express').Router();
// Import all of the API routes from /api/index.js (no need for index.js)
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

// add a prefix of `/api ` to all of the api routes improtaed from the `api routes`
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
