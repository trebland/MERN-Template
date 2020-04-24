const router = require('express').Router();
const users = require("../controllers/user.controller.js");

// Multiple calls for the same route based on the call-type
router
	.route('/')
	.get(users.findAll)
	.post(users.create);

    
router
    .route('/anon')
    .get(users.anon);

router
	.route('/:id')
	.get(users.findById)
	.put(users.update)
    .delete(users.remove);
    

module.exports = router;