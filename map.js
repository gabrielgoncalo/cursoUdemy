const pessoas = [
    { id: 3, nome: 'gabriel'},
    { id: 2, nome: 'joao'},
    { id: 1, nome: 'jose'},
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa});
}

console.log(novasPessoas);


