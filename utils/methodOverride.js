// UTILITY FUNCTIONS
// method override function
const methodOverride = (req, res, next) => {
    // extract method type from query string variable
    const { _method } = req.query;
    // call next mw if custom method wasn't set
    if (!_method) return next();
    // else, change req method to specified http method
    req.method = _method.toUpperCase();
    // call next mw
    next();
};

// EXPORTS
module.exports.methodOverride = methodOverride;
