
//Elementos de a e h1 capturando:
let titulo = document.getElementById('titulo')
let link = document.querySelector('a');

//Add conteúdo aos elementos de h1 e a
titulo.innerText = 'Aprendendo a manipular DOM'
link.innerText = 'estude na proz educação. Professores exelentes, conteúdo de qualidade'

let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = documento.querySelector('ol')

//Add trÊs itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
  <li>Elemento de lista JS 01</li>
  <li>Elemento de lista JS 01</li>
  <li>Elemento de lista JS 01</li>
`
listaOrdenada.innerHTML = `
<li><a href="https://prozeducacao.com.br">Proz Educação</a></li>
<li><a href="https://www.google.com.br/">Google</a></li>
<li><a href="https://https://www.waws.com.br"> AWS</a></li>
`

