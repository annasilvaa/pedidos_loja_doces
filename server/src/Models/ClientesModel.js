import mysql from "mysql2"
import config from "../Config.js";

class ClientesModel {
    constructor(){
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome, endereco) {
        let sql = `INSERT INTO clientes (nome, endereco) VALUES("${nome}","${endereco}");`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                }
                resolve([201, "Cliente Adicionado com Sucesso!"])
            })
        });
    }

    read() {
        let sql = `SELECT * FROM clientes;`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        });
    }

    update(id_cliente, nome, endereco){
        let sql = `UPDATE clientes SET nome="${nome}", endereco = "${endereco}" WHERE id_cliente="${id_cliente}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                } else if (retorno.affectedRows > 0) {
                    resolve([200, "Cliente Atualizado com Sucesso!"])
                } else {
                    resolve([404, "Cliente não encontrado!"])
                }
            })
        });
    }

    delete(id_cliente){
        let sql = `DELETE from clientes WHERE id_cliente="${id_cliente}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                } else if (retorno.affectedRows > 0) {
                    resolve([200, retorno])
                } else {
                    resolve([404, "Cliente não encontrado!"])
                }
            })
        })
    };
}

export default new ClientesModel();