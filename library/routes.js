let express = require('express'),
    path = require('path'),
    fs = require('fs');

export default function(app) {
    // CONTROLLER ROUTES
    fs.readdirSync('./library/routes').forEach(function(file) {
        if (file.split('.')[1] === 'js') {
            require('./routes/' + file).routes(app);
        }
    });

    // ANGULAR APP
    app.use(express.static(path.join('app')));
    app.route('/modules/*').get(parts);
    app.route('/*').get(index);
};

let index = function index(req, res) {
    return res.render('index');
};

let parts = function parts(req, res) {
    let stripped = req.url.split('.')[0];
    let requestedView = path.join('./', stripped);
    res.render(requestedView, function(err, html) {
        if (err) return handleError(lang.notFound, res);
        return res.send(html);
    });
};