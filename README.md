# OracleExemplo
codigos terminal: 
npm init,
adicionar a linha no arquivo package.json >> 
"scripts": {
    "start": "npx tsc && node build/app.js",
  },
npm i express oracledb dotenv,
npm i typescript @types/node @types/express @types/oracledb @types/dotenv --save-dev,
tsconfig >> rootDir: "src" outdir: "build"

para usar o oracle pelo sqldeveloper, conectar via wallet
para usar o oracle no node (ou em qualquer softwsare que eu criar) eu uso via string de conexão - uma linguiça de texto que tem os dados de conexão.



Tarefa pra casa{
  1- Criar conta na OCI e subir um banco
  2- Criar a tabela AERONAVES  e colocar alumas via SQL
  3- Fazer o código que o professor deu funcionar(estudar os links que o professor disponibilizou no drive)
  4- Implementar os serviços Inserir aeronave e Excluir aeronave
  5- Tirar a SENHA e USUÁRIO do CÓDIGO... usando o dotenv (criar um arquivo de ambiente e criar o usuário e a senha dele, e no código mandar buscar pelo arquivo, para aumentar a segurança)
  6- Estudar o que são Promises (async/await)
  7- Todo serviço que envolve banco de dados deve trabalhar com Promises
}