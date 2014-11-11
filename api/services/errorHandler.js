module.exports = {
    
  serverError: serverError,
  nullCollection: nullCollection    
};

function serverError(err, res) {
    if(err) {
        res.send(500, 'Lost in space!');
    }
}