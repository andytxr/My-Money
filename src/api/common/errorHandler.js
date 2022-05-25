const _ = require('lodash');

module.exports = (req, res, next) => {

    const bundle = res.locals.bundle;

    if(bundle.errors){

        let errors = parseErrors(bundle.errors);
        res.status(500).json({errors});

    }else{

        next()

    }

}

const parseErrors = (nodeRestfulErrors) => {

    let errors = [];
    _.forIn(nodeRestfulErrors, error =>{

        errors.push(error.message);

    })

    return errors

}