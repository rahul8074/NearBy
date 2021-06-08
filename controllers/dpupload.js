var multer = require('multer');
var upload = multer({dest:'uploads/'});
var router = express.Router();

router.post('/single', upload.single('profile'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      res.send(400);
    }
  });

module.exports = router;