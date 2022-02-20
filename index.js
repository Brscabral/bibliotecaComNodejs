const chalk = require('chalk');
const fs = require('fs');//biblioteca nativa do nodejs.
//geralmente, essa biblioteca serve para acessar arquivos, ver arquivos e diretorios
//sintaxe: fs.readFile(file,[encoding],[callback])
//file: caminho do arquivo(diretorio)
//[encoding]: geralmente utf-8
//[callback]: a função que vamos usar para a resolução do nosso problema
//detalhe importante da callback: ela vai receber um parametro de erro e sucesso

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'))
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(chalk.green(texto))
    } catch(erro) {
      trataErro(erro);
    } finally {
      console.log(chalk.yellow('operação concluída'));
    }
   }

   pegaArquivo('./arquivos/texto1.md');

//function pegaArquivo(caminhoDoArquivo){
  //  const encoding='utf-8';
  //  fs.promises //usamos para formas de códigos assicronas
  //  .readFile(caminhoDoArquivo, encoding)
  //  .then((texto)=>console.log(chalk.green(texto)))
  //  .catch((erro)=>trataErro(erro))
//}

//function pegaArquivo(caminhoDoArquivo){
  //  const encoding='utf-8';
    //fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=>{
      //  if(erro){
        //    trataErro(erro);
        //}else{
        //    console.log(chalk.green(texto));
       // }
   // })
   
//}
