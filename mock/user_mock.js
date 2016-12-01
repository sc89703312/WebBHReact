/**
 * Created by lenovo on 2016/10/17.
 */
'use strict';

module.exports = {
  'GET /api/userinfo' (req, res) {
    setTimeout(function () {
      res.json({
        success: true,
        data: ['foo', 'bar'],
      });
    }, 500);
  },
};
