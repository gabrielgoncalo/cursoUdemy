fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => console.log());

const table = document.createElement('table');
for (let pessoa of json){
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
}