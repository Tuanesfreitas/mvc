import projetos from "../models/projetos.js";

class ProjetoController {

    static getAllProjetos = (req, res) => {
        projetos.find((err, projetos) => {
            res.status(200).json(projetos)
        })
    }

    static createProjetos = (req, res) => {
        let projetos = new projetos (req.body);
        
        projetos.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} -falha ao cadastrar pessoa doadora`}) 
            } else {
                    res.status(201).send(projetos.toJSON())
            }
         })
    }
}
   
    


export default ProjetoController;