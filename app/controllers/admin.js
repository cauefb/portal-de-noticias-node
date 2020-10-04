module.exports.formulario_inclusao_noticia = function(application, req,  res){
    res.render("admin/formulario_inclusao_noticia", {validacao: {}, noticia:{}});
}

module.exports.noticias_salvar = function(app, req, res){
    var noticia = req.body;

    req.assert('titulo','Título é obrigatorio').notEmpty();
    req.assert('resumo','Resumo é obrigatorio').notEmpty();
    req.assert('resumo','Deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor','Autor é obrigatorio').notEmpty();
    req.assert('data_noticia','Data é obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia','Título é obrigatorio').notEmpty();

    var erros = req.validationErrors();
    console.log(erros)
    if(erros){
      res.render("admin/formulario_inclusao_noticia", {validacao : erros, noticia : noticia});
      return;
    }

 

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia,function (error, result) {
        
        res.redirect("/noticias");//redirecionamento
    
      
    });

}