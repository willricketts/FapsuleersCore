module.exports = {
    
  serverError: serverError   
};

function serverError(err, res) {
    if(err) {
        res.send(500, 'Lost in space!');
    }
}