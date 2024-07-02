import ClientesModel from "../Models/ClientesModel.js";

class ClientesController {
    constructor() {
    }
    create(req, res){
        const nome = req.body.nome;
        const endereco = req.body.endereco;
        ClientesModel.create(nome, endereco).then(
            resposta =>{
                console.debug("Inserindo um cliente...");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch()
        resposta =>{
            console.debug("Erro: Inserindo um cliente.");
            res.status(resposta[0]).json(resposta[1])
        }
    }
    read(req, res){
       ClientesModel.read().then(
        resposta =>{
            console.debug("Mostrando cliente...")
            res.status(resposta[0]).json(resposta[1])
        }
       ).catch(
        resposta =>{
            console.debug("Erro ao mostrar cliente.")
            res.status(resposta[0]).json(resposta[1])
        }
       );
    }

    update(req, res){
        const id_cliente= req.params.id_cliente;
        const nome = req.body.nome;
        const endereco = req.body.endereco;

        ClientesModel.update(id_cliente,nome, endereco).then(
            resposta =>{
                console.debug("Atualizando cliente...")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro atualizando cliente.")
                res.status(resposta[0]).json(resposta[1])
            }
            );
    }
    
    delete(req,res){
        const id_cliente = req.params.id_cliente;

        ClientesModel.delete(id_cliente).then(
            resposta =>{
                console.debug("Deletando um cliente..");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao deletar um cliente.");
                res.status(resposta[0]).json(resposta[1])
            }
        )

    }
}

export default new ClientesController();