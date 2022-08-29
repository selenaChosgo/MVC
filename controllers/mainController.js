const path = require('path');

module.exports = {
    home: function(req, res) {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    }, 
    about: function(req, res) {
        res.sendFile(path.join(__dirname, '../views/about.html'));
    }
}