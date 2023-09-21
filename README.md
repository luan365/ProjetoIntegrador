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
para usar o oracle no node (ou em qualquer softwsare que eu criar) eu uso via string de conexão - uma linguiça de texto que tem os dados de conexão