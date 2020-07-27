const Attends = require('../services/attend');

function authattend(req, res, next) {
    if (req.session.attendlist !== null) {
        res.locals.attendlist = req.session.attendlist;
    } else {
        res.locals.attendlist = [];
    }

    const attend = req.body.attend;
    if (attend) {
        Attends.add(attend);
    }

    req.attendlist = Attends.findAll();
    req.session.attendlist = Attends.findAll();
    res.locals.attendlist = req.session.attendlist;

    next();
}

module.exports = authattend;