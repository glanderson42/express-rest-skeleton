function getHelloWorld(req, res) {
  res.json({ message: 'Hello world!' });
}

module.exports = getHelloWorld;
