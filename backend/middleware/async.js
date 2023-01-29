const asyncWrapper = (fn) => {
    // The argument `fn` is the controller.js function being passed into this middleware.

    /*
        This asyncWrapper() is invoked immediately. We pas (req, res, next) to the controller.js function and
        we wrap the controller function in the middleware.
        
        And the way it is done is, we return another function since we use `await` inside the function body.
    */

    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch(err) {
            next(err)
        }
    }
}

module.exports = asyncWrapper