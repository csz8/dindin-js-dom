// 1. O header deve ter cor de fundo #2E948A

let header = document.getElementsByTagName('header');
console.log(header);

header[0].style.backgroundColor = '#2E948A';

// 2. No menu do header, está faltando o link do item Cursos que deve redirecionar paracursos.html


let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
console.log(linkCursos);

linkCursos.setAttribute('href', 'curso.html');

// HOME 2. Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

let depoimentos = document.querySelector('.titulo.depoimento h3');
console.log(depoimentos);

depoimentos.innerHTML = 'O que falam sobre nós';

// HOME 1. No banner da home, está faltando centralizar os elementos filhos da section que tem o id#introducao.

let introducao = document.getElementById('introducao');
console.log(introducao);

introducao.style.flex.justifyContent = 'center';

// HOME 3. Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

let blog = document.querySelector('main section:nth-child(5) h3');
console.log(blog);

blog.innerHTML = 'Mais conteúdo pra você';

// HOME 4. Todos os textos que estiverem com a classe.titulo devem apresentar todas as letras maiúsculas.

let titulos = document.getElementsByClassName('.titulo');
console.log(titulos)

//usar foreach