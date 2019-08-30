exports.sucess = function(result){
    return{
        status:'sucess',
        result: result
    }
};
exports.error = function (message) {
    return{
        status: 'error',
        message: message
    }
};
