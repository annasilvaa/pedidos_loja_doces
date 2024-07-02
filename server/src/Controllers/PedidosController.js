import PedidosModel from "../Models/PedidosModel.js";

class PedidosController{
    constructor() {
    }
    create(req, res){
        const descricao = req.body.descricao;
        const valor_total = req.body.valor_total;
        const id_cliente= req.body.id_cliente;
        PedidosModel.create(descricao, valor_total,id_cliente).then(
            resposta =>{
                console.debug("Inserindo um pedido...");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch()
        resposta =>{
            console.debug("Erro: Inserindo um pedido.");
            res.status(resposta[0]).json(resposta[1])
        }
    }
    read(req, res){
       PedidosModel.read().then(
        resposta =>{
            console.debug("Mostrando pedido...")
            res.status(resposta[0]).json(resposta[1])
        }
       ).catch(
        resposta =>{
            console.debug("Erro ao mostrar pedido.")
            res.status(resposta[0]).json(resposta[1])
        }
       );
    }

    update(req, res){
        const id_pedido = req.params.id_pedido;
        const descricao = req.body.descricao;
        const valor_total = req.body.valor_total;
        PedidosModel.update(id_pedido,nome).then(
            resposta =>{
                console.debug("Atualizando pedido...")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro atualizando pedido.")
                res.status(resposta[0]).json(resposta[1])
            }
            );
    }
    
    delete(req,res){
        const id_pedido = req.params.id_pedido;

    PedidosModel.delete(id_pedido).then(
            resposta =>{
                console.debug("Deletando um pedido...");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao deletar um pedido.");
                res.status(resposta[0]).json(resposta[1])
            }
        )

    }
}

export default new PedidosController();