const alunas = [
    { nome: 'Ana', nota: 5 },
    { nome: 'Maria', nota: 4 },
    { nome: 'Julia', nota: 9 },
    { nome: 'Beatriz', nota: 7 },
    { nome: 'Sofia', nota: 6 }
];

const filtrarAlunasAprovadas = (alunas) => 
    alunas.filter(aluna => aluna.nota >= 6);

const alunasAprovadas = filtrarAlunasAprovadas(alunas);
console.log(alunasAprovadas);
