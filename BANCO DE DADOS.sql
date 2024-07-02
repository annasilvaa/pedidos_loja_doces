CREATE DATABASE pedidos_loja_doces;
USE pedidos_loja_doces;
drop table clientes;

CREATE TABLE clientes(
`id_cliente` INT NOT NULL AUTO_INCREMENT,
`nome` VARCHAR(45)  NOT NULL,
`endereco` VARCHAR(200)  NOT NULL,
PRIMARY KEY (`id_cliente`)
);

CREATE TABLE pedidos (
`id_pedido` INT NOT NULL AUTO_INCREMENT,
`descricao` varchar(200) NOT NULL,
`valor_total` REAL NOT NULL,
`id_cliente` INT NOT NULL,
PRIMARY KEY (`id_pedido`, `id_cliente`),
INDEX `id_cliente_idx` (`id_cliente` ASC) ,
CONSTRAINT `id_cliente`
FOREIGN KEY (`id_cliente`)
REFERENCES `clientes` (`id_cliente`)
);

SELECT * FROM clientes;
SELECT * FROM pedidos;

INSERT INTO clientes VALUES(
NULL,
"anna",
"cariacica"
);

INSERT INTO pedidos VALUES(
NULL,
" 2 bolos de chocolate", 
5.00,
1
);
