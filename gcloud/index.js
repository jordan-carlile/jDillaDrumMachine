/**
 * Responds to any HTTP request.
 *
 * @param {!Object} req HTTP request context.
 * @param {!Object} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    let message = req.query.message || req.body.message || 'ello World!';
    let messageJson = `{"message": "${message}"}`
    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).send(messageJson);
    // test deploy from local
  };