const Turma = require('./Turma'); 

class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }
    aprovado() {
        return this.nota >= 7 && this.frequencia > 20 ? 'aprovado' : 'reprovado'
    }
}

module.exports = TurmaPresencial;