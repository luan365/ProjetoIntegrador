# OracleExemplo
codigos terminal: 
npm init,
package.json >> 
"scripts": {
    "start": "npx tsc && node build/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
npm i express oracledb dotenv,
npm i typescript @types/node @types/express @types/oracledb @types/dotenv --save-dev,
tsconfig >> rootDir: "src" outdir: "build"