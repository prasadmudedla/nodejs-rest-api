var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var request = require('request');
const config = require('../config/config.js');

var url = global.gConfig.node_host + ":" + global.gConfig.node_port;

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// create a user in database
router.post('/', (req, res) => {
    req.body["createdOn"] = new Date().toLocaleDateString();
    request({
        url: `${url}/users/`,
        method: "POST",
        json: req.body
    }, (error, response, body) => {
        if (error) {
            return status(500).send(`Oops!!! I'm sick right now.`);
        }
        return res.status(response.statusCode).send(body);
    });
});

// return all users from database
router.get('/', (req, res) => {
    request(`${url}/users/`, {json: true}, (err, response, body) => {
        if (err) {
            return status(500).send(`Oops!!! I'm sick right now.`);
        }
        return res.status(response.statusCode).send(body);
    });
});

// return single user from database
router.get('/:id', (req, res) => {

    request(`${url}/users/${req.params.id}`, {json: true}, (err, response, body) => {
        if (err) {
            return status(500).send(`Oops!!! I'm sick right now.`);
        }

        if (response.statusCode === 404) {
            return res.status(response.statusCode).send(body);
        }
        res.status(response.statusCode).send(body);
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
