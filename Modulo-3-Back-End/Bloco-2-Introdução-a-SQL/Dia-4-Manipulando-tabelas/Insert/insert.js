// `INSERT` - adicionando dados em tabelas
// Atenção: Antes de começar os exercícios é pressuposto que:

// O banco sakila foi removido no começo do dia e restaurado novamente;
// Todos os exercícios sejam feitos na ordem que estão sendo apresentados.

// 1-   Insira um novo funcionário na tabela sakila.staff.

// Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector. Clique na aba columns e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!   
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Geralt', 'of Rivia', 2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');

// 2 - Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Jeff', 'Bezos', 2, 'jeffbezos@gmail.com', 1, 1, 'jeffb', 'ImTheChamp'),
    ('Sekiro', 'Okami', 2, 'sekirowolf@gmail.com', 1, 1, 'okami', 'SekiroTheSamurai');

// 3 - Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.    
INSERT INTO sakila.actor(first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;

// 4 - Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (name)
VALUES
    ('Sci-Fi'),
    ('Fantasy'),
    ('Biography');

// 5 - Cadastre uma nova loja na tabela sakila.store.
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);