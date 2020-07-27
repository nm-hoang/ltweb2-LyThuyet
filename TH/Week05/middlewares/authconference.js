const Conference = require('../services/conference');

function authconference(req, res, next) {
    if (req.session.confList !== null) {
        res.locals.confList = req.session.confList;
    } else {
        res.locals.confList = [];
    }

    const attend = req.body.attend;
    if (attend) {
        Attends.add(attend);
    }

    req.confList = Conference.findAll();
    req.session.confList = Conference.findAll();
    res.locals.confList = req.session.confList;

    next();
}

module.exports = authconference;