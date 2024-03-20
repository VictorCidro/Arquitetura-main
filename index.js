const Aluno = require('./Aluno');
const Turma = require('./Turma');
const TurmaPresencial = require('./TurmaPresencial');

const aluno1 = new Aluno('Victor Luiz Montelares Cidro', 'victorcidro', '2418398');
const turma1 = new Turma('ES46A', 8.0);
const turmaPresencial1 = new TurmaPresencial('CS201', 7.5, 20);

console.log(aluno1);
console.log(turma1);
console.log(turmaPresencial1);

console.log(`Aluno(a) ${aluno1.nome} foi ${turma1.aprovado()} na turma ${turma1.codigo}`);
console.log(`Aluno(a) ${aluno1.nome} foi ${turmaPresencial1.aprovado()} na turma presencial ${turmaPresencial1.codigo}`);
