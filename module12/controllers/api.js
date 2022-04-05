exports.getApi = (req, res, next) => {
        res.render('api/api', {
          path: '/api'
        });
  };