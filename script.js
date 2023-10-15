const titulo = document.getElementById('titulo');
const ul = document.querySelector('ul');
const listaOrdenada = documento.getElementById('lista-ordenada');
const a = document.querySelector('a')


titulo.innerText = 'Aprendendo a manipular DOM';
ul.innerHTML = '<li> Elemento de lista JS 01</li><li> Elemento de lista JS 01</li><li> Elemento de lista JS 01</li>';
listaOrdenada.innerHTML =`
<li><a href="https://prozeducacao.com.br"> link I</a></li>
<li><a href="https://prozeducacao.com.br"> link II</a></li>
<li><a href="https://prozeducacao.com.br"> link III</a></li>
`;
a.innerText = 'estude na proz educação. Professores exelentes, conteúdo de qualidade';