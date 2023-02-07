// Parte 1
// Crie um servidor Node.js utilizando o framework Express com a estrutura inicial do app.js e server.js e prepare o ambiente instalando a biblioteca nodemon.
// Primeiro Passo no app.js
// Segundo passo: Crie o arquivo server.js e importe o arquivo criado no Primeiro passo. Agora, a partir dessa importação utilize o método listen adicionando como parâmetro a porta e a mensagem desejada para o servidor.
const app = require('./app');

app.listen(3001, () => console.log('server running on port 3001'));