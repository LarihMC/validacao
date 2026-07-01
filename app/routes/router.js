const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("pages/index")
})

//faz a rotas mapeadas para as paginas que o usuario acessa atraves de botoes e links (adm e usuario)




module.exports = router;