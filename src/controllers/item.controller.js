create = async function (req, res) {
  res.send({ message: 'Rota funcionando' });
};

module.exports = {
  create: create,
};
