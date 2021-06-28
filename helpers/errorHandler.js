const errorHandle = (err,req,res,next)=>{
    let statusCode
    let message 
    console.log(err.name,"<<<");
    switch (err.name) {
        case 'SequelizeValidationError':
            statusCode = 400
            message = err.errors?err.errors.map(el=>el.message):err.message
            break;
        case 'Login gagal':
            statusCode = 401
            message = 'Email or password is wrong'
            break;
        case 'Invalid Token':
            statusCode = 401
            message = 'Invalid Token'
            break;
        case 'invalid access token':
            statusCode = 401
            message = 'invalid access token'
            break;
        case 'invalid access token':
            statusCode = 404
            message = 'Todo not found'
            break;
        case 'SequelizeUniqueConstraintError':
            statusCode = 400
            message = 'Email has been used'
            break;
        case 'TypeError':
            statusCode = 400
            message = 'Email not registered'
            break;
        case 'Error':
            statusCode = 500
            message = 'Internal server error'
            break;
        case 'Todo not found':
            statusCode = 404
            message = 'Todo not found'
            break;
        default:
            break;
    }
    res.status(statusCode).json({err:message})
}
module.exports = errorHandle