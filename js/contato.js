// 1. O header deve ter cor de fundo #2E948A

let header = document.getElementsByTagName("header");
console.log(header);

header[0].style.backgroundColor = "#2E948A";

//CONTATO

// 1. O formulário não está funcionando, o atributo action deve mandar para url sucesso.html

let cto = document.getElementById("formulario");
console.log(cto);

cto.setAttribute("action", "sucesso.html");

// 2. Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.

let tel = document.createElement("input");
tel.setAttribute("type", "tel");
tel.setAttribute("placeholder", "telefone");
console.log(tel);

let msg = document.querySelector("#formulario form textarea");
console.log(msg);

let formpai = document.querySelector("form");

formpai.insertBefore(tel, msg);

// 3. O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing:border-box;

let campomsg = document.querySelector("#formulario form textarea");
console.log(campomsg);

campomsg.style.boxSizing = "border-box";

// 4. O botão não está do tamanho adequado, precisa ter uma largura maior;

let btnenviar = document.getElementById("enviar");
console.log(btnenviar);

btnenviar.style.width = "40%";

// 5. Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.

let comments = `<section class='titulo depoimento'>
<h3>Depoimentos</h3>
</section>

<section id='falam_sobre'>
<div class="depoimentos">
    <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam.”
        <br>
        <br>
        Wally, 25
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Jaden Smith, 23
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Whoopi Goldberg, 37
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Janes Joplin, 29
    </p>
</div>
</section>`;
let mainpai = document.querySelector("main");
console.log(mainpai);

mainpai.innerHTML = mainpai.innerHTML + comments;
console.log(mainpai);