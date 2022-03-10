

function changeImg(){
    let resposta = prompt("Qual img vc quer ? 0 - tigre, 1 - leão, 2 - leopardo, 3 - pantera negra, 4 - jaguar, 5 - chita");// qual img o usuario quer mudar

    console.log(resposta);

    let url_usuario = prompt(" digite aqui a sua url: "); // pega a url 

    console.log(url_usuario); 

    let img = document.querySelectorAll("img"); // pegar toda as img
    img = img[resposta]; // fica na img que o usuario escolheu ex o usuario digitou 1 vai ficar img = img[1]
    console.log(img[resposta]);

    img.setAttribute("src", url_usuario); // modifica pra url do usuario

/*/* 
    Passo a passo para resolver o desafio:
    1- Criar uma opção para a seleção do felino (promp)
    2 - Verificar, qual foi o felino escolhido
    3 - Usuário informa uma url/img da internet
    4 - Acessar o atributo 'src', alterar para a img da internet

    ae tudo certo, vcs entendeu ? 

*/
}