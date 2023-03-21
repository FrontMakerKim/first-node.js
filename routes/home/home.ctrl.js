const home = (reg, res) => {
  res.render("home/index");
};

const login = (reg, res) => {
  res.render("home/login");
};

module.exports = {
  home,
  login,
};
