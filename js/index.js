//GERAL

// 1. O header deve ter cor de fundo #2E948A

let header = document.getElementsByTagName('header');
console.log(header);

header[0].style.backgroundColor = '#2E948A';

// 2. No menu do header, está faltando o link do item Cursos que deve redirecionar paracursos.html


let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
console.log(linkCursos);

linkCursos.setAttribute('href', 'curso.html');

//HOME

// 1. No banner da home, está faltando centralizar os elementos filhos da section que tem o id#introducao.

let introducao = document.getElementById('introducao');
console.log(introducao);

introducao.setAttribute('style', 'justify-content: center');

// 2. Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

let depoimentos = document.querySelector('.titulo.depoimento h3');
console.log(depoimentos);

depoimentos.innerHTML = 'O que falam sobre nós';


// 3. Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

let blog = document.querySelector('main section:nth-child(5) h3');
console.log(blog);

blog.innerHTML = 'Mais conteúdo pra você';

// 4. Todos os textos que estiverem com a classe.titulo devem apresentar todas as letras maiúsculas.
''
let titulo = document.querySelectorAll('.titulo');
console.log(titulo);

titulo.forEach(titulo => {
    titulo.style.textTransform = 'uppercase';
});

// 5. o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.htmL

let btnposts = document.getElementById('todos_posts');
console.log(btnposts);

btnposts.setAttribute('href', 'blog.html');

// 6. Adicionar um novo curso na section que contém o id investimentos_poupando_independencia

let cursoatual = document.querySelector('#investimentos_poupando_independencia');
console.log(cursoatual);

let novocurso =
    `<div id="independencia"><img src="/imagens/independencia_financeira.png"
width="180px" alt="Independência Financeira">
<h2>Independência Financeira</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore
eu fugiat nulla pariatur. </p>
<a class="comecar_agora" href="./curso.html">começar
agora</a>
</div>`;

cursoatual.innerHTML = cursoatual.innerHTML + novocurso;