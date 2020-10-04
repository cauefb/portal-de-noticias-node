module.exports.index = function (application, req, res) {
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.get5UltimasNoticias(function (error, result) {
      console.log('controller home')
    res.render("home/index", {noticias : result});
  });
};
