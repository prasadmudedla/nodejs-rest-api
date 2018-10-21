var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var User = require('./User');

// create a user in database
router.post('/', (req, res) => {
    User.create ({
            id: parseInt(req.body.id),
            name: req.body.name,
            email: req.body.email,
            createdOn: req.body.createdOn
        }, (err, user) => {
            if (err) {
                return res.status(500).send(`Oops!!! I'm sick right now.`);
            }
            return res.status(res.statusCode).send(user);
        });
});

// return all users from database
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return status(500).send(`Oops!!! I'm sick right now.`);
        }
        res.status(200).send(users);
    });
});

// return single user from database
router.get('/:id', (req, res) => {
    User.findOne({id: req.params.id}, (err, user) => {
        if (err) {
            return res.status(500).send(`There was a problem finding the user.`);
        }

        if (!user) {
            return res.status(404).send(`No user found`);
        }
        res.status(200).send({"name": user.name, "email": user.email, "createdOn": user.createdOn});
    });
});

// delete a user from database
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).send(`There was a problem deleting the user.`);
        }
        res.status(200).send(`User ${user.name} is deleted.`);
    });
});

// update a single user in the database
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, re.body, { new: true }, (err, user) => {
        if (err) {
            return res.status(500).send(`There was a problem updating the user`);
        }
        res.status(200).send(user);
    });
});

module.exports = router;
